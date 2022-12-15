import React, { useState } from 'react'

const images = [
    'https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]
const Carousel = () => {
    const [currentImg, setCurrent] = useState(images[0])
    const handleChange=(x)=>{
        setCurrent(images[x])
    }
    return (
        <div className='aspect-[2/1] w-full relative overflow-hidden rounded-md md:rounded-2xl'>

            <img
                className='object-cover absolute w-full top-[-25%] z-0 grayscale-[.8]'
                src={currentImg}
            />

            <div className='absolute z-10 p-3 md:p-10 duration-300 w-full'>
                <h1 className='text-left text-[5vw] lg:text-[60px] font-bold leading-none tracking-wider opacity-50'>Spaces<br />for rent</h1>
                <p className='text-left mt-1 opacity-40 text-[2vw] lg:text-[21px]'>bed | kitchen | bath</p>
            </div>

            <div className='hidden md:hidden flex-col absolute z-0 right-3 top-3 gap-3'>
                {[0,1,2].map((item, idx) => (
                    <button key={idx} onClick={()=>handleChange(item)} className='border-white border-opacity-30 border-2 w-[11vw] md:w-[4rem] aspect-square flex items-center justify-center rounded-md overflow-hidden'>
                        <img
                            className='w-full h-full object-cover'
                            src='https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                    </button>
                ))}

            </div>



        </div>
    )
}

export default Carousel