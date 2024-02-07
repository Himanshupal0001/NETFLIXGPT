import React from 'react'
import { useSelector } from 'react-redux'
import VideoPlaybackContainer from './VideoPlaybackContainer'
function MainContainer() {
    const movie = useSelector(store => store.movies.nowPlaying[0]);
    if (movie === null) return;
    const { original_title, overview, id } = movie;
    return (
        <div className=' w-screen'>
            <VideoPlaybackContainer title={original_title} id={id} overview={overview} />
        </div>
    )
}

export default MainContainer
