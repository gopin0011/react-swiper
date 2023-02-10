import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL+"api/";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json;charset=utf-8",
    "Accept": "application/json",
  }
});