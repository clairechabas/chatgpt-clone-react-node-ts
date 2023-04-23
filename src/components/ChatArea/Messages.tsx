import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

type MessagesProps = {
  currentTitle: string
}

const Messages: React.FC<MessagesProps> = ({ currentTitle }) => {
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

      {currentTitle && <Flex>Messages will display here</Flex>}
    </Flex>
  )
}
export default Messages
