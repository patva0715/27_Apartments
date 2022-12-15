import { Box, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {BsPinMapFill, BsPhone} from 'react-icons/bs'
import {AiOutlineThunderbolt} from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className='py-7 text-xs bg-[#222] mt-10 text-white'>
            <Container maxWidth='md' className='text-sm lg:text-[15px] lg:leading-[18px] opacity-80 px-6'>
                <div className='flex flex-col gap-2 lg:gap-[10px]'>
                    <div className='flex items-center gap-2'>
                        <BsPinMapFill className='lg:text-[14px]'/>
                        <span>Brgy. Balluigi, Sinait, Ilocos, PH</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsPhone className='lg:text-[14px]'/>
                        <span>0906558186</span>
                    </div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center gap-2'
                    >
                        <AiOutlineThunderbolt/>
                        <span>by Pv</span>
                    </a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer