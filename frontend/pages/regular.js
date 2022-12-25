import { Container } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const photos = {
    'Regular': ['regular2.jpg','regular1.jpg','regular3.jpg','regular4.jpg','regular1.jpg'],
    'Family': ['family1.jpg','family1.jpg']
}
const Gallery = ({ showGallery, setShowGallery }) => {
    const router = useRouter()
    const { pid } = router.query
    useEffect(()=>{
        console.log(pid)
    },[pid])
    return (
        <div className='fixed top-0 bottom-0 w-full p-[5vw] bg-black overflow-scroll pointer-events-all z-[100]'>
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