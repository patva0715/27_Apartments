import React from 'react'
import { HiHome } from 'react-icons/hi';
import { Link, Button, Container } from '@mui/material'
import {GrMap} from 'react-icons/gr'
const Header = ({ showMap, setShowMap }) => {
    return (
        <header className={` ${showMap?'bg-black text-white':'text-[#111]'} duration-300`}>
            <Container maxWidth='md' className={`py-4 flex items-center`}>
                <h1 className='text-[5vw] md:text-[30px] grow'>
                    <a href="https://nextjs.org" className='flex items-center font-semibold'>
                        <HiHome className='mr-[5px]' />
                        SJ Aptartelle
                    </a>
                </h1>
                <nav className='flex items-center'>
                    <ul className='flex gap-4'>
                        <li>
                            <button onClick={() => setShowMap(!showMap)} className='p-1 rounded-md border-[1px] border-black flex items-center'>
                                <GrMap className='mr-1'/>
                                <span className=''>{showMap?'Close Map':'Map'}</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </Container>

        </header>
    )
}

export default Header