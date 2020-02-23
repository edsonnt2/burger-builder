import axios from "axios";

const api = axios.create({
  baseURL: "https://react-my-burger-b53d8.firebaseio.com/"
});

export default api;
