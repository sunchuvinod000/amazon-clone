import Cookies from "universal-cookie";
import axios from "./axios";
const cookies = new Cookies();

export const cart_items = async () => {
  const resp = axios
    .post("/home", { user: cookies.get("user") })
    .then((res) => res.data);
  return resp;
};
