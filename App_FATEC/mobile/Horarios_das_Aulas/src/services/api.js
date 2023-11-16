import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.12:7001",
});
export default api;
