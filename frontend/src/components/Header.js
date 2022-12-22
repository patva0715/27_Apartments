import React from 'react'
import { HiHome } from 'react-icons/hi';
import {  Button, Container } from '@mui/material'
import Link  from 'next/link';
import { FiMap } from 'react-icons/fi'
const Header = ({ showMap, setShowMap }) => {
    return (
        <header >
            <div className={`max-w-[900px] mx-auto px-4 py-4 flex flex-nowrap items-center`}>
                <h1 className='text-[5vw] md:text-[30px] grow'>
                    <a href="https://nextjs.org" className='flex items-center font-semibold'>
                        <HiHome className='mr-[5px]' />
                        SJ Aptartelle
                    </a>
                </h1>
                <nav className='flex items-center'>
                    <ul className='flex gap-4'>
                        <li>
                            {/* <button onClick={() => setShowMap(!showMap)} className='p-1 flex items-center duration-300'>
                                <FiMap className='mr-1 ' />
                                <span className=''>{showMap ? 'Close' : 'Map'}</span>
                            </button> */}
                            <Link href='/map' className='p-1 flex items-center duration-300'>
                                <FiMap className='mr-1 ' />
                                <span className=''>{showMap ? 'Close' : 'Map'}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header