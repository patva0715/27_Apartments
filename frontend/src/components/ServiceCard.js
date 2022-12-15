import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { FaWifi, FaShower, FaBed,FaCar } from 'react-icons/fa'
import { BiDish, BiBath, BiBed, BiCar } from 'react-icons/bi'
const iconMap = {
    "kitchen": <GiKnifeFork />,
    "shower": <BiBath />,
    "wifi": <FaWifi />,
    "king bed": <BiBed />,
    "breakfast": <BiDish />,
    "free parking": <BiCar />,
}
const ServiceCard = ({ service }) => {
    return (
        <div className='p-1 flex items-center my-1 text-black text-md lg:text-[20px] lg:leading-[28px] w-[50%] md:w-[50%] '>
            <div className='mr-4'>{iconMap[service.name]}</div>
            <span className='capitalize whitespace-nowrap opacity-80'>{service.name}</span>
        </div>
    )
}

export default ServiceCard