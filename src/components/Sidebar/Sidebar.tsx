import { Button, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Message } from '../../App'
import ChatsHistory from './ChatsHistory'
import SidebarFooter from './SidebarFooter'

type SidebarProps = {
  handleCreateNewChat: () => void
  handleSelectExistingChat: (title: string) => void
  previousMessages: Message[]
}

const Sidebar: React.FC<SidebarProps> = ({
  previousMessages,
  handleCreateNewChat,
  handleSelectExistingChat,
}) => {
  const chatTitles = Array.from(
    new Set(previousMessages.map((prev) => prev.title))
  )

  return (
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
                onClick={handleCreateNewChat}
              >
                <Icon as={AiOutlinePlus} mr={3} />
                <Text fontSize="0.875rem">New chat</Text>
              </Button>

              <ChatsHistory
                handleSelectExistingChat={handleSelectExistingChat}
                titles={chatTitles}
              />
            </Flex>

            <SidebarFooter />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default Sidebar
