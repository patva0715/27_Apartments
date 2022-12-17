import { Container } from '@mui/material'
import React from 'react'

const images = [
    'https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

const Gallery = ({ showGallery, setShowGallery }) => {
    if (!showGallery) return <></>
    return (
        <div className='fixed top-0 bottom-0 w-full p-[5vw] bg-black overflow-scroll pointer-events-all z-[100]'>
            <Container maxWidth='md' className='relative p-0 '>
                <button onClick={() => setShowGallery(false)} className='absolute top-0 right-0 bg-red-400 z-10 p-1'>Close</button>
                <div className='w-full flex flex-wrap gap-[1%]'>
                    {[...images, ...images, ...images].map((image, idx) => (
                        <div key={idx} className='basis-[48%] grow aspect-square relative overflow-hidden mb-[1%]'>
                            <img src={image} className='object-cover h-full absolute w-full grayscale-[.8]' />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Gallery