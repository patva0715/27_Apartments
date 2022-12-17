import { Container } from '@mui/material'
import React from 'react'
import {FaWindowClose} from 'react-icons/fa'
const images = [
    'https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

const Gallery = ({showGallery, setShowGallery}) => {
    if (!showGallery) return <></>
    return (
        <div className='fixed top-0 bottom-0 w-full p-[5vw] bg-black overflow-scroll pointer-events-all z-[100]'>
            <Container maxWidth='md' className='relative p-0 '>
                <button onClick={()=>setShowGallery(false)} className='flex items-center absolute top-0 right-0 bg-red-100 text-red-600 font-bold text-lg z-10 p-1 rounded-md translate-x-[50%] translate-y-[-50%]'>
                    <FaWindowClose className='mr-1'/>
                    Close
                    </button>
                <div className='w-full flex flex-wrap gap-[2%]'>
                    {[...images,...images,...images].map((image,idx)=>(
                        <div key={idx} className='basis-[48%] grow aspect-square relative mb-[2%] rounded-md overflow-hidden'>
                            <img src={image} className='object-cover h-full absolute w-full grayscale-[.8]'/>
                            </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Gallery