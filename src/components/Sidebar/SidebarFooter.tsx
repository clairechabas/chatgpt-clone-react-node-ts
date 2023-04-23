import { Button, Flex, Icon, Image, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { FiUser } from 'react-icons/fi'

const SidebarFooter: React.FC = () => {
  return (
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
          src="/claire-2022.png"
        />
        <Text fontSize="14px">claire.chabas@gmail.com</Text>
      </Button>
    </Flex>
  )
}
export default SidebarFooter
