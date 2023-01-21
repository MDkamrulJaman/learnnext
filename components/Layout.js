import React from "react";
import Footer from "./Footer";
import Navigator from "./Navigator";

function Layout({ children }) {
  return (
    <>
      <Navigator />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
