import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ce08a.cloudfunctions.net/api", // the api(cloud functions) url
});

export default instance;
