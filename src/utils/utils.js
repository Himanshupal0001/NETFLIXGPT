// import { useDispatch } from 'react-redux'
// import { signOut } from 'firebase/auth'
// import { auth } from '../utils/firebase';
// import { removeUser } from '../redux/authSlice'
// import { useNavigate } from 'react-router-dom';

// export const handleSignout = (token) => {
//     const disptach = useDispatch();
//     const navigate = useNavigate();
//     try {
//         if (token) {
//             signOut(auth)
//                 .then(() => {
//                     disptach(removeUser());
//                     navigate('/')
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//         }

//     }
//     catch (err) {
//         console.log(err)
//     }
// }


export const NETFLIX_PREMIUM_PRICEID = 'price_1O54d2D9olOtzKPkVhCpnHfu'
export const NETFLIX_STANDARD_PRICEID = 'price_1O54cmD9olOtzKPkkgkWuhrW'
export const NETFLIX_BASIC_PRICEID = 'price_1O54cBD9olOtzKPkDzJmePVy'

export const TMBD_API_KEY = '9259a96b79466485ed5c0066669458c4'
export const REACT_APP_TMBD_READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjU5YTk2Yjc5NDY2NDg1ZWQ1YzAwNjY2Njk0NThjNCIsInN1YiI6IjY1OGQ1NmQ3MWIxZjNjNThlNWZjZjM4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23TcRZjL1l44SqB0NRHDzWWM4bvliGIIGc2QyjOK-_g'
export const TMBD_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
export const REACT_APP_API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer' + REACT_APP_TMBD_READ_ACCESS_TOKEN
    }
};

