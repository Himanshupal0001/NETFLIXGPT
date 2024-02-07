import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieList } from "../redux/movieSlice";
import { MOVIES_URL, REACT_APP_API_OPTIONS } from "../utils/utils";

function useGetMovieList(type) {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchMovieList(type);
    }, [type]);
    const fetchMovieList = async (type) => {
        try {
            setIsLoading(true)
            const response = await fetch(MOVIES_URL + type, REACT_APP_API_OPTIONS);
            const data = await response.json();
            dispatch(getMovieList(data.results))
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setIsLoading(false);
        }
    }

    return { isLoading }
}

export default useGetMovieList;