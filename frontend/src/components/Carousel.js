import React, { useEffect, useRef, useState } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
const images = [
    'https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]
const className = 'object-cover absolute w-full h-full top-[-0%] grayscale-[.8]'
const Images = [
    ({ style }) => <animated.img style={{ ...style, zIndex:0 }} className={className}
        src='https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    />,
    ({ style }) => <animated.img style={{ ...style }} className={className}
        src='https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    />,
    ({ style }) => <animated.img style={{ ...style }} className={className}
        src='https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    />,
]
const Carousel = () => {
    const [index, set] = useState(0)
    const intervalRef=useRef(null)
    const handleChange = (move) =>{
        if (intervalRef.current)clearInterval(intervalRef.current)
        intervalRef.current=setInterval(()=>set(state=>(state+1)%3),5000)
        const loop = index===0 || index===2?true:false
        if (loop && move===1 && index===2) return set(0)
        else if (loop && move===-1 && index===0) return set(2)
        else set(state=>(state+move)%3)
    }
    const transRef = useSpringRef()
    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, },
        enter: { opacity: 1,},
        leave: { opacity: 0, },
    })
    useEffect(() => {
        transRef.start()
    }, [index])
    useEffect(()=>{
        intervalRef.current=setInterval(()=>set(state=>(state+1)%3),5000)
        return (()=>clearInterval(intervalRef.current))
    },[])
    return (
        <div className='aspect-[8/5] w-full relative overflow-hidden rounded-md md:rounded-2xl'>
            {transitions((style, i) => {
                const Image = Images[i]
                return <Image style={style} />
            })}
            <div className='absolute z-10 p-3 md:p-10 duration-300 w-full'>
                <h1 className='text-left text-[6.45vw] lg:text-[60px] font-bold leading-none tracking-wider opacity-50'>Spaces<br />for rent</h1>
                <p className='text-left mt-1 opacity-40 text-[3vw] lg:text-[21px]'>bed | kitchen | bath</p>
            </div>

            <div className='hidden md:hidden flex-col absolute z-0 right-3 top-3 gap-3'>
                {[0, 1, 2].map((item, idx) => (
                    <button key={idx} className='border-white border-opacity-30 border-2 w-[11vw] md:w-[4rem] aspect-square flex items-center justify-center rounded-md overflow-hidden'>
                        {/* <img
                            className='w-full h-full object-cover'
                            src='https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        /> */}
                    </button>
                ))}

            </div>

            <div className='absolute top-4 z-20 right-4 flex gap-2 text-black text-[2rem] lg:text-[30px]'>
                <button onClick={()=>handleChange(-1)}><BsFillArrowLeftCircleFill/></button>
                <button onClick={()=>handleChange(1)}><BsFillArrowRightCircleFill/></button>
            </div>


        </div>
    )
}

export default Carousel