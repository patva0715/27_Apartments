import { Box, Button, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import MapBG from '../src/components/MapBG'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    status: {
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className='fixed top-0 bottom-0 w-full z-[0]'>
        <MapBG />
      </Box>
      <Box id='gradientBg' />
      <Box className='relative z-10'>
        <Component {...pageProps} />
      </Box>

    </ThemeProvider>

  )
}

export default MyApp
