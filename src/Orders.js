import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setLoading(true);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders  ">
      <span className="w3-xxlarge w3-margin-left">Your Orders</span>
      <Link to="/" className="w3-right w3-margin-right">
        <button className="home_button w3-margin-left">Back to Home</button>
      </Link>
      {loading ? (
        <div className="orders_order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      ) : (
        <ReactLoading
          type="bubbles"
          color="#e1a50e"
          className="loader_order"
          width="100px"
        />
      )}
    </div>
  );
}

export default Orders;
