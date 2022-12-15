import React from 'react'
import { HiHome } from 'react-icons/hi';
import { Link, Button } from '@mui/material'

const Header = ({ showMap, setShowMap }) => {
    return (
        <header className='py-6 flex items-center'>
            <h1 className='text-xl grow'>
                <a href="https://nextjs.org" className='flex items-center font-semibold'>
                    <HiHome className='mr-[5px]' />
                    SJ Aptartelle
                </a>
            </h1>
            <nav className='flex items-center'>
                <ul className='flex gap-4'>
                    <li>
                        <Button onClick={() => setShowMap(!showMap  )} variant='outlined' color='primary' className='p-0'>
                            Map
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header