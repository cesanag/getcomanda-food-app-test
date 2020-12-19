import { base } from "./base.js";

export const authLogin = ({ identifier, password }) => {
  return base
    .post("/auth/local", { identifier, password })
    .then((res) => res.data);
};
