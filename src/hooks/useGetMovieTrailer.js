import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../redux/movieSlice";
import { REACT_APP_API_OPTIONS } from "../utils/utils";
function useGetMovieTrailer(id) {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, REACT_APP_API_OPTIONS);
        const json = await response.json();

        const filterTrailer = json.results.filter(movies => movies.type === 'Trailer');
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0]
        dispatch(addTrailer(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, [id])
}

export default useGetMovieTrailer;