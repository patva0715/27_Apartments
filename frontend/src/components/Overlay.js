import { Container } from '@mui/material'
import React from 'react'

const Overlay = ({showOverlay,setShowOverlay}) => {
    return (
        <div style={{opacity:showOverlay?1:0, pointerEvents:showOverlay?'all':'none'}} className='fixed top-0 bottom-0 w-full bg-black bg-opacity-80 p-[10%] flex items-center '>
            <Container maxWidth='sm' className='p-2 bg-white rounded-md relative'>
                <button onClick={()=>setShowOverlay(false)} className='text-red-500 border-2 bg-white translate-x-[50%] translate-y-[-50%] p-1 aspect-square w-[2rem] text-center rounded-[50%] absolute top-0 right-0'>X</button>
                <h1>Book via AirBnb</h1>
                <Divider/>
                <h1>Reserve via phone</h1>
            </Container>
        </div>
    )
}
const Divider = () =>{
    return(
        <div className='flex items-center'>
            < div className='min-h-[2px] bg-[#ccc] grow'/>
            <span className='px-2'>or</span>
            < div className='min-h-[2px] bg-[#ccc] grow'/>
        </div>
    )
}

export default Overlay