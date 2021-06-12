import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-vinod.herokuapp.com",
  //https://amazon-clone-vinod.herokuapp.com/
  //"https://us-central1-clone-ce08a.cloudfunctions.net/api", //the api(cloud functions) url
});

export default instance;
