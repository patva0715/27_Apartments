import { Container } from '@mui/material'
import React from 'react'
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
        name: "Water",
        price: "15"
    }, {
        name: "Coke",
        price: "30"
    },]
}, {
    title: "Inasal Meals",
    set: [{
        name: "Chicken Inasa",
        price: 150
    },]
}, {
    title: "Side Orders",
    set: [{
        name: "Fries",
        price: 150
    }, {
        name: "Miki",
        price: 150
    },]
}]
const Menu = () => {
    return (
        <Container maxWidth='md' className='bg-white bg-opacity-70'>
            <h1 className='text-center mt-[3vw] text-[2.5rem] flex items-center justify-center'>
                <GiKnifeFork className='mr-2' />
                MENU</h1>
            <div className=' flex flex-wrap'>
                {foods.map((food, idx) => (
                    <div className='basis-[100%]' key={idx}>
                        <h2 className='text-[1.5rem] basis-full mt-2 font-semibold'>{food.title}</h2>
                        <di key={idx} className='flex flex-wrap basis-full items-center'>
                            {food.set.map((set, idx) => (
                                <div className='basis-full flex ' key={idx}>
                                    <h2 className='grow p-2 px-4'>{set.name}</h2>
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