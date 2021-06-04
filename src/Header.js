// eslint-disable-next-line
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { useHistory } from "react-router";
function Header() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();

      history.push("/");
    }
  };
  const handleOrders = () => {
    if (user) {
      history.push("/orders");
    } else {
      setTimeout(() => {
        alert("You are not logged in :(");
        history.push("/login");
      }, 1000);
    }
  };
  const getName = () => {
    if (user) {
      let name = user?.email;
      console.log(name);
      var n = name.search("@");
      return name.slice(0, n);
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />

        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionLineOne">
              Hello <strong>{user ? getName() : "Guest"}</strong>
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option" onClick={handleOrders}>
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
