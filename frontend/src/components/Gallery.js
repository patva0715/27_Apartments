import { Container } from '@mui/material'
import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
const images = [
    'https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
                        <img src={'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='object-cover h-full absolute w-full grayscale-[.8]' />
                    </div>
                    {[...images, ...images, ...images].map((image, idx) => (
                        <div key={idx} className='basis-[48%] grow aspect-square relative mb-[2%] rounded-sm overflow-hidden'>
                            <img src={image} className='object-cover h-full absolute w-full grayscale-[.8]' />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Gallery