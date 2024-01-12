import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
function VideoTitle({ title, overview }) {
    return (
        <div className='absolute bg-red-300 w-full bottom-0 h-[45%]'>
            {/* title and header */}
            <div className='px-8'>
                <h1 className='text-5xl font-semibold text-white'>{title}</h1>
                <p className='w-1/3 text-white'>{overview}</p>
            </div >
            <div className='flex items-center justify-between'>
                {/* buttons  */}
                <div className='px-8 flex gap-3'>
                    <button className='flex items-center justify-center gap-2 h-10 py-1 px-6 bg-white rounded-md text-xl'>
                        <FaPlay />
                        <span>Play</span>
                    </button>
                    <button className='flex items-center justify-center gap-2 h-10 py-1 px-6 bg-gray-500 opacity-50 rounded-md text-xl'>
                        <IoIosInformationCircleOutline size='1.7em' color='white ' />
                        <span className='text-white'>More Info</span>
                    </button>
                </div>
                <div>
                    <button>Sound</button>
                    <div>18+ tag</div>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle
