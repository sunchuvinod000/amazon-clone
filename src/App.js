import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";
import ItemDetails from "./ItemDetails";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const promise = loadStripe(
  "pk_test_51Ix383SGLAEqUxAUaeuFrSx63Z2KxY4cYznJNI5VIAqsqpsXy2svAXR9VXyKjlrxeIAxmSQwd6apO7L97c61qy6n00Tg3FQ5dW"
);

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        cookies.set("user", authUser.email);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        cookies.remove("user");
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/itemdetails/:id">
            <Header />
            <ItemDetails />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payments">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
