// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    fima: {
      100: '#3E36E8',
      200: '#F23D4C',
    },
  },
  styles: {
    global: () => ({
      'html ': {
        scrollBehavior: 'smooth',
        scrollPadding: {base: '0', md: '150px'},
      },
      '&::-webkit-scrollbar': {
        width: '1px',
      },
    }),
  },
})

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;