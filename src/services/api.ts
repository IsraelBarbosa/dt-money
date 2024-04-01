import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_NETLIFY_SERVERLESS_BASE_URL}`,
});