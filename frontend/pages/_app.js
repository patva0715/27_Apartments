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

      <MapBG showMap={showMap} />
      <Box id='gradientBg' style={{ display: showMap ? 'none' : 'block' }} />

      <Box className='relative z-20'>
        <Component {...pageProps} showMap={showMap} setShowMap={setShowMap} />
      </Box>





    </>

  )
}

export default MyApp
