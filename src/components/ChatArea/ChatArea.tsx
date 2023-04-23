import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { FiSend } from 'react-icons/fi'
import Messages from './Messages'

type ChatAreaProps = {
  currentTitle: string
  messageContent: string
  setMessageContent: (value: string) => void
  handleSendMessage: () => void
}

const ChatArea: React.FC<ChatAreaProps> = ({
  currentTitle,
  messageContent,
  setMessageContent,
  handleSendMessage,
}) => {
  return (
    <Flex direction="column" w="full" p="24px">
      <Messages currentTitle={currentTitle} />

      <Box px="16px">
        <InputGroup>
          <Input
            placeholder="Send a message..."
            bg="#40414f"
            border="1px solid"
            borderColor="rgba(32,33,35,0.50)"
            borderRadius="6px"
            p={3}
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          />
          <InputRightElement
            onClick={handleSendMessage}
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
  )
}
export default ChatArea
