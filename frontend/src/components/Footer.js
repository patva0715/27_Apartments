import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box component='footer'>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span >
                    {/* <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={50} /> */}
                    Patrick V.
                </span>
            </a>
        </Box>
    )
}

export default Footer