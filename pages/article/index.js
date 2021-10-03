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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { FaFilter } from "@react-icons/all-files/fa/FaFilter";
import CardArticle from "../../components/CardArticle";

function article() {
  return (
    <Box w="full" position="relative">
      <Box>
        <Image
          src="https://via.placeholder.com/1440x1239"
          alt="Segun Adebayo"
          w="full"
          h="80vh"
          zIndex="-1"
        />
        <Container
          maxW="668px"
          position="absolute"
          left="56px"
          top="100px"
          p="0"
        >
          <VStack align="flex-start" spacing="6">
            <Heading as="h1" size="3xl">
              Start Writing an Article
            </Heading>
            <Text maxW="497px">
              You can be an author by being active in reading artciles in a
              month or you can request to be an author if you have been a member
              for three months.
            </Text>
            <Button bg="bg.800" color="text.50" size="lg">
              Start Writing
            </Button>
          </VStack>
        </Container>
      </Box>
      <Box py="6">
        <Container maxW="container.xl">
          <HStack>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaFilter />}
                variant="ghost"
              />
              <MenuList>
                <MenuItem>Name (A-Z)</MenuItem>
                <MenuDivider />
                <MenuItem>Name (Z-A)</MenuItem>
                <MenuDivider />
                <MenuItem>Category</MenuItem>
                <MenuDivider />
                <MenuItem>Last Added</MenuItem>
                <MenuDivider />
                <MenuItem>Last Modified</MenuItem>
              </MenuList>
            </Menu>
            <Text>Filter Article : sort by category</Text>
          </HStack>
          <VStack align="start" spacing="16" my="16">
            {[...Array(5)].map((index) => (
              <VStack align="start" key="index" spacing="8">
                <Heading as="h4" size="lg">
                  Today’s Popular
                </Heading>
                <SimpleGrid columns={3} spacingX="20" spacingY="0">
                  {[...Array(3)].map((item, index) =>
                    index === 2 ? (
                      <Box position="relative" zIndex="-1">
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
                        <Box
                          position="absolute"
                          w="full"
                          h="full"
                          bg="btn.900"
                          opacity="70%"
                          top="0"
                          left="0"
                          rounded="lg"
                          display="flex"
                          align="end"
                          justify="center"
                        >
                          <Text maxW="194" textAlign="center" color="text.50">
                            See another 130+ Government articles
                          </Text>
                        </Box>
                      </Box>
                    ) : (
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
                    )
                  )}
                </SimpleGrid>
              </VStack>
            ))}
          </VStack>
          <Center>
            <Button w="816px" h="118px" opacity="9%" bg="btn.800" rounded="lg">
              <Text color="text.400" opacity="100%">Load another 30+ category</Text>
            </Button>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}

export default article;
