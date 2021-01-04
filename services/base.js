import axios from "axios"
import Cookie from "js-cookie";

const baseURL = "https://g37c0m4nd4.herokuapp.com";

function authorization(j = "") {
  const jwt = j || Cookie.get("jwtToken");
  return `Bearer ${jwt}`;
}

export const base = axios.create({
  baseURL,
});

export const authBase = axios.create({
  baseURL,
  headers: { Authorization: authorization() },
});
