import React from "react";
import {
  Image,
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
  Link,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import Hastag from "../components/Hastag";
import CategoryItem from "../components/CategoryItem";
import CardArticle from "../components/CardArticle";

function Home() {
  return (
    <Box w="full" position="relative">
      <Box>
        <Image
        src="https://via.placeholder.com/1440x1239"
        alt="Segun Adebayo"
        w="full"
        h="100vh"
        zIndex="-1"
      />
      <Container maxW="668px" position="absolute" left="56px" top="100px" p="0">
        <VStack align="flex-start" spacing="6">
          <Heading as="h1" size="3xl">
            Share Information and Educate People
          </Heading>
          <Text maxW="497px">
            Everyone has their point of view of something, but just don’t be
            afraid to express the facts. Be an author and share you prespective
            of something to the world.
          </Text>
          <Button bg="bg.800" color="text.50" size="lg">
            Start Exploring
          </Button>
        </VStack>
      </Container>
      </Box>
      <Box>
        <Box py="7">
          <Container maxW="container.xl">
            <Flex align="center">
              <Heading as="h5" size="md">
                Popular Tags
              </Heading>
              <Spacer />
              <Link color="text.400">More</Link>
            </Flex>
          </Container>
          <Flex pt="7">
            <Box overflow="hidden">
              <HStack spacing="6">
                <Box minW="7" h="5px"></Box>
                {[...Array(20)].map((index) => (
                  <Hastag key={index} tag="ladygaga" />
                ))}
              </HStack>
            </Box>
          </Flex>
        </Box>
        <Box py="14">
          <Container maxW="container.xl">
            <Flex align="center">
              <Heading as="h5" size="md">
                Category
              </Heading>
              <Spacer />
              <Link color="text.400">More</Link>
            </Flex>
          </Container>
          <Box pt="7" overflow="hidden">
            <HStack overflow="hidden" spacing="6">
              <Box minW="7" h="5px"></Box>
              {[...Array(5)].map((index) => (
                <CategoryItem
                  key={index}
                  name="Government"
                  image="https://via.placeholder.com/1440x1239"
                />
              ))}
            </HStack>
          </Box>
        </Box>
        <Box py="14">
          <Container maxW="container.xl">
            <Flex align="center">
              <Heading as="h5" size="md">
                Recommended
              </Heading>
              <Spacer />
              <Link color="text.400">More</Link>
            </Flex>
          </Container>
          <Box pt="7" overflow="hidden">
            <HStack spacing="6">
              <Box minW="7" h="5px"></Box>
              {[...Array(3)].map((index) => (
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
            </HStack>
          </Box>
        </Box>
      </Box>
      <Flex w="full" h="665px" bg="bg.700" align="center" justify="center">
        <HStack align="start" justify="center">
          <VStack align="start" spacing="8" maxW="435px">
            <Heading as="h4" size="xl">
              Let`s hear about Kayla`s success story
            </Heading>
            <Text fontSize="lg">
              See how well News Today works in a real user’s life.{" "}
            </Text>
            <Button bg="bg.800" color="text.50" size="lg">
              Let`s get started
            </Button>
          </VStack>
          <Box overflow="hidden" rounded="lg">
            <Image
              src="https://via.placeholder.com/1440x1239"
              alt="Promotion Image"
              w="670px"
              h="390px"
              objectFit="cover"
            />
          </Box>
        </HStack>
      </Flex>
      <Box py="14">
        <Container maxW="container.xl">
          <Flex align="center">
            <Heading as="h5" size="md">
              Latest News
            </Heading>
          </Flex>
        </Container>
        <Box py="7" px="12" overflow="hidden">
          <SimpleGrid columns={3} spacing="4">
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
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
