import React from 'react'
import MovieList from './MovieList'

function SecondaryContainer() {
    return (
        <div className='w-full'>
            <MovieList title='Popular' type='popular' />
            {/* MovieList - popular 
            MovieList-NowPlaying
            MovieList - Trending
            MovieList - Kids */}
        </div>
    )
}

export default SecondaryContainer
