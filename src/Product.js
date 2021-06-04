import React, { useEffect } from "react";
import "./Product.css";
import { useHistory } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating, description, category }) {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: `/itemdetails/${id}`,
      state: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        description: description,
        category: category,
      },
    });
  };

  return (
    <div className="product  w3-hover-shadow" onClick={handleClick}>
      <div className="product_info">
        <strong>{title}</strong>
        <p className="product_price w3-margin-top">
          <small>INR.</small>
          <strong>{price}</strong>
          <small> .Rs/-</small>
        </p>
        <div className="product_rating w3-margin-top">
          {Array(rating)
            .fill()
            .map(() => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default Product;
