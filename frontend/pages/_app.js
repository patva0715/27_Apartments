import { Box, } from '@mui/material'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MapBG from '../src/components/MapBG'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [showMap, setShowMap] = useState(false)
  const [height, setHeight] = useState(0)
  const [visibleLocations, setVisibleLocations] = useState([])
  const [range, setRange] = useState(0)
  useEffect(() => {
    setHeight(innerHeight)
    addEventListener('resize', () => {
      if (innerHeight) setHeight(innerHeight)
    })
  }, [])
  return (
    <>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" /> */}
      </Head>

      {/* <MapBG showMap={showMap} visibleLocations={visibleLocations}/> */}
      <Box id='gradientBg' style={{ display: showMap ? 'none' : 'block' }} />

      <Box className='fixed z-20 w-[100vw] overflow-scroll' style={{ height, maxHeight: height }}>

        <Component {...pageProps} showMap={showMap} setShowMap={setShowMap} range={range} setRange={setRange} setVisibleLocations={setVisibleLocations}/>
      </Box>





    </>

  )
}

export default MyApp
