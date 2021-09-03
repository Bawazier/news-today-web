import React from "react";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
import { Container, Box } from "@chakra-ui/react";

function DefaultLayout(props) {
  return (
    <>
      <Container maxW="container.xl">
        <DefaultHeader />
        <Box>{props.children}</Box>
      </Container>
      <DefaultFooter />
    </>
  );
}

export default DefaultLayout;
