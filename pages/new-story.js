import React from "react";
import {
  Image,
  Box,
  Center,
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
  Input,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { BiPlusMedical } from "@react-icons/all-files/bi/BiPlusMedical";
import { BiImage } from "@react-icons/all-files/bi/BiImage";
import { AiOutlinePlayCircle } from "@react-icons/all-files/ai/AiOutlinePlayCircle";
import { AiOutlineAlignLeft } from "@react-icons/all-files/ai/AiOutlineAlignLeft";
import { BiLink } from "@react-icons/all-files/bi/BiLink";
import { AiOutlineFontSize } from "@react-icons/all-files/ai/AiOutlineFontSize";

function NewStory() {
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
              Write Article
            </Heading>
          </Box>
          <Spacer />
          <Box>&nbsp;</Box>
        </Flex>
      </Box>
      <Box w="full" mb="20">
        <VStack w="full" spacing="14">
          <HStack align="start" w="full" h="full" spacing="6">
            <Box w="30%" h="535px" rounded="xl" p="8" borderWidth="0.5px" borderStyle="solid" borderColor="text.100">
              <Center w="full" h="full" rounded="xl" borderWidth="1px" borderStyle="dashed" borderColor="text.100">
                <Icon as={BiPlusMedical} fontSize="9xl" color="text.100" />
              </Center>
            </Box>
            <VStack w="65%" align="start">
              <HStack w="full">
                <FormControl id="title" isRequired>
                  <Input placeholder="Article Title" size="lg" rounded="xl" />
                </FormControl>
                <FormControl id="category">
                  <Select placeholder="Article Category" size="lg" rounded="xl">
                    <option>Economy</option>
                    <option>Politic</option>
                    <option>Country</option>
                    <option>Health</option>
                    <option>Beauty</option>
                  </Select>
                </FormControl>
              </HStack>
              <HStack color="text.400" fontWeight="bold">
                <Text>Attachment:</Text>
                <IconButton
                  variant="ghost"
                  colorScheme="none"
                  aria-label="Place Image"
                  fontSize="20px"
                  icon={<BiImage />}
                />
                <IconButton
                  variant="ghost"
                  colorScheme="none"
                  aria-label="Place Video"
                  fontSize="20px"
                  icon={<AiOutlinePlayCircle />}
                />
                <IconButton
                  variant="ghost"
                  colorScheme="none"
                  aria-label="Align Left"
                  fontSize="20px"
                  icon={<AiOutlineAlignLeft />}
                />
                <IconButton
                  variant="ghost"
                  colorScheme="none"
                  aria-label="Place Link"
                  fontSize="20px"
                  icon={<BiLink />}
                />
                <IconButton
                  variant="ghost"
                  colorScheme="none"
                  aria-label="Font Size"
                  fontSize="20px"
                  icon={<AiOutlineFontSize />}
                />
              </HStack>
              <Textarea
                w="full"
                h="356px"
                rounded="xl"
                placeholder="Here is a sample placeholder"
              />
            </VStack>
          </HStack>
          <HStack w="full" spacing="6">
            <Button w="30%" size="lg" rounded="xl" bg="btn.900" color="text.50">
              Choose Cover Photo
            </Button>
            <Button w="65%" size="lg" rounded="xl" bg="btn.800" color="text.50">
              Request Publish Article
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
}

export default NewStory;
