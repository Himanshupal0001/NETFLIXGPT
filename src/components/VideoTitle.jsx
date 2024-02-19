import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

function VideoTitle({ title, overview }) {
    return (
        <div className='absolute w-full bottom-0 h-[45%] invisible'>
            {/* title and header */}
            <div className='px-10 text-white'>
                <h1 className='text-5xl font-semibold '>{title}</h1>
                <p className='w-1/3'>{overview}</p>
            </div >
            <div className='flex items-center justify-between'>
                {/* buttons  */}
                <div className='px-10 flex gap-3'>
                    <button className='flex items-center justify-center gap-2 h-10 py-1 px-6 bg-white hover:opacity-15 rounded-md text-lg'>
                        <FaPlay />
                        <span>Play</span>
                    </button>
                    <button className='flex items-center justify-center gap-2 h-10 py-1 px-6 bg-gray-rgba hover:bg-light-gray-rgba rounded-md text-lg'>
                        <IoIosInformationCircleOutline size='1.5em' color='white ' />
                        <span className='text-white'>More Info</span>
                    </button>
                </div>
                <div className='flex gap-x-2 cursor-pointer'>
                    <button className='p-2 rounded-full border-white border-2'><HiOutlineSpeakerWave size='1.5em' color='white' /></button>
                    <div className='bg-gray-500 bg-opacity-50 border-l-2 border-white flex items-center w-20 pl-2 text-white text-lg'>18+</div>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle
