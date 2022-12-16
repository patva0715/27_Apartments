import React from 'react'
import { HiHome } from 'react-icons/hi';
import { Link, Button, Container } from '@mui/material'
import {FiMap} from 'react-icons/fi'
const Header = ({ showMap, setShowMap }) => {
    return (
        <header className={` ${showMap?'bg-black text-white':'text-black'} duration-300`}>
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
                            <button onClick={() => setShowMap(!showMap)} className='p-1 flex items-center '>
                                <FiMap className='mr-1'/>
                                <span className=''>{showMap?'Close Map':'Map'}</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header