/* eslint-disable react/no-children-prop */
import React from "react";
import {
  Box,
  Container,
  Image,
  Avatar,
  AvatarBadge,
  Link,
  Heading,
  VStack,
  HStack,
  Flex,
  Spacer,
  Circle,
  Icon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
import CardProfile from "../../components/CardProfile";
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

function Profile() {
  return (
    <Box h="auto">
      <Flex h="full">
        <Box
          w="35%"
          h="full"
          borderRightWidth="0.5px"
          borderRightColor="text.100"
        >
          <Container maxW="container.xl" px="20" py="12">
            <VStack spacing="14" align="start">
              <Heading as="h4" size="md">
                Profile
              </Heading>
              <CardProfile
                image="https://bit.ly/sage-adebayo"
                name="Joe Daniel"
                username="@jonathan"
                status="Member"
                about="Madison Blackstone is a director of publisher, with experience managing global teams."
                sumPost="52"
                sumVisitor="250"
                sumComment="4.5K"
              />
              <VStack w="full">
                <Button
                  w="full"
                  size="lg"
                  rounded="xl"
                  rightIcon={<Icon as={IoIosArrowForward} fontWeight="bold" />}
                  colorScheme="teal"
                  variant="outline"
                >
                  Edit Profile
                </Button>
                <Button
                  w="full"
                  size="lg"
                  rounded="xl"
                  rightIcon={<Icon as={IoIosArrowForward} fontWeight="bold" />}
                  colorScheme="teal"
                  variant="outline"
                >
                  Saved Post
                </Button>
                <Button
                  w="full"
                  size="lg"
                  rounded="xl"
                  rightIcon={<Icon as={IoIosArrowForward} fontWeight="bold" />}
                  colorScheme="teal"
                  variant="outline"
                >
                  FAQ
                </Button>
                <Button
                  w="full"
                  size="lg"
                  rounded="xl"
                  rightIcon={<Icon as={IoIosArrowForward} fontWeight="bold" />}
                  colorScheme="teal"
                  variant="outline"
                >
                  Help
                </Button>
                <Button
                  w="full"
                  size="lg"
                  color="text.50"
                  bg="btn.800"
                  rounded="xl"
                >
                  Logout
                </Button>
              </VStack>
            </VStack>
          </Container>
        </Box>
        <Box w="65%" h="full" position="relative">
          <Box>
            <Image
              src="https://via.placeholder.com/1440x1239"
              alt="Segun Adebayo"
              w="full"
              h="187px"
              zIndex="-1"
            />
            <Container
              maxW="668px"
              position="absolute"
              top="80px"
              left="0"
              right="0"
              p="0"
            >
              <VStack spacing="9">
                <Link color="text.50" fontWeight="bold">
                  Change Background
                </Link>
                <Avatar size="xl">
                  <AvatarBadge
                    children={
                      <Icon as={BsPencilSquare} w="18px" color="text.50" />
                    }
                    boxSize="40px"
                    bg="bg.800"
                    borderWidth="0"
                    cursor="pointer"
                  />
                </Avatar>
                <Link color="text.100" fontWeight="bold">
                  Remove profile picture
                </Link>
              </VStack>
            </Container>
            <Container maxW="container.xl" mt="32">
              <HStack align="start" justify="center" spacing="24">
                <VStack>
                  <FormControl id="username">
                    <FormLabel>Username :</FormLabel>
                    <Input type="text" size="lg" rounded="xl" />
                  </FormControl>
                  <FormControl id="username">
                    <FormLabel>Emaill :</FormLabel>
                    <Input type="text" size="lg" rounded="xl" />
                  </FormControl>
                  <FormControl id="username">
                    <FormLabel>Job :</FormLabel>
                    <Input type="text" size="lg" rounded="xl" />
                  </FormControl>
                  <FormControl id="username">
                    <FormLabel>About :</FormLabel>
                    <Textarea type="text" rounded="xl" />
                  </FormControl>
                </VStack>
                <VStack>
                  <FormControl id="username">
                    <FormLabel>Name :</FormLabel>
                    <Input type="text" size="lg" rounded="xl" />
                  </FormControl>
                  <FormControl id="username">
                    <FormLabel>Password :</FormLabel>
                    <InputGroup>
                      <Input
                        type={false ? "text" : "password"}
                        size="lg"
                        rounded="xl"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="2rem" size="sm">
                          {false ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl id="username">
                    <FormLabel>&nbsp;</FormLabel>
                    <VStack>
                      <Button
                        w="full"
                        size="lg"
                        color="text.50"
                        bg="btn.800"
                        rounded="xl"
                      >
                        Request to be an author
                      </Button>
                      <Button
                        w="full"
                        size="lg"
                        color="text.50"
                        bg="btn.900"
                        rounded="xl"
                      >
                        Save Change
                      </Button>
                    </VStack>
                  </FormControl>
                </VStack>
              </HStack>
            </Container>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Profile;
