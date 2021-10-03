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
import Hastag from "../../components/Hastag";

function search() {
  return (
    <Container maxW="container.xl">
      <Box my="24">
        <HStack align="start" spacing="9">
          {[...Array(8)].map((item, index) => (
            <Button
              key="index"
              size="sm"
              color="text.400"
              colorScheme="teal"
              isActive={index === 0 ? true : false}
              variant="ghost"
            >
              Economy
            </Button>
          ))}
        </HStack>
      </Box>
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
      <SimpleGrid columns={3} spacingX="20" spacingY="12" my="16">
        {[...Array(21)].map((item, index) => (
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
      <Center>
        <Button w="816px" h="118px" opacity="9%" bg="btn.800" rounded="lg">
          <Text color="text.400" opacity="100%">
            Load another 30+ category
          </Text>
        </Button>
      </Center>
    </Container>
  );
}

export default search;
