import { authBase as base } from "./base";
import Cookie from "js-cookie";

export const getUserInfo = () => {
  if (!Cookie.get("jwtToken")) {
    return Promise.resolve(false);
  }
  return base.get("/users/me").then((res) => res.data);
};
