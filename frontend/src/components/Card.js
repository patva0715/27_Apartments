import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import {BiExpand, BiBed } from 'react-icons/bi'
const Card = ({ room, setShowGallery }) => {
    return (
        <div className='p-4 ' >
            {/* <Box className='w-[40%] shrink-0 aspect-[3/2] rounded-sm md:rounded-xl overflow-hidden bg-green-500 relative flex items-center justify-center'>
                <Box className='absolute top-3 left-3 bg-slate-200 px-1 rounded-md'>
                </Box>
                <img
                    className='w-full h-full object-cover'
                    src='https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
            </Box> */}
            <div className='flex items-center'>
                <h2 className='text-md lg:text-[20px] lg:leading-[28px] font-semibold mb-1'>{room.name}</h2>
                <button onClick={() => setShowGallery(true)} className='text-blue-400 ml-2'>View</button>
                </div>
            <h2 className='pl-2 text-md lg:text-[20px] lg:leading-[28px] opacity-50 mt-2'>{room.desc||'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' }</h2>
            <div className='pl-2 flex gap-1 flex-wrap mt-2'>
                <div className='p-[1vw] lg:p-[5px] text-slate-500 bg-[#eee] rounded-sm flex ' >
                    <span className='text-md lg:text-[16px] lg:leading-[20px]'><span className='font-semibold'>₱{room.price}</span> / night</span>
                </div>
                <div className='p-[1vw] lg:p-[5px] text-slate-500 bg-[#eee] rounded-sm flex ' >
                    <span className='text-md lg:text-[16px] lg:leading-[20px] flex items-center'><BiExpand className='mr-1'/>{room.measurement}m sq</span>
                </div>

                <div className='p-[1vw] lg:p-[5px] text-slate-500 bg-[#eee] rounded-sm flex ' >
                    <span className='text-md lg:text-[16px] lg:leading-[20px] flex items-center'><BiBed className='mr-1'/>{room.bed}</span>
                </div>
                {/* <div className='p-[1vw] lg:p-[5px] text-slate-500 bg-[#eee] rounded-md flex ' >
                        <span className='text-sm lg:text-[16px]'>Wi-fi</span>
                    </div> */}
            </div>


        </div>
    )
}

export default Card