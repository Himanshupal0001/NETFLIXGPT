// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//import { useDispatch } from "react-redux";
//import { removeUser } from "../redux/authSlice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3kjxR0rDHrtdeinhWqs2x9-OwGaEePAw",
    authDomain: "netflixgpt-8b29c.firebaseapp.com",
    projectId: "netflixgpt-8b29c",
    storageBucket: "netflixgpt-8b29c.appspot.com",
    messagingSenderId: "165828467354",
    appId: "1:165828467354:web:1f024bd45d28f13dcd1d23",
    measurementId: "G-LX3F5VLSH0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

//const disptach = useDispatch();
//export const signOut = () => signOut(auth).then(() => disptach(removeUser())).catch(err => console.log(err))