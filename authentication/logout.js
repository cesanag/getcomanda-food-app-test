import Cookies from "js-cookie";

function logout() {
  Cookies.remove("jwtToken");
  window.location.href = "/";
}

export default logout;
