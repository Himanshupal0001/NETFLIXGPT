import React from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../hooks/useGetMovieTrailer';
function VideoPlaybackContainer({ title, id, overview }) {
    useGetMovieTrailer(id)
    const { trailer } = useSelector(store => store.movies);
    const { isLoading } = useGetMovieTrailer();
    if (isLoading === true) return;
    return (
        <div className='bg-green-300 h-screen relative'>
            {/* video playback */}

            <iframe src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=0&mute=1&showinfo=0&controls=0&rel=0"}
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
