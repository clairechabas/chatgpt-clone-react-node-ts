import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Message } from '../../App'

type MessagesProps = {
  currentTitle: string
  previousMessages: Message[]
}

const Messages: React.FC<MessagesProps> = ({
  currentTitle,
  previousMessages,
}) => {
  const currentChat = previousMessages.filter(
    (prev) => prev.title === currentTitle
  )

  return (
    <Flex direction="column" h="full" w="full">
      {!currentTitle && (
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
      )}

      {currentTitle && (
        <Flex>
          {currentChat?.map((message) => (
            <Box key={message.content}>
              <Text>{message.role}</Text>
              <Text>{message.content}</Text>
            </Box>
          ))}
        </Flex>
      )}
    </Flex>
  )
}
export default Messages
