import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
function Checkout() {
  const [{ basket, user }] = useStateValue();
  const isEmpty = basket?.length > 0 ? false : true;

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div className="checkout_title">
          <span className="w3-xxlarge">Your shopping Basket</span>
          <Link to="/" className="w3-right w3-margin-right">
            <button className="home_button w3-margin-right">
              Back to Home
            </button>
          </Link>
          {isEmpty ? (
            <h4 className="w3-center">
              It's empty go back to{"  "}
              <Link to="/" className="link">
                <strong>Home</strong>
              </Link>
            </h4>
          ) : (
            <div>
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
