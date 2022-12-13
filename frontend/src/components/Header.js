import React from 'react'
import { HiHome } from 'react-icons/hi';
import {Link, Button} from '@mui/material'

const Header = () => {
    return (
        <header className='py-5 flex items-center'>
            <h1 className='text-xl grow'>
                <a href="https://nextjs.org" className='flex items-center font-semibold'>
                    <HiHome className='mr-[5px]' />
                    SJ Aptartelle
                </a>
            </h1>
            <nav className='flex items-center'>
                <ul className='flex gap-4'>
                    <li>
                    <Link underline='none'>
                            <Button variant='text' color='primary'>
                                Contact
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header