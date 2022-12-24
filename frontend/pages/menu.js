import { Container } from '@mui/material'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiKnifeFork } from 'react-icons/gi'
const foods = [{
    title: "Silog Meals",
    set: [{
        name: "Hotsilog",
        price: 150
    }, {
        name: "Tapsilog",
        price: 150
    }, {
        name: "Hamsilog",
        price: 150
    }, {
        name: "Tocilog",
        price: 150
    }, {
        name: "Chicksilog",
        price: 150
    }, {
        name: "LongSilog",
        price: 150
    },]
}, {
    title: "Beverages",
    set: [{
        name: "Coke",
        price: "30"
    }, {
        name: "Sprite",
        price: "30"
    }, {
        name: "Water",
        price: "15"
    }, {
        name: "Gatorade",
        price: "50"
    }]
}, {
    title: "Inasal Meals",
    set: [{
        name: "Chicken Inasal",
        price: 180
    },]
}, {
    title: "Side Orders",
    set: [{
        name: "Miki",
        price: 150
    },]
}]
const Menu = () => {
    return (
        <Container maxWidth='md' className='bg-white bg-opacity-70'>
            <div className='flex flex-col'>
                <h1 className='text-center mt-[3vw] text-[9vw] leading-[7.5vw] flex items-center justify-center'>
                    <GiKnifeFork className='mr-2' />
                    MENU
                    </h1>
                <span className='opacity-60 text-[4vw] text-center'>Open 24 Hours</span>
                <span className='opacity-60 text-[4vw] text-center flex justify-center'>
                    <BsFillTelephoneFill className='mr-1 opacity-60 translate-y-[4px]'/>09199333672</span>
            </div>

            <div className=' flex flex-wrap'>
                {foods.map((food, idx) => (
                    <div className='basis-[100%]' key={idx}>
                        <h2 className='text-[6vw] basis-full mt-2 font-[500]'>{food.title}</h2>
                        <di key={idx} className='flex flex-wrap basis-full items-center'>
                            {food.set.map((set, idx) => (
                                <div className='basis-full flex text-[4vw]' key={idx}>
                                    <h2 className='grow p-2 px-4 opacity-70'>{set.name}</h2>
                                    <h2 className='opacity-50'>₱{set.price}</h2>
                                </div>
                            ))}

                        </di>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Menu