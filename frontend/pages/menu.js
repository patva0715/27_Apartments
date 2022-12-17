import { Container } from '@mui/material'
import React from 'react'

const foods = [{
    name: "Tapsilog",
    price: 150
}, {
    name: "Tapsilog",
    price: 150
}, {
    name: "Tapsilog",
    price: 150
}, {
    name: "Tapsilog",
    price: 150
}, {
    name: "Tapsilog",
    price: 150
}, {
    name: "Tapsilog",
    price: 150
},]
const menu = () => {
    return (
        <Container maxWidth='md'>
            <div className='pt-[5vw] flex flex-wrap'>
                <h1 className='text-[3rem] basis-full'>Food Menu</h1>
                {foods.map((food, idx) => (
                    <di key={idx} className='flex items-center basis-[50%]'>
                        <h2 className='grow p-2 px-4'>{food.name}</h2>
                        <h2>{food.price}</h2>
                    </di>
                ))}
            </div>
        </Container>
    )
}

export default menu