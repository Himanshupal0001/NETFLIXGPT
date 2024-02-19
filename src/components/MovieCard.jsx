import React from 'react'
import { IMG_URL } from '../utils/utils';

function MovieCard({ poster_path, movieItems }) {
    const style = {
        aspectRatio: '16/9',
        padding: '0 0.15rem',
        flex: `0 0 calc(100% / ${movieItems})`,
        maxWidth: `calc(100% / ${movieItems})`,
        borderRadius: '.2rem',
        objectFit: 'cover'
    }
    return <img alt='poster' style={style} src={IMG_URL + poster_path} />
}

export default MovieCard;

//className={`aspect-video px-[.15rem] flex=[0_0_calc(100%/${movieItems})] max-w-[calc(100%/${movieItems})]rounded - md object - cover`}