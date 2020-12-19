import Cookies from "js-cookie";

function logout() {
  Cookies.remove("jwtToken");
  window.location.reload();
}

export default logout;
