import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Card = () => {
    return (
        <Paper elevation={0} className='border-2 mb-4 p-2 rounded-sm md:rounded-xl flex overflow-hidden'>
            <Box className='basis-[30%] aspect-[3/2] rounded-sm md:rounded-xl overflow-hidden bg-green-500 relative flex items-center justify-center'>
                <Box className='absolute top-3 left-3 bg-slate-200 px-1 rounded-md'>
                    {/* <Typography variant='body1'>₱1,500</Typography> */}
                </Box>
                <img
                    className='min-w-full min-h-full object-cover'
                    src='https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
            </Box>
            <Box className='basis-[60%]'>
                <Stack className='p-2'>
                    <Typography className='font-semibold'>Details</Typography>
                    <Typography className='text-slate-500 leading-tight text-sm ml-1'>Cozy and homey house with the most affordable price available in the marketplace. Beautifylly designed by the world class architect and built with the best construction agency.</Typography>
                    <Stack direction='row' className='mt-1'>
                        <Paper elevation={0} className='px-1 bg-slate-50 text-slate-400'>
                            <Typography variant='body1'><span className='font-semibold'>₱1,500</span>/night</Typography>
                        </Paper>
                    </Stack>
                </Stack>


            </Box>
        </Paper>
    )
}

export default Card