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
import CategoryItem from "../../components/CategoryItem";

function category() {
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
              Choose Article by Category
            </Heading>
            <Text maxW="497px">
              Category helps you to read another article that you haven’t
              thought before. You able to read all articles for free. Enjoy the
              reading!
            </Text>
          </VStack>
        </Container>
      </Box>
      <Box py="6">
        <Container maxW="container.xl">
          <Flex>
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
            <Spacer />
            <Text color="text.200">18 categories</Text>
          </Flex>

          <Center my="2">
            <Text color="text.200">Click the category to explore articles</Text>
          </Center>
          <SimpleGrid columns={6} spacingX="10" spacingY="12" my="16">
            {[...Array(18)].map((index) => (
              <CategoryItem
                key={index}
                name="Government"
                image="https://via.placeholder.com/1440x1239"
              />
            ))}
          </SimpleGrid>
          <Center>
            <Button w="816px" h="118px" opacity="9%" bg="btn.800" rounded="lg">
              <Text color="text.400" opacity="100%">
                Load another 30+ category
              </Text>
            </Button>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}

export default category;
