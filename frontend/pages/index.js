import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Button, Container, Fade, Typography } from '@mui/material'
import Header from '../src/components/Header';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import { SiAirbnb } from 'react-icons/si'
import info from '../public/info.json'
import Carousel from '../src/components/Carousel';
import { useState } from 'react';

export default function Home({ showMap,setShowMap }) {
  return (
    <>
      <Container maxWidth='lg' className='bg-red-0'>
        <Head>
          <title>SJ Apartelle</title>
          <meta name="description" content="Home Page for SJ apartments" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header showMap={showMap} setShowMap={setShowMap} />
        <Fade in={!showMap}>
          <Box component='main' className=''>
            {/* DIVIDER HERO IMAGE */}
            <Carousel />
            <div className='translate-y-[-50%]'>
              <button className='flex items-center p-2 font-semibold bg-slate-900 hover:bg-slate-500 duration-300 text-white text-[3vw] lg:text-[35px] ml-3 md:ml-10 rounded-xl'>
                <SiAirbnb className='mr-2' /> Book Now
              </button>

            </div>
            {/* DIVIDER ROOM CATALOGUE */}
            <Box>
              <Typography variant='h4' textAlign='center' className='my-4 text-xl'>Room Options</Typography>
              {info.rooms.map((room, idx) => (
                <Card room={room} key={idx} />
              ))}
            </Box>
          </Box>
        </Fade>

        <Footer />

      </Container>
    </>
  )
}
