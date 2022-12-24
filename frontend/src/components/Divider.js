import React from 'react'

const Divider = ({title}) => {
    return (
        <div className='flex flex-col my-2  '>
            {/* < div className='min-h-[2px] bg-[#ccc] mb-2' /> */}
            <span className='px-2 font-semibold min-w-[40%] text-[5vw] rounded-md lg:text-[32px] bg-orange-100  text-black border-[1px] border-[#999] self-start text-center p-1'>{title}</span>
            {/* < div className='min-h-[2px] bg-[#ccc] grow' /> */}
        </div>
    )
}

export default Divider