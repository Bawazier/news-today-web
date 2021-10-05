/* eslint-disable react/no-unescaped-entities */
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
  VStack,
  SimpleGrid,
  Icon,
  LinkBox,
  LinkOverlay,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { FiSend } from "@react-icons/all-files/fi/FiSend";
import { MdContentCopy } from "@react-icons/all-files/md/MdContentCopy";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike";
import { AiTwotoneLike } from "@react-icons/all-files/ai/AiTwotoneLike";
import { FaRegBookmark } from "@react-icons/all-files/fa/FaRegBookmark";
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";

function ArticleView() {
  return (
    <Container maxW="container.xl">
      <Box py="14">
        <Flex align="center">
          <Box>
            <LinkBox>
              <HStack align="center">
                <Icon as={IoIosArrowBack} fontSize="23px" fontWeight="bold" />
                <LinkOverlay href="#">Back</LinkOverlay>
              </HStack>
            </LinkBox>
          </Box>
          <Spacer />
          <Box>
            <Heading as="h4" size="md">
              Article View
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                size="sm"
                variant="ghost"
                colorScheme="none"
                aria-label="Call Sage"
                fontSize="23px"
                fontWeight="bold"
                icon={<FiSend />}
              />
              <MenuList>
                <MenuItem icon={<MdContentCopy />}>Copy link adress</MenuItem>
                <MenuItem icon={<FaFacebook />}>Share to facebook</MenuItem>
                <MenuItem icon={<FaTwitter />}>Share on twitter</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
      <Box>
        <HStack spacing="0">
          <Image
            w="50%"
            h="370px"
            objectFit="cover"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
          />
          <Image
            w="50%"
            h="370px"
            objectFit="cover"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
          />
        </HStack>
      </Box>
      <Box py="12">
        <Flex align="center">
          <Box>
            <HStack spacing="2">
              <Image
                boxSize="50px"
                objectFit="cover"
                rounded="xl"
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
              />
              <VStack align="start" spacing="px">
                <Text color="text.500" fontSize="lg">
                  Name - Status
                </Text>
                <Text color="text.100" fontSize="sm">
                  Wed, March 3rd 2021
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <HStack spacing="4">
              <HStack spacing="2">
                <Icon as={AiOutlineLike} fontSize="3xl" />
                <Text>2.1K</Text>
              </HStack>
              <Icon as={FaRegBookmark} fontSize="2xl" />
            </HStack>
          </Box>
        </Flex>
      </Box>
      <Box>
        <VStack align="start" spacing="9">
          <Heading as="h4" size="lg">
            Thailand at the 2019 Southeast Asian Games
          </Heading>
          <VStack align="start" spacing="6">
            <Text color="text.300" lineHeight="tall">
              During the 2019 Southeast Asian Games, governor the Sports
              Authority of Thailand (SAT) Kongsak Yodmanee criticised the
              organization of the games, as the Philippines held the games in
              many cities and municipalities, causing to the various concerns
              and controversies. He will propose to hold the next Thailand's
              Southeast Asian Games in "one" city or province. He also suggested
              Bangkok and Chonburi Province are the best choice for hosting the
              Thailand's games. He mentioned Bangkok traffic is less congested
              than Manila and the city has many existing venues for the games
              but water sports venues.
            </Text>
            <Text color="text.300" lineHeight="tall">
              Bangkok hosted the inaugural games in 1959 and 1967 as Southeast
              Asian Peninsular Games, which were the precursor to the modern
              Southeast Asian Games, and 1985 as Southeast Asian Games. Bangkok
              hosted many global and continental events such as four-time Asian
              Games and Summer Universiade in 2007.
            </Text>
            <Text color="text.300" lineHeight="tall">
              Bangkok will host the 2021 Asian Indoor and Martial Arts Games
              with Chonburi Province It acted as the test event and a prelude
              for the future multi-sport event, a proposed Youth Olympic Games
              in 2026.
            </Text>
            <Text color="text.300" lineHeight="tall">
              During the 2019 Southeast Asian Games, governor the Sports
              Authority of Thailand (SAT) Kongsak Yodmanee criticised the
              organization of the games, as the Philippines held the games in
              many cities and municipalities, causing to the various concerns
              and controversies. He will propose to hold the next Thailand's
              Southeast Asian Games in "one" city or province. He also suggested
              Bangkok and Chonburi Province are the best choice for hosting the
              Thailand's games. He mentioned Bangkok traffic is less congested
              than Manila and the city has many existing venues for the games
              but water sports venues.
            </Text>
          </VStack>
        </VStack>
      </Box>
      <Box py="12">
        <VStack align="start" spacing="9">
          <Heading as="h5" size="md">
            2 Comments
          </Heading>
          <Box>
            <HStack align="start" spacing="6" w="container.lg">
              <Image
                boxSize="50px"
                objectFit="cover"
                rounded="xl"
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
              />
              <VStack align="start" justify="start" spacing="2" w="full">
                <Text color="text.500" fontSize="lg">
                  You
                </Text>
                <Textarea w="full" placeholder="Here is a sample placeholder" />
                <Button
                  rounded="xl"
                  colorScheme="none"
                  bg="btn.800"
                  color="text.50"
                >
                  Submit
                </Button>
              </VStack>
            </HStack>
          </Box>
          <VStack align="start" spacing="4">
            {[...Array(3)].map((index) => (
              <Box key={index}>
                <HStack align="start" spacing="6" w="container.lg">
                  <Image
                    boxSize="50px"
                    objectFit="cover"
                    rounded="xl"
                    src="https://bit.ly/sage-adebayo"
                    alt="Segun Adebayo"
                  />
                  <VStack align="start" spacing="px">
                    <Text color="text.500" fontSize="lg">
                      Name - Active
                    </Text>
                    <Text color="text.300" fontSize="sm">
                      Couldn’t agree more!
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Container>
  );
}

export default ArticleView;
