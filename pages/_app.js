import "bootstrap/dist/css/bootstrap.css";
// import "../styles/globals.css";
import Layout from "../components/layout";
// import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
