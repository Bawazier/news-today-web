import React from "react";
import { Box, VStack, Text, Image } from "@chakra-ui/react";

function CategoryItem({ name, image }) {
  return (
    <Box w="fit-content" rounded="xl" cursor="pointer" bg="transparent" _hover={{shadow: "base"}}>
      <VStack>
        <Box rounded="xl" shadow="lg" overflow="hidden">
          <Image src={image} alt="Category Image" boxSize="200px" objectFit="cover" />
        </Box>
        <Box>
          <Text color="text.300" fontWeight="bold" size="md">{name}</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default CategoryItem;