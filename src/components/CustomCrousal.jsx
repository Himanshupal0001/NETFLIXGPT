import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import useMediaQuery from '../hooks/useMediaQuery';
import CustomCrousalProgressBar from './CustomCrousalProgressBar';


function CustomCrousal({ title, type }) {
    const [mouseHover, setMouseHover] = useState(false);
    const [curIndex, setCurIndex] = useState(0);
    const { movieList } = useSelector(store => store.movies);
    const [movieItems, setMovieItems] = useState(6);
    const { ref, screenSize } = useMediaQuery();
    const style = {
        display: 'flex',
        height: '100%',
        width: 'calc(100%-20rem)',
        transform: `translateX(calc(${curIndex}*-100%))`,
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease-in-out',
    }
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
    }, [screenSize])
    const IndicatorCount = Math.ceil(movieList[type]?.length / movieItems);
    const handleMouseIn = () => {
        setMouseHover(true);
    }
    const handleMouseOut = () => {
        setMouseHover(false)
    }

    const handleLeftButton = (e) => {
        e.stopPropagation();
        if (curIndex - 1 < 0) {
            setCurIndex(IndicatorCount - 1)
        }
        else {
            setCurIndex(prev => prev - 1)
        }
    }

    const handleRightButton = (e) => {
        e.stopPropagation();
        if (curIndex + 1 >= IndicatorCount) {
            setCurIndex(0)
        }
        else {
            setCurIndex(prev => prev + 1)
        }
    }

    if (!movieList) {
        return;
    }

    return (
        <div className='mb-1'>
            <div className='py-0 px-12 flex justify-between items-center h-10 text-white'>
                <div className='md:text-xl  font-medium'>{title}</div>
                <div className={`${!mouseHover ? 'invisible' : ''} `}>
                    <CustomCrousalProgressBar IndicatorCount={IndicatorCount} curIndex={curIndex} />
                </div>
            </div>
            <div className='flex items-center h-36 w-full justify-center ' onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} ref={ref}>
                <button className={`w-[10rem] h-full bg-black  z-10 m-[.25rem 0] bg-opacity-75 ${curIndex === 0 ? 'invisible' : ''}
             flex items-center justify-center cursor-pointer border-none rounded-md rounded-tl-none rounded-bl-none hover:bg-opacity-80 `} onClick={handleLeftButton}>
                    <IoIosArrowBack color='white' size='1.5em' className={`${!mouseHover ? 'invisible' : ''} hover:scale-125 ease-in`} />
                </button>
                <div style={style}>
                    {
                        movieList[type]?.map(movie => (
                            <MovieCard poster_path={movie.poster_path} key={movie?.id} movieItems={movieItems} />
                        ))
                    }
                </div>
                <button className={`w-[10rem] h-full bg-black bg-opacity-50 z-10
             flex items-center justify-center cursor-pointer border-none rounded-md rounded-tr-none rounded-br-none hover:bg-opacity-55 invisible md:visible`} onClick={(e) => handleRightButton(e)}>
                    <IoIosArrowForward color='white' size='1.5em' className={`${!mouseHover ? 'invisible' : ''} hover:scale-125`} />
                </button>
            </div>
        </div>
    )
}

export default CustomCrousal


//className = {`flex h-full w-[calc(100% - 20rem)] translate-x-[calc(${curIndex}*-100%)]  duration-300ms ease-in-out`}
