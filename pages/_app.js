import "assets/globals.css";
import AuthProvider from "authentication";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;