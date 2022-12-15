import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Card = ({ room }) => {
    return (
        <div className='p-4 '>
            {/* <Box className='w-[40%] shrink-0 aspect-[3/2] rounded-sm md:rounded-xl overflow-hidden bg-green-500 relative flex items-center justify-center'>
                <Box className='absolute top-3 left-3 bg-slate-200 px-1 rounded-md'>
                </Box>
                <img
                    className='w-full h-full object-cover'
                    src='https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
            </Box> */}
                <h2 className='text-md lg:text-[25px] lg:leading-[32px] font-semibold mb-1'>{room.name}</h2>
                <p className='text-sm lg:text-[17px] lg:leading-[22px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium molestiae quos impedit corrupti nesciunt?</p>
                <div className=' flex gap-1 flex-wrap mt-1'>
                    <div className='p-[1vw] lg:p-[5px] text-slate-500 bg-[#eee] rounded-md flex ' >
                        <span className='text-sm lg:text-[16px] lg:leading-[20px]'><span className='font-semibold'>₱{room.price}</span> / night</span>
                    </div>
                    <div className='p-[1vw] lg:p-[5px] text-slate-500 bg-[#eee] rounded-md flex ' >
                        <span className='text-sm lg:text-[16px] lg:leading-[20px]'>{room.measurement}m sq</span>
                    </div>
                    {/* <div className='p-[1vw] lg:p-[5px] text-slate-500 bg-[#eee] rounded-md flex ' >
                        <span className='text-sm lg:text-[16px]'>Wi-fi</span>
                    </div> */}
                </div>


        </div>
    )
}

export default Card