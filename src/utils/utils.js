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