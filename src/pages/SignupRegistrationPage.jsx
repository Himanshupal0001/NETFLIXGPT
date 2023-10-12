import React from 'react'
import { netflixLogo } from '../../public/assets/netflixLogo'
import { Link } from 'react-router-dom'
import { IoLanguageOutline } from 'react-icons/io5'
import { AiOutlineCaretDown } from 'react-icons/ai'


function SignupRegistrationPage() {
    return (
        <>
            <div>
                <header className='flex sm:h-[6vw] items-center justify-between px-2 sm:px-8 border-b-[1/2px] sm:border-b-[0.1rem] py-1 border-stone-200'>
                    <Link to='/'>
                        <div>
                            <img src={netflixLogo} alt='logo' className='w-24 h-auto sm:w-52' />
                        </div>
                    </Link>
                    <div>
                        <Link to='/'>
                            <p className='sm:text-lg font-semibold hover:underline'>Sign In</p>
                        </Link>
                    </div>
                </header>
                <section className='grid max-w-[100vw] h-[70vh] sm:h-[94vh] justify-center px-6 sm:px-0'>
                    <div className='  max-h-[60vh] flex flex-col sm:items-center justify-end gap-y-1 '>
                        <div>
                            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png' alt='device-icon' className='h-auto w-64 ' />
                        </div>
                        <div className='sm:text-center text-sm leading-4 mt-6'>
                            STEP <strong>1</strong> OF <strong>3</strong>
                        </div>
                        <div className='text-[2rem] font-[500] sm:w-[50%] text-left  font-roboto'>
                            Finish setting up your account
                        </div>
                        <div className='sm:w-[40%] w-[70%] sm:text-center text-lg whitespace-pre-line leading-6 mb-4'>
                            Netflix is personalized for you.
                            Create a password to watch on any device at any time.
                        </div>
                    </div>
                    <div className='h-fit flex justify-center'>
                        <Link to='/signup/regform' className='p-2 h-16 sm:w-96 w-full sm:p-4 bg-red-600  text-white rounded-md text-center flex items-center justify-center m-auto sm:m-0'>
                            <div className='text-2xl font-bold'>Next</div>
                        </Link>
                    </div>
                </section>
            </div>

            <footer>
                <div className='py-6 flex items-start bg-gray-100 -z-20  w-full justify-center  '>
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
                            <div className='text-gray-700 flex items-center gap-x-2 p-2'>
                                <span><IoLanguageOutline /></span>
                                <span>English</span>
                                <span><AiOutlineCaretDown /></span>
                            </div>
                        </div>
                        <div className='mt-4'>Netflix - made with ♥</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SignupRegistrationPage
