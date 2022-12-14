import { Box, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BsPinMapFill, BsPhone } from 'react-icons/bs'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import Link from 'next/link'
import { GiKnifeFork } from 'react-icons/gi'
const Footer = () => {
    return (
        <footer className='py-7 text-xs mt-10 text-black'>
            <Container maxWidth='md' className='text-sm lg:text-[15px] lg:leading-[18px] opacity-80 px-8'>
                <div className='flex flex-col gap-2 lg:gap-[10px]'>
                    <Link href='menu' className='flex text-[4vw] lg:text-[15px] font-[500] items-center underline'>
                        <GiKnifeFork className='mr-2' />
                        Food Menu
                    </Link>
                    <div className='flex items-center gap-2'>
                        <BsPhone className='lg:text-[14px]' />
                        <span>09199333672</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsPinMapFill className='lg:text-[14px]' />
                        <span>Brgy. Ballaigui, Sinait, Ilocos Sur</span>
                    </div>
                    <a
                        href='https://www.patrickvee.com/'
                        // target=""
                        rel="noopener noreferrer"
                        className='flex items-center gap-2 underline opacity-40 text-xs'
                    >
                        <AiOutlineThunderbolt />
                        <span>patrickvee</span>
                    </a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer