import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-9102b.firebaseio.com/"
});

export default instance;
