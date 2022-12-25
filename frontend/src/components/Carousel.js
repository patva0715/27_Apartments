import React, { useEffect, useRef, useState } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import Image from 'next/image'
import img1 from '../../public/images/main.jpg'
import img2 from '../../public/images/regular1.jpg'
import img3 from '../../public/images/regular3.jpg'
import img4 from '../../public/images/family1.jpg'

// const ImgComp = ({ style, src }) => {
//     return (
//         <>
//             <animated.div style={{ ...style }} className='object-cover absolute w-full h-full top-[-0%] grayscale-[.2]'>
//                 <Image placeholder='blur' fill={true} style={{ objectFit: 'cover' }} src={imgSrc[src]} />
//             </animated.div>
//         </>)
// }
const className = 'object-cover absolute w-full h-full top-[-0%] grayscale-[.2]'
const Images = [
    ({ style }) => (<animated.div style={{ ...style }} className={className}>
        <Image placeholder='blur' fill={true} style={{ objectFit: 'cover' }} src={img1} />
    </animated.div>),
    ({ style }) => (<animated.div style={{ ...style }} className={className}>
        <Image placeholder='blur' fill={true} style={{ objectFit: 'cover' }} src={img2} />
    </animated.div>),
    ({ style }) => (<animated.div style={{ ...style }} className={className}>
        <Image placeholder='blur' fill={true} style={{ objectFit: 'cover' }} src={img3} />
    </animated.div>),
    ({ style }) => (<animated.div style={{ ...style }} className={className}>
        <Image placeholder='blur' fill={true} style={{ objectFit: 'cover' }} src={img4} />
    </animated.div>),
]

const Carousel = () => {
    const [index, set] = useState(0)
    const intervalRef = useRef(null)
    const handleChange = (move) => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => set(state => (state + 1) % Images.length), 5000)
        const loop = index === 0 || index === Images.length - 1 ? true : false
        if (loop && move === 1 && index === Images.length - 1) return set(0)
        else if (loop && move === -1 && index === 0) return set(Images.length - 1)
        else set(state => (state + move) % Images.length)
    }
    const transRef = useSpringRef()
    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, },
        enter: { opacity: 1, },
        leave: { opacity: 0, },
    })
    useEffect(() => {
        transRef.start()
    }, [index])
    useEffect(() => {
        intervalRef.current = setInterval(() => set(state => (state + 1) % Images.length), 5000)
        return (() => clearInterval(intervalRef.current))
    }, [])
    return (
        <div className='aspect-[8/5] w-full relative overflow-hidden rounded-md md:rounded-2xl'>
            {transitions((style, i) => {
                const Image = Images[i]
                return <Image style={style} />
            })}

            <div className='absolute top-4 z-20 right-4 flex gap-2 text-black text-[2rem]  lg:text-[30px]'>
                <button onClick={() => handleChange(-1)}><BsFillArrowLeftCircleFill /></button>
                <button onClick={() => handleChange(1)}><BsFillArrowRightCircleFill /></button>
            </div>


        </div>
    )
}

export default Carousel