import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ChatArea from './components/ChatArea/ChatArea'
import Sidebar from './components/Sidebar/Sidebar'

interface Message {
  title: string
  role: 'user' | 'assistant'
  content: string
}

const App = () => {
  const [messageContent, setMessageContent] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')
  const [previousMessages, setPreviousMessages] = useState<Message[]>([])
  const [message, setMessage] = useState<Message>({
    title: '',
    role: 'user',
    content: '',
  })

  const sendMessage = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: messageContent,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await fetch('http://localhost:8080/api/chat', options)
      const data = await response.json()

      setMessage(data.choices[0].message)
    } catch (error) {
      console.log('Error in sendMessage: ', error)
    }
  }

  useEffect(() => {
    // We're initiating a new chat
    if (!currentTitle && messageContent && message) {
      setCurrentTitle(messageContent)
    }

    // We're in an existing chat
    if (currentTitle && messageContent && message) {
      setPreviousMessages(
        (prev) =>
          [
            ...prev,
            {
              title: currentTitle,
              role: 'user',
              message: messageContent,
            },
            {
              title: currentTitle,
              role: message.role,
              content: message.content,
            },
          ] as Message[]
      )
    }
  }, [message, currentTitle])

  return (
    <Flex width="full" height="full">
      <Sidebar />

      <ChatArea
        currentTitle={currentTitle}
        messageContent={messageContent}
        setMessageContent={setMessageContent}
        handleSendMessage={sendMessage}
      />
    </Flex>
  )
}

export default App
