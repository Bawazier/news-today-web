import React from "react";
import {
  Image,
  Box,
  Container,
  Heading,
  Button,
  Flex,
  Spacer,
  HStack,
  SimpleGrid,
  Icon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import CardProfile from "../../components/CardProfile";
import CardArticle from "../../components/CardArticle";

function ProfileView() {
  return (
    <>
      <Box h="80vh" position="relative">
        <Container maxW="container.xl" py="14">
          <Flex>
            <Box>
              <LinkBox>
                <HStack align="center">
                  <Icon as={IoIosArrowBack} fontSize="23px" fontWeight="bold" />
                  <LinkOverlay href="#">Category</LinkOverlay>
                </HStack>
              </LinkBox>
            </Box>
            <Spacer />
            <Box>
              <Heading as="h4" size="md">
                Joe Daniel
              </Heading>
            </Box>
            <Spacer />
            <Box>&nbsp;</Box>
          </Flex>
        </Container>
        <Box>
          <Image
            src="https://via.placeholder.com/1440x1239"
            alt="Segun Adebayo"
            w="full"
            h="187px"
            zIndex="-1"
          />
        </Box>
        <Box position="absolute" bottom="0" left="0" right="0">
          <Box maxW="55%" marginX="auto">
            <HStack align="baseline" spacing="7">
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
              <HStack spacing="4">
                <Button
                  size="lg"
                  w="221px"
                  rounded="xl"
                  colorScheme="none"
                  bg="btn.800"
                  color="text.50"
                >
                  Message
                </Button>
                <Button
                  size="lg"
                  rounded="xl"
                  colorScheme="none"
                  bg="btn.900"
                  color="text.50"
                >
                  Following
                </Button>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box py="14">
        <Container maxW="container.xl">
          <Heading as="h5" size="md" mb="7">
            Post
          </Heading>
          <SimpleGrid columns={3} spacing={10}>
            {[...Array(9)].map((index) => (
              <CardArticle
                key={index}
                image="https://via.placeholder.com/1440x1239"
                title="COVID-19"
                subTitle="Why corona never ends? Let’s see how its facts"
                likes="2.1"
                time="1hr ago"
                isLike={false}
                isBookmark={false}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default ProfileView;
