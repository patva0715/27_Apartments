import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Card = ({room}) => {
    return (
        <Paper elevation={0} className='border-2 mb-4 p-2 rounded-sm md:rounded-xl flex overflow-hidden bg-white bg-opacity-70'>
            <Box className='w-[40%] shrink-0 aspect-[3/2] rounded-sm md:rounded-xl overflow-hidden bg-green-500 relative flex items-center justify-center'>
                <Box className='absolute top-3 left-3 bg-slate-200 px-1 rounded-md'>
                    {/* <Typography variant='body1'>₱1,500</Typography> */}
                </Box>
                <img
                    className='w-full h-full object-cover'
                    src='https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
            </Box>
            <Box className='w-[60%] shrink-0'>
                <Stack className='p-2'>
                    <Typography className='font-semibold text-md lg:text-[20px]'>Details</Typography>
                    <Typography className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium molestiae quos impedit corrupti nesciunt?</Typography>
                    <Stack direction='row' className='mt-1 flex-wrap' gap={1}>
                    
                        <Paper elevation={0} className='p-[1vw] text-slate-400 bg-slate-200' >
                            <Typography variant='body1' className='text-sm lg:text-lg'><span className='font-semibold'>₱{room.price}</span>/night</Typography>
                        </Paper>
                        <Paper elevation={0} className='p-[1vw] text-slate-400 bg-slate-200' >
                            <Typography variant='body1' className='text-sm lg:text-lg'>{room.measurement} sq m</Typography>
                        </Paper>
                        <Paper elevation={0} className='p-[1vw] text-slate-400 bg-slate-200' >
                            <Typography variant='body1' className='text-sm lg:text-lg'>Wi-fi</Typography>
                        </Paper>
                    </Stack>
                </Stack>


            </Box>
        </Paper>
    )
}

export default Card