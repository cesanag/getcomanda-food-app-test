import { useContext } from "react";
import Context from "./context";

export default function useAuth() {
  let ctx = useContext(Context);
  return ctx;
}
