import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
} from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiMessageSquare, FiSend, FiUser } from 'react-icons/fi'

const App = () => {
  return (
    <Flex width="full" height="full">
      {/* Sidebar */}
      <Flex
        direction="column"
        shrink={0}
        bg="gray.900"
        width="260px"
        display={{ base: 'none', md: 'flex' }}
      >
        <Flex direction="column" height="100vh" minHeight={0}>
          <Flex
            direction="column"
            alignItems="flex-start"
            height="100vh"
            width="full"
          >
            <Flex
              direction="column"
              justify="space-between"
              height="100vh"
              flexGrow={1}
              p={2}
              width="full"
            >
              <Flex direction="column">
                <Button
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  bg="gray.900"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.20)"
                  cursor="pointer"
                  borderRadius={6}
                  p={3}
                  color="white"
                  fontWeight={400}
                  fontSize={14}
                  lineHeight={20}
                  _hover={{ bg: 'hsla(240,9%,59%,.1)' }}
                  transition="all 0.2s ease-in-out"
                >
                  <Icon as={AiOutlinePlus} mr={3} />
                  <Text fontSize="0.875rem">New chat</Text>
                </Button>

                <List mt={3} spacing={3}>
                  class="gap-3 relative group"
                  <ListItem
                    display="flex"
                    alignItems="center"
                    p={3}
                    borderRadius="6px"
                    _hover={{ bg: '#2A2B32', pr: 4 }}
                    cursor="pointer"
                    wordBreak="break-all"
                  >
                    <ListIcon as={FiMessageSquare} w={4} h={4} mr={3} />
                    <Text
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      flexGrow={1}
                    >
                      Conversation #1 title
                    </Text>
                  </ListItem>
                  <ListItem
                    display="flex"
                    alignItems="center"
                    p={3}
                    borderRadius="6px"
                    _hover={{ bg: '#2A2B32', pr: 4 }}
                    cursor="pointer"
                    wordBreak="break-all"
                  >
                    <ListIcon as={FiMessageSquare} w={4} h={4} mr={3} />
                    <Text
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      flexGrow={1}
                    >
                      Conversation #2 title
                    </Text>
                  </ListItem>
                </List>
              </Flex>

              <Flex direction="column" align="flex-start" width="full">
                <Button
                  variant="ghost"
                  w="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={3}
                  borderRadius="6px"
                  _hover={{ bg: '#2A2B32' }}
                  fontWeight={400}
                  fontSize="14px"
                >
                  <Flex>
                    <Icon as={FiUser} mr={3} />
                    <Text>Upgrade to Plus</Text>
                  </Flex>

                  <Tag
                    variant="solid"
                    borderRadius="6px"
                    bg="#fae69e"
                    color="#343541"
                    size="sm"
                    p="2px 6px"
                  >
                    NEW
                  </Tag>
                </Button>
                <Button
                  variant="ghost"
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  p={3}
                  borderRadius="6px"
                  _hover={{ bg: '#2A2B32' }}
                  fontWeight={400}
                  fontSize="14px"
                  w="full"
                >
                  <Image
                    borderRadius="2px"
                    w="20px"
                    h="20px"
                    mr={3}
                    src="/public/claire-2022.png"
                  />
                  <Text fontSize="14px">claire.chabas@gmail.com</Text>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* ChatArea */}
      <Flex direction="column" w="full" p="24px">
        {/* Messages */}
        <Flex direction="column" h="full" w="full">
          <Heading
            fontSize="36px"
            fontWeight={800}
            textAlign="center"
            letterSpacing="tighter"
            w="full"
            mt="25%"
          >
            ClaireGPT
          </Heading>
        </Flex>

        {/* Input */}
        <Box px="16px">
          <InputGroup>
            <Input
              placeholder="Send a message..."
              bg="#40414f"
              border="1px solid"
              borderColor="rgba(32,33,35,0.50)"
              borderRadius="6px"
              p={3}
            />
            <InputRightElement
              children={<FiSend w="16px" h="16px" color="#8e8ea0" />}
            />
          </InputGroup>
        </Box>
        <Box px="16px" pt="24px">
          <Text color="rgba(255,255,255,.5)" fontSize="12px" textAlign="center">
            <Link
              textDecoration="underline"
              _hover={{ textDecoration: 'none' }}
              href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
            >
              ChatGPT Mar 23 Version
            </Link>
            . Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default App
