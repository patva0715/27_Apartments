import React from 'react'
const POI = [{
    name:'Nearest beach front',
    distance:'2km',
    time:5
},{
    name:'Vigan City',
    distance:'30km',
    time:5
},{
    name:'Sand Dunes',
    distance:'35km',
    time:5
},{
    name:'Malacanang of the north',
    distance:'2km',
    time:5
}]
const MapInfo= () => {
  return (
    <div className='fixed p-2 top-20 right-10 bg-[#111] text-white z-10 rounded-md'>
        <h1>Point of Interest</h1>
        <ul className='text-md lg:text-[17px] lg:leading-[22px]'>
            {POI.map((item,idx)=>(
                <li key={idx} className='flex'>
                    <span className='grow mr-4'>{item.name}</span>
                    <span className=''>{item.distance} {`(${item.time} min)`}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MapInfo
