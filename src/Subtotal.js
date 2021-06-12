import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./Subtotal.css";
import { useHistory } from "react-router";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }] = useStateValue();
  const handleCheckout = () => {
    if (user) {
      if (basket.length > 0) {
        history.replace("/payments");
      } else {
        alert("Your Basket is Empty....");
        history.push("/");
      }
    } else {
      setTimeout(() => {
        alert("You are not logged in :(");
        history.push("/login");
      }, 500);
    }
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
