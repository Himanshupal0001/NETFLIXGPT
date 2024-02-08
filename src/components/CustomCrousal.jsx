import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

function CustomCrousal({ title }) {
    const [mouseHover, setMouseHover] = useState(false);
    const [curInex, setCurIndex] = useState(0);
    const { movieList } = useSelector(store => store.movies);
    const [movieItems, setMovieItems] = useState(6);
    const handleMouseIn = () => {
        setMouseHover(true);
    }
    const handleMouseOut = () => {
        setMouseHover(false)
    }

    const handleLeftButton = () => {
        setCurIndex(prev => prev - 1);
        console.log(curInex)
    }

    const handleRightButton = () => {
        setCurIndex(prev => prev + 1)
        console.log(curInex)
    }
    return (
        <div>
            <div className='py-0 px-14'>
                <div>Title</div>
                <div>
                </div>
            </div>
            <div className='flex items-center w-full h-32 justify-center ' onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                <button className={`w-[10rem] h-full bg-gray-700  z-10 m-[.25rem 0] bg-opacity-20
             flex items-center justify-center cursor-pointer border-none rounded-md rounded-tl-none rounded-bl-none hover:bg-opacity-60`} onClick={handleLeftButton}>
                    <IoIosArrowBack color='white' size='1.5em' className={`${!mouseHover ? 'invisible' : ''} hover:scale-125 ease-in duration-150`} />
                </button>
                <div className={`flex h-full w-[calc(100% - 20rem)] translate-x-[calc(${curInex}*-100%)] duration-300 ease-in-out overflow-x-scroll md:overflow-hidden`}>
                    {
                        movieList?.map(movie => (
                            <MovieCard poster_path={movie.poster_path} key={movie.id} />
                        ))
                    }
                </div>
                <button className={`w-[10rem] h-full bg-gray-500 bg-opacity-40 z-10
             flex items-center justify-center cursor-pointer border-none rounded-md rounded-tr-none rounded-br-none hover:bg-opacity-60`} onClick={handleRightButton}>
                    <IoIosArrowForward color='white' size='1.5em' className={`${!mouseHover ? 'invisible' : ''} hover:scale-125`} />
                </button>
            </div>
        </div>
    )
}

export default CustomCrousal


// < button className = 'w-[5rem] bg-gray-500 bg-opacity-40 border-2 h-full absolute right-0 before:content-["button name"] hidden' > Right</ >

//translate-x-[${curInex} * -100%]

//<img alt='placeholder' src={element.src} className='aspect-video px-[.25rem] flex-[0_0_16.66%] max-w-[16.66%] rounded-md' key={index} />