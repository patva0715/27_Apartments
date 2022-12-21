import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import profile from '../public/info.json'
const rangeOptions = [{
    min: 0,
    max: .5
}, {
    min: .5,
    max: 2,
}, {
    min:2,
    max:10
},{
    min: 10,
    max: 50
}]

const MapInfo = ({ setShowMap, setVisibleLocations }) => {
    const [range, setRange] = useState(0)
    const [visiblePoints, setVisiblePoints] = useState([])
    const handleRangeChange = (action) => {
        let max = rangeOptions[range + action].max
        let min = rangeOptions[range + action].min
        let locations = (profile.pointsOfInterest.filter(({ distance }) => Number(distance) <= max && Number(distance) > min))
        setVisibleLocations(locations)
        setVisiblePoints(locations)
        setRange(state => state + action)
    }
    useEffect(() => {
        let locations = (profile.pointsOfInterest.filter(({ distance }) => Number(distance) <= .5))
        setVisibleLocations(locations)
        setVisiblePoints(locations)
        setShowMap(true)
    }, [])
    return (
        <div className='w-full border-0 border-orange-400 h-full relative'>
            <span className='fixed top-1 left-1 text-orange-500'>In development</span>
            <button className='p-1 px-2 bg-red-200 m-4 rounded-md right-4 top-4 absolute opacity-80 text-red-500'>
                <Link href='/'>Close Map</Link>
            </button>
            <div className='flex gap-2 p-2 absolute bottom-2 right-2 text-[6vw] lg:text-[30px]'>
                <button className='text-white bg-black rounded-md aspect-square w-min-[20px] disabled:opacity-20' disabled={range === 0 ? true : false} onClick={() => handleRangeChange(-1)}><BiMinus /></button>
                <span>{rangeOptions[range].max}km</span>
                <button className='text-white bg-black rounded-md aspect-square w-min-[20px] disabled:opacity-20' disabled={range === 3 ? true : false} onClick={() => handleRangeChange(1)}><BiPlus /></button>
            </div>
            <div className='absolute p-2 top-10 left-5 bg-black text-white z-10 rounded-md opacity-60'>
                <h1 className=' text-md lg:text-[20px] lg:leading-[22px] mb-3'>Point of Interest <span className='opacity-80 ml-4'>&lt; {rangeOptions[range].max}km</span></h1>
                <ul className='text-md lg:text-[17px] lg:leading-[22px]'>
                    {visiblePoints.map((item, idx) =>{ 
                        if(item.name==="hidden")return <></>
                        return(
                        <li key={idx} className='flex text-sm lg:text-[18px] lg:leading-[22px] mb-2'>
                            <span className='grow mr-[5vw]'>{item.name}</span>
                            {/* <span className='mr-2'>{item.distance} km </span> */}
                            {/* <span className='opacity-70 scale-75'>{`(${item.time} min)`}</span> */}
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    )
}

export default MapInfo
