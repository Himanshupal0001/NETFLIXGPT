import React, { useEffect, useState } from 'react'
import VideoTitle from './VideoTitle'
import { REACT_APP_API_OPTIONS } from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../redux/movieSlice';
import useGetMovieTrailer from '../hooks/useGetMovieTrailer';
function VideoPlaybackContainer({ title, id, overview }) {
    // const [trailerId, setTrailerId] = useState(null)
    const { trailer } = useSelector(store => store.movies)
    useGetMovieTrailer(id)
    return (
        <div className='bg-green-300 h-screen relative'>
            {/* video playback */}

            <iframe src={"https://www.youtube.com/embed/" + trailer.key + "?autoplay=0&mute=1&showinfo=0&controls=0&rel=0"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; gyroscope;"
                className='h-full w-full aspect-video'
            ></iframe>
            <VideoTitle title={title} overview={overview} />
        </div>
    )
}

export default VideoPlaybackContainer



// const dispatch = useDispatch();
// const getMovieVideos = async () => {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, REACT_APP_API_OPTIONS);
//     const json = await response.json();
//     console.log(json)

//     const filterTrailer = json.results.filter(movies => movies.type === 'Trailer');
//     const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0]
//     console.log(trailer)
//     dispatch(addTrailer(trailer));
//     setTrailerId(trailer.key)
// }

// useEffect(() => {
//     getMovieVideos();
// }, [])
