import { Container } from '@mui/material'
import React from 'react'
import { SiAirbnb } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

const Overlay = ({ showOverlay, setShowOverlay }) => {
    return (
        <div onClick={() => setShowOverlay(false)} style={{ opacity: showOverlay ? 1 : 0, pointerEvents: showOverlay ? 'all' : 'none' }} className='fixed top-0 bottom-0 w-full bg-black bg-opacity-80 p-[10%] flex items-center '>
            <div className='w-full p-2 bg-white rounded-md relative flex flex-col ' onClick={(e) => { e.stopPropagation() }}>
                <button onClick={() => setShowOverlay(false)} className='text-red-500  text-[35px] rounded-md  bg-white translate-x-[50%] translate-y-[-50%] aspect-square  text-center absolute top-0 right-0'>
                    <IoClose />
                </button>
                <button className='p-2 bg-orange-400 rounded-md text-[3.7vw]  flex items-center flex-wrap justify-center w-full '>
                    <SiAirbnb className='mr-2' />
                    <h1>Book via AirBnb</h1>
                    <span className='text-[2vw] lg:text-[12px] basis-full'>*Not Available</span>
                </button>
                <Divider />
                <button className='p-2 bg-green-400 rounded-md flex text-[3.7vw] justify-center items-center flex-wrap w-full'>
                    <BsFillTelephoneFill className='mr-2' /><span className=''>09199333672</span>
                    <span className='opacity-50 basis-full text-[2.8vw] lg:text-[14px]'>Reserve via phone</span>

                </button>
            </div>
        </div>
    )
}
const Divider = () => {
    return (
        <div className='flex items-center'>
            < div className='min-h-[2px] bg-[#ccc] grow' />
            <span className='px-2'>or</span>
            < div className='min-h-[2px] bg-[#ccc] grow' />
        </div>
    )
}

export default Overlay