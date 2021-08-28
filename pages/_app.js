import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "../src/theme";
import Layout from "../components/Layout";
// import { HeaderProvider } from "../context/HeaderContext";
import { RegistrationProvider } from "../context/RegistrationContext";
import { blue, indigo } from "@material-ui/core/colors";

export default function MyApp({ Component, pageProps }) {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: "#44a5f1",
      },
      secondary: {
        main: "#28b5e8",
      },
      contrastThreshold: 3,
    },
  });
  theme = responsiveFontSizes(theme);
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Cargo Shipping</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        <RegistrationProvider>
          <Layout>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </RegistrationProvider>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
