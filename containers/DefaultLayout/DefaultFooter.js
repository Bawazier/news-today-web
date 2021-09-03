import React from "react";
import {
  Container,
  Flex,
  Spacer,
  Box,
  Center,
  Heading,
  VStack,
  Link,
  ButtonGroup,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Avatar,
  AvatarBadge,
  CloseButton,
  Icon,
} from "@chakra-ui/react";

function DefaultFooter() {
  return (
    <Box bg="bg.800">
      <Container maxW="container.xl" py="80px">
        <Flex justify="space-between">
          <VStack align="left" spacing="30px">
            <Link color="text.50" href="#">
              Why News Today
            </Link>
            <Link color="text.50" href="#">
              Be an author
            </Link>
            <Link color="text.50" href="#">
              Community
            </Link>
            <Link color="text.50" href="#">
              FAQ
            </Link>
          </VStack>
          <Spacer />
          <VStack align="right" spacing="30px">
            <Heading size="lg" color="text.50" align="right">
              News Today
            </Heading>
            <Link color="text.50" href="#" align="right">
              Jendral Sudirman Street No. 23 Jakarta, Indonesia
            </Link>
            <Link color="text.50" href="#" align="right">
              (621)989898934
            </Link>
            <Link color="text.50" href="#" align="right">
              newstoday@mail.com
            </Link>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default DefaultFooter;
