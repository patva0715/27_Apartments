import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Button, Container, Typography } from '@mui/material'
import Header from '../src/components/Header';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import {SiAirbnb} from 'react-icons/si'
export default function Home() {
  return (
    <Container maxWidth='lg' className='bg-red-0'>
      <Head>
        <title>SJ Apartelle</title>
        <meta name="description" content="Home Page for SJ apartments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      <Box component='main' className=''>
        {/* DIVIDER HERO IMAGE */}
        <Box className='aspect-[2/1] w-full relative overflow-hidden rounded-md md:rounded-2xl'>

          <img
            className='object-cover absolute w-full top-[-40%] z-0 grayscale-[.8]'
            src='https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />

          <div className='absolute z-10 p-3 md:p-10'>
            <h1 className='text-[5vw] md:text-[5vw] font-bold leading-none tracking-wider'>Modern <br /> house</h1>
            <p className='mt-1 opacity-50 text-[2vw] md:text-[1.5vw]'>bed | kitchen | bath</p>
          </div>

          <div className='flex flex-col absolute z-20 right-3 top-3 gap-3'>
            {[1, 2, 3].map((item, idx) => (
              <div className='border-white border-opacity-30 border-2 w-[11vw] md:w-[4rem] aspect-square flex items-center justify-center rounded-md overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src='https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
              </div>
            ))}

          </div>

          

        </Box>
        <div className='translate-y-[-50%]'>
            <Button variant='text' size='large' className='bg-slate-900 text-white text-[3vw] lg:text-[40px] ml-3 md:ml-10 rounded-xl'>
              <SiAirbnb/> Book Now
            </Button>

          </div>
        {/* DIVIDER ROOM CATALOGUE */}
        <Box>
          <Typography variant='h4' textAlign='center' className='my-4 text-xl'>Our Rooms</Typography>
          {[0,1,2].map((item,idx)=>(
            <Card item={item} key={idx}/>
          ))}
        </Box>
      </Box>

      <Footer/>

    </Container>
  )
}
