import { extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'

const { Button, Input } = chakraTheme.components

const theme = extendBaseTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        bg: '#343541',
        color: '#ececf1',
      },
    }),
  },
  components: {
    Button,
    Input,
  },
})

export default theme
