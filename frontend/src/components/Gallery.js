import { Container } from '@mui/material'
import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
const images = [
    '/image1.webp',
    '/image3.webp'
]

const Gallery = ({ showGallery, setShowGallery }) => {
    if (!showGallery) return <></>
    return (
        <div className='fixed top-0 bottom-0 w-full p-[5vw] bg-black overflow-scroll pointer-events-all z-[100]'>
            <Container maxWidth='md' className='relative p-0 '>
                <button onClick={() => setShowGallery(false)} className='flex items-center w-full top-0 right-0 text-red-300 font-semibold text-lg z-10 p-1 rounded-md mb-2'>
                    <FaWindowClose className='mr-1' />
                    Close
                </button>
                <div className='w-full flex flex-wrap gap-[2%]'>
                    <div className='basis-[100%] grow aspect-[2/1] relative mb-[2%] rounded-sm overflow-hidden'>
                        <img src='/image2.webp' alt='gallery picture' className='object-cover h-full absolute w-full grayscale-[.8]' />
                    </div>
                    {[...images, ...images].map((image, idx) => (
                        <div key={idx} className='basis-[48%] grow aspect-square relative mb-[2%] rounded-sm overflow-hidden'>
                            <img src={image} alt='gallery picture' className='object-cover h-full absolute w-full grayscale-[.8]' />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Gallery