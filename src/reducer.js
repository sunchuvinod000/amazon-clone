import axios from "./axios";

import { cart_items } from "./Fetch_items";
import Cookies from "universal-cookie";
const cookies = new Cookies();

//get the cart items from redis
const array = [];
cart_items().then((res) => {
  res.forEach((item) => array.push(item));
  console.log("array is", array);
});
export const initialState = {
  basket: array || [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const data = [...state.basket, action.item];
      console.log(cookies.get("user"));
      axios
        .post("/redisadditem", {
          user: cookies.get("user"),
          items: action.item,
        })
        .then((res) => {
          console.log("response from server is ", res.data);
        });

      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      axios.post("/empty", { user: cookies.get("user") });
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.item.id}) as its not in basket!`
        );
      }
      axios.post("/remove", {
        user: cookies.get("user"),
        index: index,
      });

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
