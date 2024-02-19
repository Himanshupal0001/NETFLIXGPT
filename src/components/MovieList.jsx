import React from 'react'
import useGetMovieList from '../hooks/useGetMovieList';
import { useSelector } from 'react-redux';
import CustomCrousal from './CustomCrousal';

function MovieList(props) {
    const { title, type } = props;
    useGetMovieList(type);
    return <CustomCrousal title={title} type={type} />
}

export default MovieList
