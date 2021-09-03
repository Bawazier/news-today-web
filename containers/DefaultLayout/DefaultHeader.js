import React from "react";
import {
  Container,
  Flex,
  Spacer,
  Box,
  Center,
  Heading,
  HStack,
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
import { FaSistrix } from "@react-icons/all-files/fa/FaSistrix";
import { FaRegBell } from "@react-icons/all-files/fa/FaRegBell";
import DefaultHeaderDropdown from "./DefaultHeaderDropdown";

function DefaultHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  return (
    <Container maxW="container.xl" py="2">
      <Flex align="center">
        <Box>
          <Heading size="lg" color="text.300">
            News Today
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <HStack spacing="60px" align="center">
            <Center h="100%">
              <Link color="text.300" href="#">
                Home
              </Link>
            </Center>
            <Center h="100%">
              <Link color="text.200" href="#">
                Articles
              </Link>
            </Center>
            <Center h="100%">
              <Link color="text.200" href="#">
                Category
              </Link>
            </Center>
            <Center h="100%">
              <Link color="text.200" href="#">
                About
              </Link>
            </Center>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          {true ? (
            <HStack spacing="30px" align="center">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="text.400"
                  fontSize="1.2em"
                >
                  <Icon as={FaSistrix} w={6} h={6} />
                </InputLeftElement>
                <Input placeholder="Search" />
                <InputRightElement width="4.5rem">
                  <CloseButton size="sm" color="text.400" />
                </InputRightElement>
              </InputGroup>
              <Box cursor="pointer">
                <Center w="40px" h="40px" bg="transparent" color="text.300">
                  <Icon as={FaRegBell} w={6} h={6} />
                </Center>
              </Box>
              <Box cursor="pointer">
                <DefaultHeaderDropdown isOpen={isOpen} close={close}>
                  <Avatar
                    size="sm"
                    name="Oshigaki Kisame"
                    src="https://bit.ly/broken-link"
                    onClick={open}
                  >
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </DefaultHeaderDropdown>
              </Box>
            </HStack>
          ) : (
            <ButtonGroup spacing="6" size="md">
              <Button width="150px" colorScheme="text.300" variant="ghost">
                Sing up
              </Button>
              <Button
                width="150px"
                colorScheme="text.50"
                bg="bg.800"
                variant="solid"
              >
                Login
              </Button>
            </ButtonGroup>
          )}
        </Box>
      </Flex>
    </Container>
  );
}

export default DefaultHeader;
