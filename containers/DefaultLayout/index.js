import React from "react";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
import { Box } from "@chakra-ui/react";

function DefaultLayout(props) {
  return (
    <>
      <DefaultHeader />
      <Box>{props.children}</Box>
      <DefaultFooter />
    </>
  );
}

export default DefaultLayout;
