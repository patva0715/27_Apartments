import React from 'react'

const Divider = ({title}) => {
    return (
        <div className='flex flex-col my-2 '>
            {/* < div className='min-h-[2px] bg-[#ccc] mb-2' /> */}
            <span className='px-2 font-semibold min-w-[40%] text-[1.2rem] rounded-md lg:text-[32px]  text-black border-[2px] bg-white border-[#ddd] self-start text-center p-1'>{title}</span>
            {/* < div className='min-h-[2px] bg-[#ccc] grow' /> */}
        </div>
    )
}

export default Divider