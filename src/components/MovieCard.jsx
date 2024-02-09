import React from 'react'
import { IMG_URL } from '../utils/utils';

function MovieCard({ poster_path }) {
    return <img alt='poster' className={`aspect-video px-[.15rem] flex=[0_0_16.66%] max-w-[16.66%]
     rounded-md object-cover`} src={IMG_URL + poster_path} />
}

export default MovieCard;
