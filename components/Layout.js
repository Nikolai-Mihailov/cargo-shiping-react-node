import React from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const Layout = ({ children }) => (
  <React.Fragment>
    <ParallaxProvider>
      <Header />
      {children}
      <Footer />
    </ParallaxProvider>
  </React.Fragment>
);

export default Layout;
