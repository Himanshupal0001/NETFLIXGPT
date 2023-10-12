import React from 'react'
import Header from '../components/Header';
import { netfliexHeroBanner } from '../../public/assets/netflixLogo'
import { BsChevronRight } from 'react-icons/bs';
import { AiOutlineCaretDown } from 'react-icons/ai'
import { IoLanguageOutline } from 'react-icons/io5';
import AccordianContainer from '../components/AccordianContainer';
import { Link } from 'react-router-dom';

function SignupLandingPage() {
    return (
        <>
            <div className='flex flex-col items-center'>
                <Header />
                <div className='sm:max-h-screen overflow-hidden relative'>
                    <Link to='/'>
                        <img src={netfliexHeroBanner} alt='hero banner' className='h-[70vh] object-fill sm:h-full' />
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black text-white flex items-center justify-center px-8 sm:px-0">
                        <div className='grid mt-36 sm:mt-0'>
                            <span className='font-bold text-[2rem] sm:text-[3rem] text-center '>
                                Unlimited movies, TV shows, and more
                            </span>
                            <span className='flex justify-center text-lg mt-2 sm:text-[1.6rem] sm:font-medium'>
                                Watch anywhere. Cancel anytime.
                            </span>
                            <span className='flex justify-center text-xl mt-4'>
                                Ready to watch? Enter your email to create or restart your membership.
                            </span>
                            <div className='sm:flex sm:justify-center sm:gap-x-4 mt-4'>
                                <input type='text' placeholder='Email address' className='p-4 bg-black text-white w-full sm:w-1/2 mb-2 sm:mb-0 border-2 border-slate-600 border-solid rounded-md'></input>
                                <Link to='/signup/registration' className='p-2 sm:p-4 bg-red-600 w-1/2 sm:w-1/5 rounded-md flex items-center justify-around m-auto sm:m-0'>
                                    < >
                                        <div className='text-xl font-bold'>Get Started</div>
                                        <div><BsChevronRight color='#fff' /></div>
                                    </>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[60vh] sm:h-[70vh] flex items-start bg-black -z-20  w-full text-white justify-center border-t-4 border-gray-800'>
                    <div className='w-[80%] h-full sm:flex justify-between items-center mt-12 sm:mt-0'>
                        <div className=''>
                            <div className='font-bold text-[2rem] sm:text-[3rem] text-center sm:text-left '>Enjoy on your TV</div>
                            <div className='sm:text-2xl text-center sm:text-left sm:mt-2'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
                        </div>
                        <div>
                            <div className='relative'>
                                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='tv' className='w-full' />
                                <div className='absolute overflow-hidden top-[20%] left-10 sm:left-16 -z-10 '>
                                    <video autoPlay loop muted className='object-contain overflow-clip w-[85%]' >
                                        <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[70vh] flex items-start bg-black -z-20  w-full text-white justify-center border-t-4 border-gray-800'>
                    <div className='w-[80%] sm:flex justify-between items-center flex-row-reverse mt-12 sm:mt-0'>
                        <div>
                            <div className='font-bold text-[2rem] sm:text-[3rem] text-center sm:text-left'>Download your shows to watch offline</div>
                            <div className=' sm:text-2xl text-center sm:text-left sm:mt-2'>Save your favorites easily and always have something to watch.</div>
                        </div>
                        <div>
                            <div className='relative flex justify-center'>
                                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='mobile' className='w-full' />

                                <div className='absolute max-w-[80%] bg-black border-solid border-gray-400 border-2 p-1 sm:px-2 sm:py-2 bottom-2 sm:bottom-8 flex gap-x-4 items-center rounded-lg'>
                                    <div>
                                        <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png' alt='poster'
                                            className='object-fit w-8 sm:w-12' />
                                    </div>
                                    <div className='flex'>
                                        <div className='w-44'>
                                            <div className='font-bold text-lg'>Stranger Things</div>
                                            <div className='text-sm text-blue-500'>Downloading...</div>
                                        </div>
                                        <div>
                                            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' alt='download-icon' className='w-12' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[60vh] sm:h-[70vh] flex items-start bg-black -z-20  w-full text-white justify-center border-t-4 border-gray-800'>
                    <div className='w-[80%] sm:flex justify-between items-center mt-12 sm:mt-0'>
                        <div className=''>
                            <div className='font-bold text-[2rem] sm:text-[3rem] text-center sm:text-left '>Watch everywhere</div>
                            <div className=' sm:text-2xl text-center sm:text-left sm:mt-2'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
                        </div>
                        <div>
                            <div className='relative'>
                                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt='tv' className='w-full' />
                                <div className='absolute overflow-hidden top-[20%] left-10 sm:left-16 -z-10 '>
                                    <video autoPlay loop muted className='object-contain overflow-clip w-[85%]' >
                                        <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v' type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[70vh] flex items-start bg-black -z-20  w-full text-white justify-center border-t-4 border-gray-800'>
                    <div className='w-[80%] sm:flex justify-between items-center flex-row-reverse mt-12'>
                        <div>
                            <div className='font-bold text-[2rem] sm:text-[3rem] text-center sm:text-left'>Create profiles for kids</div>
                            <div className=' sm:text-2xl text-center sm:text-left sm:mt-2'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</div>
                        </div>
                        <div>
                            <div className='relative flex justify-center'>
                                <img src='https://occ-0-8002-903.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55' alt='mobile' className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            <div className='py-6 flex items-start bg-black -z-20  w-full text-white justify-center border-t-4 border-gray-800 '>
                <div className='w-[80%]  mt-6'>
                    <AccordianContainer Heading='Frequently Asked Questions' />
                    <div className='text-center sm:text-2xl pt-4'>Ready to watch? Enter your email to create or restart your membership.</div>
                    <div className='sm:flex justify-center gap-x-4 mt-4'>
                        <input type='text' placeholder='Email address' className='p-4 bg-black text-white w-full sm:w-1/3 mb-2 sm:mb-0 border-2 border-slate-600 border-solid rounded-md'></input>
                        <Link to='/signup/registration' className='p-2 sm:p-4 bg-red-600 w-1/2 sm:w-1/5 rounded-md flex items-center justify-around m-auto sm:m-0'>
                            < >
                                <div className='text-xl font-bold'>Get Started</div>
                                <div><BsChevronRight color='#fff' /></div>
                            </>
                        </Link>
                    </div>
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
        </>

    )
}

export default SignupLandingPage

/*

 <div>
                            <ul>
                                <li>FAQ</li>
                                <li>Account</li>
                                <li>Investor Relations</li>
                                <li>Radeem Gift Cards</li>
                                <li>Ways to Watch</li>
                            </ul>
                            <ul>
                            <li>Privacy</li>
                            </ul>
                        </div>*/


