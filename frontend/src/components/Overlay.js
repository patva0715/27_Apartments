import { Container } from '@mui/material'
import React from 'react'
import { SiAirbnb } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
const Overlay = ({ showOverlay, setShowOverlay }) => {
    return (
        <div onClick={()=>setShowOverlay(false)} style={{ opacity: showOverlay ? 1 : 0, pointerEvents: showOverlay ? 'all' : 'none' }} className='fixed top-0 bottom-0 w-full bg-black bg-opacity-80 p-[10%] flex items-center '>
            <Container maxWidth='sm' className='p-2 bg-white rounded-md relative flex flex-col' onClick={(e)=>{e.stopPropagation()}}>
                <button onClick={() => setShowOverlay(false)} className='text-red-500 border-2 bg-white translate-x-[50%] translate-y-[-50%] p-1 aspect-square w-[2rem] text-center rounded-[50%] absolute top-0 right-0'>X</button>
                <button className='p-2 bg-orange-400 rounded-md flex items-center justify-center '>
                    <SiAirbnb className='mr-2' />
                    <h1>Book via AirBnb</h1>
                </button>
                <Divider />
                <button className='p-2 bg-green-400 rounded-md flex justify-center items-center'>
                    
                    <BsFillTelephoneFill className='mr-2'/><span className=''>Reserve via phone</span>
                    {/* <span className='opacity-70'>09065581899</span> */}

                </button>
            </Container>
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