import { Box, Button, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useState } from 'react';
import MapBG from '../src/components/MapBG'
import '../styles/globals.css'
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [showMap,setShowMap] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className='fixed top-0 bottom-0 w-full z-[0]'>
        <MapBG showMap={showMap}/>
      </Box>
      <Box id='gradientBg' style={{opacity:showMap?0:1}} />

      <Box className='relative z-10'>
        <Component {...pageProps} showMap={showMap} setShowMap={setShowMap} />
      </Box>

    </ThemeProvider>

  )
}

export default MyApp
