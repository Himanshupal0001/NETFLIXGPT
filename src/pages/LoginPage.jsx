import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { netfliexHeroBanner } from '../../public/assets/netflixLogo'
import { Link, useNavigate } from 'react-router-dom'
import { IoLanguageOutline } from 'react-icons/io5';
import { AiOutlineCaretDown } from 'react-icons/ai'
import { checkValidData } from '../utils/validate';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/authSlice';
import Loader from '../components/Loader';
//import usePaymentWall from '../hooks/usePaymentWall';


function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    //const { stripeId, payment } = usePaymentWall();
    //console.log(stripeId, payment);

    const handleButtonClick = () => {
        setIsLoading(true)
        const email = emailRef.current.value
        const password = passRef.current.value;

        //validate form input
        const errmsg = checkValidData(email, password);
        if (errmsg) {
            setErrorMessage(errmsg);
            return
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then(
                    (userCredential) => {
                        const user = userCredential.user;
                        //console.log(user);
                        const { accessToken, uid } = user;
                        if (accessToken, uid) {
                            dispatch(addUser({ token: accessToken, uid: uid }))
                        }
                        navigate('/browse');
                        // if (stripeId && payment) {
                        //     navigate('/browse')
                        // }
                        // else {
                        //     navigate('/signup/planform')
                        // }
                    }
                )
                .catch(err => {
                    const errorCode = err.code;
                    const errMsg = err.message;
                    console.log(errorCode + errMsg);
                    setErrorMessage('Invalid username or password');
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
        //console.log(errmsg)
    }
    //console.log(errorMessage)

    return (
        <div className='flex flex-col items-center'>
            <Header />
            <div className='sm:max-h-screen overflow-hidden relative'>
                <Link to='/'>
                    <img src={netfliexHeroBanner} alt='hero banner' className='h-[80vh] object-fill sm:h-full' />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black text-white flex items-center justify-center sm:px-0">
                    <form className='bg-stone-900 p-12 w-screen sm:w-[30rem] text-gray-400' onSubmit={e => e.preventDefault()}>
                        <div className='text-[2rem] font-medium mb-6 text-white'> Sign In</div>
                        <div className='mb-6'>
                            <div className='flex flex-col mb-2'>
                                <label htmlFor='email' className='mb-1'>Email</label>
                                <input type='text' id='email' ref={emailRef} placeholder='Email or phone number' className='p-3 rounded-md bg-stone-700 text-lg'></input>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='password' className='mb-1'>Password</label>
                                <input type='password' ref={passRef} placeholder='Password' id='password' className='p-3 rounded-md bg-stone-700 text-lg'></input>
                            </div>
                        </div>

                        <div className='text-red-500 mb-2'>{errorMessage}</div>

                        <div className='flex justify-center' onClick={handleButtonClick}>
                            <button className=' p-3 bg-red-600 text-white w-full font-medium rounded-md' type='submit'>{isLoading ? <Loader /> : 'Sign in'}</button>
                        </div>
                        <div className='flex items-center justify-between text-sm mt-4'>
                            <div className='flex items-center gap-x-2'>
                                <input type='checkbox' id='remember' className='h-4 w-4'></input>
                                <label htmlFor='remember' className='mb-1'>Remember me?</label>
                            </div>
                            <div className='cursor-pointer hover:underline'>
                                Need help?
                            </div>
                        </div>
                        <div className='mt-10 text-gray-500'>
                            New to Netflix?
                            <Link to='/'>
                                <span className='text-white hover:underline cursor-pointer'> Sign up now</span>
                            </Link>
                        </div>
                        <div className='text-gray-400 text-sm mt-4'>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-500 cursor-pointer hover:underline'> Learn more.</span>
                        </div>
                    </form>
                </div>
            </div>

            <div className='py-6 flex items-start bg-black -z-20  w-full justify-center border-t-4 border-gray-800 '>
                <div className='w-[80%]   text-stone-400'>
                    <div className='mb-4'>Questions? Call 800-032-0481</div>
                    <div className='grid grid-cols-2 justify-between sm:grid-cols-4 gap-x-3 text-medium'>
                        <span>FAQ</span>
                        <span>Help Center</span>
                        <span>Accounts</span>
                        <span>Media Center</span>
                        <span>Investor Relations</span>
                        <span>Jobs</span>
                        <span>Radeem Gift Cards</span>
                        <span>Buy Gift Cards</span>
                        <span>Ways to Watch</span>
                        <span>Terms to Use</span>
                        <span>Privacy</span>
                        <span>Cookies Prefrences</span>
                        <span>Corporate Information</span>
                        <span>Contact Us</span>
                        <span>Speed Test</span>
                        <span>Legal Notices</span>
                        <span>Only on Netflix</span>
                    </div>
                    <div className=' border-slate-600 border-solid border-2 rounded-md  px-2 mt-4 w-fit'>
                        <div className='text-white flex items-center gap-x-2'>
                            <span><IoLanguageOutline color='#fff' /></span>
                            <span>English</span>
                            <span><AiOutlineCaretDown color='#fff' /></span>
                        </div>
                    </div>
                    <div className='mt-4'>Netflix - made with ♥</div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
