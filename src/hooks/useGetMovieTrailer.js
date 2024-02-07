import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../redux/movieSlice";
import { REACT_APP_API_OPTIONS } from "../utils/utils";
function useGetMovieTrailer(id) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        getMovieVideos();
    }, [id]);
    const getMovieVideos = async () => {
        setIsLoading(true)
        try {
            if (id) {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, REACT_APP_API_OPTIONS);
                const json = await response.json();
                const filterTrailer = json.results.filter(movies => movies.type === 'Trailer');
                const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0]
                dispatch(addTrailer(trailer));
            }
        }
        catch (err) {
            setError(err);
            console.log(err)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { isLoading, error };
}

export default useGetMovieTrailer;