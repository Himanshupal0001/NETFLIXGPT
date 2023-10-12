import React from 'react'
import React from 'react'
import { netflixLogo } from '../../public/assets/netflixLogo'
import { Link } from 'react-router-dom'
import { IoLanguageOutline } from 'react-icons/io5'
import { AiOutlineCaretDown } from 'react-icons/ai'


function SignupPlane() {
    return (
        <>
            <div>
                <header className='flex sm:h-[12vh] items-center justify-between px-2 sm:px-8 border-b-[1/2px] sm:border-b-[0.1rem] py-1 border-stone-200'>
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

                <section className='flex justify-center sm:h-[88vh] h-[70vh]'>
                    <div className='mt-24 px-4 sm:px-0 flex items-left justify-center'>
                        <div className='sm:max-w-[70%]'>
                            <div className='sm:flex justify-center mb-8'>
                                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png' alt='checkbox' className='w-12 sm:w-16' />
                            </div>
                            <div className=' text-xs mb-2 sm:text-center mt-2'>
                                STEP <strong>1</strong> OF <strong>3</strong>
                            </div>
                            <div className='text-[2rem] font-[500]   font-roboto leading-8 mb-4'>
                                Choose your plan.
                            </div>
                            <div>
                                <div className='flex items-center gap-x-2 mb-4 '>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 self-start" data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                    <span className='text-xl'>
                                        No commitments, cancel anytime.
                                    </span>
                                </div>
                                <div className='flex items-center gap-x-2 mb-4 '>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 self-start" data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                    <span className='text-xl'>
                                        Unlimited viewing on all your devices.
                                    </span>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 self-start" data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                    <span className='text-xl'>
                                        No commitments, cancel anytime.
                                    </span>
                                </div>
                            </div>
                            <div className='h-fit flex justify-center mt-4'>
                                <button className='p-2 h-16 sm:w-96 w-full sm:p-4 bg-red-600  text-white rounded-md text-center sm:flex items-center justify-center m-auto sm:m-0'>
                                    <div className='text-2xl font-bold'>Next</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <footer>
                <div className='py-6 flex items-start bg-gray-100  w-full justify-center  '>
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

export default SignupPlane
