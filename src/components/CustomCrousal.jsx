import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import useMediaQuery from '../hooks/useMediaQuery';
import CustomCrousalProgressBar from './CustomCrousalProgressBar';

function CustomCrousal({ title }) {
    const [mouseHover, setMouseHover] = useState(false);
    const [curIndex, setCurIndex] = useState(0);
    const { movieList } = useSelector(store => store.movies);
    const [movieItems, setMovieItems] = useState(6);
    const { screenSize } = useMediaQuery();
    useEffect(() => {
        if (screenSize <= 640) {
            setMovieItems(2)
        }
        else if (screenSize <= 768 && screenSize > 640) {
            setMovieItems(5)
        }
        else {
            setMovieItems(6)
        }
    }, [screenSize]);
    const IndicatorCount = Math.ceil(movieList.length / movieItems);
    const handleMouseIn = () => {
        setMouseHover(true);
    }
    const handleMouseOut = () => {
        setMouseHover(false)
    }

    const handleLeftButton = (e) => {
        e.stopPropagation();
        setCurIndex((prev) => (prev - 1 + movieList.length) % movieList.length);
    };

    const handleRightButton = (e) => {
        e.stopPropagation();
        setCurIndex((prev) => (prev + 1) % movieList.length);
    };


    return (
        <div>
            <div className='py-0 px-12 flex justify-between items-center h-10 text-white'>
                <div>{title}</div>
                <div className={`${!mouseHover ? 'invisible' : ''}`}>
                    <CustomCrousalProgressBar IndicatorCount={IndicatorCount} curIndex={curIndex} />
                </div>
            </div>
            <div className='flex items-center h-36 w-full justify-center ' onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                <button className={`w-[10rem] h-full bg-gray-700  z-10 m-[.25rem 0] bg-opacity-40
             flex items-center justify-center cursor-pointer border-none rounded-md rounded-tl-none rounded-bl-none hover:bg-opacity-60`} onClick={handleLeftButton}>
                    <IoIosArrowBack color='white' size='1.5em' className={`${!mouseHover ? 'invisible' : ''} hover:scale-125 ease-in duration-150`} />
                </button>
                <div className={`flex h-full w-[calc(100% - 20rem)] translate-x-[calc(${curIndex}*-100%)] duration-300 ease-in-out`}>
                    {
                        movieList?.map(movie => (
                            <MovieCard poster_path={movie.poster_path} key={movie.id} movieItems={movieItems} />
                        ))
                    }
                </div>
                <button className={`w-[10rem] h-full bg-gray-500 bg-opacity-40 z-10
             flex items-center justify-center cursor-pointer border-none rounded-md rounded-tr-none rounded-br-none hover:bg-opacity-60`} onClick={(e) => handleRightButton(e)}>
                    <IoIosArrowForward color='white' size='1.5em' className={`${!mouseHover ? 'invisible' : ''} hover:scale-125`} />
                </button>
            </div>
        </div>
    )
}

export default CustomCrousal

