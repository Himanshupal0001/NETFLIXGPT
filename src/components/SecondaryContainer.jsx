import React from 'react'
import MovieList from './MovieList'
import { POPULAR, TOP_RATED, UPCOMING } from '../utils/contants'
function SecondaryContainer() {
    return (
        <div className='w-full md:-mt-14 -mt-0 z-10'>
            <MovieList title='Popular' type={POPULAR} />
            <MovieList title='Top Rated' type={TOP_RATED} />
            <MovieList title='Upcoming' type={UPCOMING} />
            <MovieList title='Popular' type={POPULAR} />
            <MovieList title='Top Rated' type={TOP_RATED} />
            <MovieList title='Upcoming' type={UPCOMING} />
            <MovieList title='Popular' type={POPULAR} />
            <MovieList title='Top Rated' type={TOP_RATED} />
            <MovieList title='Upcoming' type={UPCOMING} />
        </div>
    )
}

export default SecondaryContainer
