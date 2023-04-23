import { List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'

type ChatsProps = {}

const Chats: React.FC<ChatsProps> = () => {
  return (
    <List mt={3} spacing={3}>
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
  )
}
export default Chats
