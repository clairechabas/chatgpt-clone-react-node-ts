import { List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'

type ChatsHistoryProps = {
  titles: string[]
  handleSelectExistingChat: (title: string) => void
}

const ChatsHistory: React.FC<ChatsHistoryProps> = ({
  titles,
  handleSelectExistingChat,
}) => {
  return (
    <List mt={3} spacing={3}>
      {titles?.map((title) => (
        <ListItem
          key={title}
          display="flex"
          alignItems="center"
          p={3}
          borderRadius="6px"
          _hover={{ bg: '#2A2B32', pr: 4 }}
          cursor="pointer"
          wordBreak="break-all"
          onClick={handleSelectExistingChat(title)}
        >
          <ListIcon as={FiMessageSquare} w={4} h={4} mr={3} />
          <Text
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            flexGrow={1}
          >
            {title}
          </Text>
        </ListItem>
      ))}
    </List>
  )
}
export default ChatsHistory
