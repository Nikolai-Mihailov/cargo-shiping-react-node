import { Typography } from "@material-ui/core"
import React from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const Layout = ({ children }) => (

    <React.Fragment>
        <Header />
        {children}
        <Footer / >
    </React.Fragment>

);

export default Layout;