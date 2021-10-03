import React from "react";
import {
  Box,
  Heading,
  HStack,
  VStack,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Button,
  Text,
  Icon,
  Link,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
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
                  Already have an account?
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
                Login Here
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
          <VStack align="stretch" spacing="2">
            <Heading as="h3" size="lg">
              Sign Up
            </Heading>
            <Text fontWeight="light" fontSize="sm" color="text.100">
              Hey, welcome to News Today! Create an account to enjoy our full
              feautres!
            </Text>
          </VStack>

          <VStack align="stretch" spacing="5">
            <FormControl id="email">
              <FormLabel fontSize="md" fontWeights="bold">
                Email address
              </FormLabel>
              <Input
                type="email"
                placeholder="Enter your email adress"
                size="lg"
                rounded="xl"
              />
              <FormErrorMessage>We`ll never share your email.</FormErrorMessage>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontSize="md" fontWeights="bold">
                Password
              </FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                size="lg"
                rounded="xl"
              />
              <FormErrorMessage>We`ll never share your email.</FormErrorMessage>
            </FormControl>
            <FormControl id="phone">
              <FormLabel fontSize="md" fontWeights="bold">
                Phone Number
              </FormLabel>
              <Input
                type="number"
                placeholder="Enter your phone number"
                size="lg"
                rounded="xl"
              />
              <FormErrorMessage>We`ll never share your email.</FormErrorMessage>
            </FormControl>
            <Button
              variant="solid"
              colorScheme="none"
              boxShadow="lg"
              color="text.50"
              bg="btn.800"
              size="lg"
              rounded="xl"
            >
              Sign Up
            </Button>
          </VStack>

          <VStack align="center" spacing="5">
            <Text fontWeight="light" letterSpacing="widest">
              OR SIGN UP WITH
            </Text>
            <HStack align="center" spacing="8">
              <Icon as={FcGoogle} w="50px" h="50px" cursor="pointer" />
              <Icon
                as={FaFacebook}
                color="#376AED"
                w="50px"
                h="50px"
                cursor="pointer"
              />
              <Icon
                as={AiFillTwitterCircle}
                color="#65AFF6"
                w="50px"
                h="50px"
                cursor="pointer"
              />
            </HStack>
          </VStack>

          {/* <HStack align="center" spacing="10">
            <Divider />
            <Link>Don’t have an account?</Link>
            <Divider />
          </HStack>

          <Button>Sign Up Now</Button>
          <Link>Back to Home Page</Link> */}
        </VStack>
      </Box>
    </HStack>
  );
}

export default Login;
