import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.18.251:7001",
});
export default api;
