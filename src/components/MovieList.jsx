import React from 'react'
import useGetMovieList from '../hooks/useGetMovieList';
import { useSelector } from 'react-redux';
import CustomCrousal from './CustomCrousal';

function MovieList(props) {
    const { title, type } = props;
    useGetMovieList(type);
    return (
        <div>
            <CustomCrousal title={title} />
            {/* <div className='flex gap-x-2 '>
                {
                    movieList?.map(movie => {
                        return (
                            <MovieCard key={movie.id} poster_path={movie.poster_path} />
                        )
                    })
                }

            </div> */}
        </div>
    )
}

export default MovieList
