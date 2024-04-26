import axios from "axios";

const options = {
  baseURL: "http://localhost:8080/api/v1",
};
const noteAPI = axios.create({ ...options });
export default noteAPI;
