import React from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

function CardProfile({
  image,
  name,
  username,
  status,
  about,
  sumPost,
  sumVisitor,
  sumComment,
}) {
  return (
    <Box position="relative" h="318px">
      <Box p="8" w="full" h="284px" rounded="2xl" shadow="dark-lg" zIndex="-1" bg="bg.50">
        <VStack align="start" spacing="6">
          <HStack spacing="6">
            <Box
              boxSize="84px"
              p="2"
              rounded="2xl"
              borderWidth="1px"
              borderColor="text.400"
            >
              <Image src={image} alt="Profile Image" rounded="2xl" />
            </Box>
            <VStack align="start" spacing="px">
              <Text fontSize="md" fontWeight="light" color="text.500">
                {username}
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="text.300">
                {name}
              </Text>
              <Text fontSize="md" fontWeight="normal" color="text.400">
                {status}
              </Text>
            </VStack>
          </HStack>
          <VStack align="start" spacing="1">
            <Text fontSize="md" fontWeight="bold" color="text.300">
              About me
            </Text>
            <Text
              fontSize="md"
              fontWeight="light"
              color="text.300"
              lineHeight="base"
            >
              {about}
            </Text>
          </VStack>
        </VStack>
      </Box>
      <Box
        rounded="2xl"
        shadow="dark-lg"
        bg="bg.800"
        w="231px"
        h="68"
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        marginLeft="auto"
        marginRight="auto"
      >
        <Flex align="center" justify="center">
          <Box
            w="full"
            h="full"
            rounded="2xl"
            bg="transparent"
            textAlign="center"
          >
            <VStack align="center" spacing="px">
              <Text color="text.50" fontSize="2xl" fontWeight="bold">
                {sumPost}
              </Text>
              <Text color="text.50" fontSize="sm" fontWeight="light">
                Post
              </Text>
            </VStack>
          </Box>
          <Spacer />
          <Box
            w="full"
            h="full"
            rounded="2xl"
            bg="transparent"
            textAlign="center"
          >
            <VStack align="center" spacing="px">
              <Text color="text.50" fontSize="2xl" fontWeight="bold">
                {sumVisitor}
              </Text>
              <Text color="text.50" fontSize="sm" fontWeight="light">
                Visitor
              </Text>
            </VStack>
          </Box>
          <Spacer />
          <Box
            w="full"
            h="full"
            rounded="2xl"
            bg="transparent"
            textAlign="center"
          >
            <VStack align="center" spacing="px">
              <Text color="text.50" fontSize="2xl" fontWeight="bold">
                {sumComment}
              </Text>
              <Text color="text.50" fontSize="sm" fontWeight="light">
                Comment
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default CardProfile;
