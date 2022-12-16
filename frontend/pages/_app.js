import { Box, Button } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Head from 'next/head';
import { useState } from 'react';
import MapBG from '../src/components/MapBG'
import '../styles/globals.css'
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [showMap, setShowMap] = useState(false)
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Box className='fixed top-0 bottom-0 w-full z-[0]'>
        <MapBG showMap={showMap} />
      </Box>
      <Box id='gradientBg' style={{ opacity: showMap ? 0 : 1 }} />

      <Box className='relative z-10'>
        <Component {...pageProps} showMap={showMap} setShowMap={setShowMap} />
      </Box>

    </>

  )
}

export default MyApp
