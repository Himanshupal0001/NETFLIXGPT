import { useEffect, useState } from 'react';
import { TMBD_URL, REACT_APP_API_OPTIONS } from '../utils/utils';
import { addNowPlayingMovies } from '../redux/movieSlice'
import { useDispatch } from 'react-redux';
function useNowPlayingMovies() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch(TMBD_URL, REACT_APP_API_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        }
        catch (err) {
            console.log(err);
            setError(err);
        }
        finally {
            setIsLoading(false);
        }
    }


    return { error, isLoading };
}

export default useNowPlayingMovies;