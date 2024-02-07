import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CustomCrousal() {
    const element = [
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        { src: 'https://placehold.co/600x400/png' },
        // 'element2',
        // 'element3',
        // 'element4',
        // 'element5',
        // 'element6',
        // 'element7',
        // 'element8',
        // 'element9',
        // 'element10',
        // 'element11',
    ]
    return (
        <div className='flex items-center h-32 justify-center bg-gray-300'>
            <button className='w-[5rem] h-full bg-gray-500 bg-opacity-40 z-10 m-[.25rem 0]
             flex items-center cursor-pointer border-none rounded-md rounded-l'>
                <IoIosArrowBack color='white' />
            </button>
            <div className='flex h-full w-[calc(100%- 10rem)]'>
                {
                    element.map(element => (
                        <img alt='placeholder' src={element.src} className='aspect-video px-[.25rem] flex-[0_0_16.66%] max-w-[16.66%]' />
                    ))
                }
            </div>
            <button className='w-[5rem] h-full bg-gray-500 bg-opacity-40 z-10 flex items-center cursor-pointer border-none rounded-md'>
                <IoIosArrowForward color='white' />
            </button>
        </div>
    )
}

export default CustomCrousal


// < button className = 'w-[5rem] bg-gray-500 bg-opacity-40 border-2 h-full absolute right-0 before:content-["button name"] hidden' > Right</ >