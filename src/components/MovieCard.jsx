import React from 'react'
import { IMG_URL } from '../utils/utils';

function MovieCard({ poster_path }) {
    return (
        <div className='w-40'>
            <img alt='poster' className='h-full w-full object-cover' src={IMG_URL + poster_path} />
        </div>
    )
}

export default MovieCard
