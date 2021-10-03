import React from "react";
import Head from "next/head";
import {DefaultLayout} from "../containers";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  bg: {
    50: "#FFFFFF",
    100: "#EFF4FF",
    700: "#D7DDEC",
    800: "#376AED",
    900: "#E5E5E5",
  },
  btn: {
    900: "#0D253C",
    800: "#376AED",
  },
  text: {
    50: "#FFFFFF",
    100: "#7B8BB2",
    200: "#CDCDCD",
    300: "#0D253C",
    400: "#376AED",
    500: "#2D4379",
  }
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>News Today</title>

        <meta name="theme-color" content="#317EFB" />
      </Head>
      <ChakraProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
