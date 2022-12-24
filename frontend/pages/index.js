import Head from 'next/head'
import {  Container, Fade } from '@mui/material'
import Header from '../src/components/Header';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import { SiAirbnb } from 'react-icons/si'
import info from '../public/info.json'
import Carousel from '../src/components/Carousel';
import { useEffect, useState } from 'react';
import Overlay from '../src/components/Overlay';
import Divider from '../src/components/Divider';
import ServiceCard from '../src/components/ServiceCard';
import Gallery from '../src/components/Gallery';

export default function Home({ showMap, setShowMap }) {
  const [showOverlay, setShowOverlay] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  useEffect(()=>{
    setShowMap(false)
  },[])
  return (
    <>
      <Head>
        <title>SJ Apartelle</title>
        <meta name="description" content="Home Page for SJ apartments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showMap={showMap} setShowMap={setShowMap} />

      <Container maxWidth='md' className='px-2' >

        <Fade in={!showMap} timeout={500}>
          <main>
            {/* DIVIDER HERO IMAGE */}
            <Carousel showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
            <div className='md:translate-y-[-50%] translate-y-2 flex justify-end'>
              <button onClick={() => setShowOverlay(true)} className='w-full lg:w-min whitespace-nowrap justify-center flex items-center p-4 font-semibold bg-orange-600 hover:bg-slate-500 duration-300 text-white text-md lg:text-[35px] lg:leading-[40px]  md:mr-8 rounded-lg'>
                <SiAirbnb className='mr-2' /> Book Now
              </button>
            </div>
            {/* DIVIDER AMENITY SECTION */}
            <div className='mt-8 md:mt-0 block md:hidden'>
              <Divider title='Amenities' />
              <div className=' p-3 rounded-md md:rounded-xl flex w-full md:w-[40%] flex-wrap border-2 bg-white bg-opacity-70'>
                {info.services.map((service, idx) => (
                  <ServiceCard service={service} key={idx} />
                ))}
              </div>
            </div>
            {/* DIVIDER ROOM CATALOGUE */}
            <div className=''>
              <Divider title='Rooms' />
              <div className='flex gap-1'>
                <div className='basis-[70%] grow flex flex-col gap-1 border-2 bg-white bg-opacity-70 rounded-md md:rounded-xl'>
                  {info.rooms.map((room, idx) => (
                    <Card room={room} key={idx} setShowGallery={setShowGallery} />
                  ))}
                </div>
                <div className='basis-[20%] hidden md:block'>
                  <div className='border-2 p-4 rounded-md md:rounded-xl flex flex-col overflow-hidden bg-white bg-opacity-70 h-full'>
                    <h2 className='text-md lg:text-[25px] lg:leading-[32px] font-semibold mb-1'>Amenities</h2>
                    {info.services.map((service, idx) => (
                      <ServiceCard service={service} key={idx} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Fade>
      </Container>
      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
      <Gallery active={{}} showGallery={showGallery} setShowGallery={setShowGallery}/>
      <Footer />

    </>
  )
}
