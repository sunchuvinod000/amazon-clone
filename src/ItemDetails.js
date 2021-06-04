import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ItemDetails.css";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function ItemDetails() {
  const location = useLocation();
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: location.state.id,
        title: location.state.title,
        image: location.state.image,
        price: location.state.price,
        rating: location.state.rating,
      },
    });
  };

  return (
    <div className="item_detail w3-animate-top">
      <div>
        <img className="image" src={location.state.image} alt="" />
      </div>
      <div className="info">
        <h1>{location.state.title}</h1>
        <p className="description">{location.state.description}</p>
        <br />
        <div>
          <span className="w3-xlarge">Category : </span>
          <span className=""> {location.state.category}</span>
        </div>
        <div className="price_tag ">
          <small> INR </small>
          <strong>{location.state.price}/- .Rs</strong>
        </div>

        <div className="item_rating">
          {Array(location.state.rating)
            .fill()
            .map(() => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        <div className="w3-row button">
          <button onClick={addToBasket}>Add to Basket</button>
          <Link to="/">
            <button className=" home_button w3-margin-left">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
