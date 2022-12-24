import { Container } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const images = [
    'https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]
const photos = {
    'Regular': ['regular2.jpg','regular1.webp','regular3.webp','regular5.jpg','regular4.jpg'],
    'Family': ['family1.webp','family1.webp']
}
const Gallery = ({ showGallery, setShowGallery }) => {
    const router = useRouter()
    const { pid } = router.query
    useEffect(()=>{
        console.log(pid)
    },[pid])
    return (
        <div className='fixed top-0 bottom-0 w-full p-[2vw] bg-black overflow-scroll pointer-events-all z-[100]'>
            <Container maxWidth='md' className='relative p-0 '>
                <Link href='/' className='absolute top-0 right-0 bg-red-400 z-10 p-1'>Close</Link>
                <div className='w-full flex flex-wrap gap-[1%]'>
                    {photos['Regular'].map((image, idx) => (
                        <div key={idx} className='basis-[48%] grow aspect-square relative overflow-hidden mb-[1%]'>
                            <img src={`images/${image}`} className='object-cover h-full absolute w-full grayscale-[.4]' />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Gallery