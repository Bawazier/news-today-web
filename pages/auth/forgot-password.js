import React from "react";
import {
  Box,
  Heading,
  HStack,
  VStack,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Text,
  Icon,
  Link,
  Divider,
  SimpleGrid,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";

function Login() {
  return (
    <HStack spacing="0" align="flex-start">
      <Box minW="50%" minH="100vh" bg="bg.800" px="60px" py="60px">
        <Link fontSize="24px" color="text.50">
          <Icon as={FaAngleLeft} boxSize="30px" /> Home Page
        </Link>
        <Box w="full" color="text.50" pt="100px">
          <VStack align="center" justify="center" spacing="24">
            <VStack align="center" justify="center" spacing="4" maxW="326px">
              <Heading as="h1" size="3xl" align="center" fonts="heading">
                News Today
              </Heading>
              <Link fontSize="lg">newstoday@mail.com</Link>
            </VStack>
            <VStack align="stretch" justify="center" spacing="4" maxW="500px">
              <HStack align="center" justify="space-between" spacing="4">
                <Divider orientation="horizontal" w="150px" />
                <Link w="200px" textAlign="center">
                  Don’t have an account?
                </Link>
                <Divider orientation="horizontal" w="150px" />
              </HStack>
              <Button
                variant="solid"
                colorScheme="none"
                boxShadow="lg"
                color="text.50"
                bg="btn.900"
                size="lg"
                rounded="xl"
              >
                Sign Up
              </Button>
            </VStack>
            <SimpleGrid columns={2} spacingX="60" spacingY="20px" maxW="500px">
              <Link>Why News Today</Link>
              <Link>Community</Link>
              <Link>Be an author</Link>
              <Link>FAQ</Link>
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
      <Box minW="50%" minH="100vh" bg="transparent" px="100px" pt="100px">
        <VStack align="stretch" spacing="12">
          <VStack align="stretch" spacing="4">
            <Heading as="h3" size="lg">
              DON’T WORRY
            </Heading>
            <Text fontWeight="light" fontSize="sm" color="text.100">
              We are here to help you to recover your password. Enter your email
              adress that you used to register and we’ll give you instructions
              to reset your password.
            </Text>
          </VStack>

          <VStack align="stretch" spacing="5">
            <FormControl id="email">
              <Input
                type="email"
                placeholder="Enter your email adress"
                size="lg"
                rounded="xl"
              />
              <FormErrorMessage>We`ll never share your email.</FormErrorMessage>
            </FormControl>
            <Flex align="center">
              <Link>Rensend link</Link>
              <Spacer />
              <Button
                variant="solid"
                colorScheme="none"
                boxShadow="lg"
                color="text.50"
                bg="btn.800"
                size="lg"
                rounded="xl"
              >
                Send
              </Button>
            </Flex>
          </VStack>
        </VStack>
      </Box>
    </HStack>
  );
}

export default Login;
