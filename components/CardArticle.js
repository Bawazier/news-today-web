import React from "react";
import {
  Box,
  VStack,
  HStack,
  Flex,
  Spacer,
  Text,
  Image,
  Icon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike";
import { AiFillLike } from "@react-icons/all-files/ai/AiFillLike";
import { BiTimeFive } from "@react-icons/all-files/bi/BiTimeFive";
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";
import { FaRegBookmark } from "@react-icons/all-files/fa/FaRegBookmark";

function CardArticle({
  image,
  title,
  subTitle,
  likes,
  isLike,
  time,
  isBookmark,
}) {
  return (
    <LinkBox
      as="article"
      w="350px"
      h="180px"
      overflow="hidden"
      rounded="xl"
      shadow="lg"
    >
      <HStack align="start" spacing="10px">
        <Box overflow="hidden" rounded="xl" shadow="md">
          <Image
            src={image}
            alt="Category Image"
            w="145px"
            h="200px"
            objectFit="cover"
          />
        </Box>
        <Box p="24px">
          <VStack align="strach" spacing="32px">
            <VStack align="start">
              <LinkOverlay
                href="#"
                fontSize="lg"
                fontWeight="bold"
                color="text.400"
              >
                {title}
              </LinkOverlay>
              <Text fontSize="md" fontWeight="light" color="text.300">
                {subTitle}
              </Text>
            </VStack>
            <Flex>
              <HStack>
                <Icon
                  as={isLike ? AiFillLike : AiOutlineLike}
                  size="sm"
                  color="text.400"
                />
                <Text fontSize="sm" fontWeight="light" color="text.300">
                  {likes}k
                </Text>
              </HStack>
              <Spacer />
              <HStack>
                <Icon as={BiTimeFive} size="sm" color="text.400" />
                <Text fontSize="sm" fontWeight="light" color="text.300">
                  {time}
                </Text>
              </HStack>
              <Spacer />
              <HStack>
                <Icon
                  as={isBookmark ? FaBookmark : FaRegBookmark}
                  size="sm"
                  color="text.400"
                />
              </HStack>
            </Flex>
          </VStack>
        </Box>
      </HStack>
    </LinkBox>
  );
}

export default CardArticle;
