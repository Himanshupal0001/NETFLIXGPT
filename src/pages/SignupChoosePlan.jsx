import React, { useState } from 'react'
import { netflixLogo } from '../../public/assets/netflixLogo'
import { Link } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { IoLanguageOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import useSignout from '../hooks/useSignout';
import { app } from '../utils/firebase';
import { NETFLIX_BASIC_PRICEID, NETFLIX_STANDARD_PRICEID, NETFLIX_PREMIUM_PRICEID } from '../utils/utils';
import { getCheckoutUrl } from '../utils/stripeCheckout';
import Loader from '../components/Loader'
function SignupChoosePlan() {
    const { user } = useSelector(store => store.auth);
    const [plan, setPlan] = useState(NETFLIX_PREMIUM_PRICEID);
    const handleSignout = useSignout();
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        setIsLoading(true);
        const priceId = plan;
        const checkoutUrl = await getCheckoutUrl(app, priceId);
        if (checkoutUrl) {
            window.open(checkoutUrl, '_self');
            setIsLoading(false)
        }
    }
    return (
        <div>
            <header className='flex sm:h-[12vh] items-center justify-between px-2 sm:px-8 border-b-[1/2px] sm:border-b-[0.1rem] py-1 border-stone-200'>
                <Link to='/'>
                    <div>
                        <img src={netflixLogo} alt='logo' className='w-24 h-auto sm:w-52' />
                    </div>
                </Link>
                <div onClick={() => handleSignout(user?.token)}>
                    <p className='sm:text-lg font-semibold hover:underline'>{user.token ? 'Sign out' : 'Sign in'}</p>
                </div>
            </header>
            <section className='h-screen flex justify-center mb-40'>
                <div className=' w-full sm:max-w-[60%] h-fit p-6'>
                    <div className=' text-xs inline-block'>
                        STEP <strong>2</strong> OF <strong>3</strong>
                    </div>
                    <div className='text-[2rem] font-[500]   font-roboto leading-8 mb-4'>
                        Choose the plan that’s right for you
                    </div>
                    <div>
                        <div className='flex items-center gap-x-2 mb-2 '>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 self-start" data-name="Checkmark" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                            <span className='text-xl'>
                                No commitments, cancel anytime.
                            </span>
                        </div>
                        <div className='flex items-center gap-x-2 mb-2 '>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 self-start" data-name="Checkmark" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                            <span className='text-xl'>
                                Unlimited viewing on all your devices.
                            </span>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 self-start" data-name="Checkmark" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                            <span className='text-xl'>
                                No commitments, cancel anytime.
                            </span>
                        </div>
                    </div>
                    <form onSubmit={e => e.preventDefault()}>

                        <table className='w-fit sm:w-full text-stone-500 font-medium'>
                            <thead className='sticky top-0 bg-white'>
                                <tr>
                                    <th className='hidden sm:block sm:w-[50%]'></th>
                                    <th>
                                        <div className='py-4 px-2 sm:px-4 flex items-center justify-center'>
                                            <label htmlFor='basic' className={`h-[16vmin] w-[25vmin] sm:w-[16vmin] ${plan !== 'basic' ? 'bg-red-400' : 'bg-red-500'} relative text-white flex justify-center items-center font-medium`}>Basic
                                                <input type='radio' name='payment_plan' id='basic' value={NETFLIX_BASIC_PRICEID} className='hidden' checked={plan === 'basic'}
                                                    onChange={e => setPlan(NETFLIX_BASIC_PRICEID)}
                                                >
                                                </input>
                                                <span className={`h-4 w-4 -bottom-3 absolute  border-l-[15px] border-r-[15px] border-l-transparent border-r-transparent border-t-[20px] ${plan !== 'basic' ? 'border-red-400' : 'border-red-500'}`}></span>
                                            </label>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='py-4 px-2 sm:px-4 flex items-center justify-center'>
                                            <label htmlFor='standard' className={`h-[16vmin] w-[25vmin] sm:w-[16vmin] ${plan !== 'standard' ? 'bg-red-400' : 'bg-red-500'} relative text-white flex justify-center items-center font-medium`}>Standard
                                                <input type='radio' name='payment_plan' id='standard' value={NETFLIX_STANDARD_PRICEID} className='hidden' checked={plan === 'standard'}
                                                    onChange={e => setPlan(NETFLIX_STANDARD_PRICEID)}>
                                                </input>
                                                <span className={`h-4 w-4 -bottom-3 absolute  border-l-[15px] border-r-[15px] border-l-transparent border-r-transparent border-t-[20px] ${plan !== 'standard' ? 'border-red-400' : 'border-red-500'}`}></span>
                                            </label>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='py-4 px-2 sm:px-4 flex items-center justify-center'>
                                            <label htmlFor='premium' className={`h-[16vmin] w-[25vmin] sm:w-[16vmin] ${plan !== 'premium' ? 'bg-red-400' : 'bg-red-500'} relative text-white flex justify-center items-center font-medium`}>Premium
                                                <input type='radio' name='payment_plan' id='premium' value={NETFLIX_PREMIUM_PRICEID} className='hidden' checked={plan}
                                                    onChange={e => setPlan(NETFLIX_PREMIUM_PRICEID)}>
                                                </input>
                                                <span className={`h-4 w-4 -bottom-3 absolute  border-l-[15px] border-r-[15px] border-l-transparent border-r-transparent border-t-[20px] ${plan !== 'premium' ? 'border-red-400' : 'border-red-500'}`}></span>
                                            </label>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className=' sm:hidden'>
                                    <td className='sm:py-3 text-center text-sm pt-2' colSpan='4'>Video and sound Quality</td>
                                </tr>
                                <tr className='border-b-[0.1em]'>
                                    <td className='sm:py-3 hidden sm:block'>Video and sound Quality</td>
                                    <td className={`py-3 text-center ${plan === NETFLIX_BASIC_PRICEID ? 'text-red-600' : null}`}>Good</td>
                                    <td className={`text-center ${plan === NETFLIX_STANDARD_PRICEID ? 'text-red-600' : null}`}>Better</td>
                                    <td className={`text-center ${plan === NETFLIX_PREMIUM_PRICEID ? 'text-red-600' : null}`}>Best</td>
                                </tr>

                                <tr className=' sm:hidden'>
                                    <td className='sm:py-3 text-center text-sm pt-2' colSpan='4'>Resolution</td>
                                </tr>
                                <tr className='border-b-[0.1em]'>
                                    <td className='py-3 hidden sm:block'>Resolution</td>
                                    <td className={`py-3 text-center ${plan === NETFLIX_BASIC_PRICEID ? 'text-red-600' : null}`}>720p</td>
                                    <td className={`text-center ${plan === NETFLIX_STANDARD_PRICEID ? 'text-red-600' : null}`}>1080p</td>
                                    <td className={`text-center ${plan === NETFLIX_PREMIUM_PRICEID ? 'text-red-600' : null}`}>4K+HDR</td>
                                </tr>

                                <tr className=' sm:hidden'>
                                    <td className='sm:py-3 text-center text-sm pt-2' colSpan='4'>Devices your household can watch at the same time</td>
                                </tr>
                                <tr className='border-b-[0.1em]'>
                                    <td className='py-3 hidden sm:block'>Devices your household can watch at the same time</td>
                                    <td className={`py-3 text-center ${plan === NETFLIX_BASIC_PRICEID ? 'text-red-600' : null}`}>1</td>
                                    <td className={`text-center ${plan === NETFLIX_STANDARD_PRICEID ? 'text-red-600' : null}`}>2</td>
                                    <td className={`text-center ${plan === NETFLIX_PREMIUM_PRICEID ? 'text-red-600' : null}`}>4</td>
                                </tr>

                                <tr className=' sm:hidden'>
                                    <td className='sm:py-3 text-center text-sm pt-2' colSpan='4'>Monthly price</td>
                                </tr>
                                <tr className=''>
                                    <td className='py-3 hidden sm:block'>Monthly price</td>
                                    <td className={`py-3 text-center ${plan === NETFLIX_BASIC_PRICEID ? 'text-red-600' : null}`}>AED29</td>
                                    <td className={`text-center ${plan === NETFLIX_STANDARD_PRICEID ? 'text-red-600' : null}`}>AED49</td>
                                    <td className={`text-center ${plan === NETFLIX_PREMIUM_PRICEID ? 'text-red-600' : null}`}>AED56</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='text-xs mt-3'>
                            <span>
                                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions.
                                See our Terms of Use for more details.
                                Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.
                            </span>
                            <div>
                                <span className='text-red-500'>Note: </span>
                                <span className='text-blue-700'>Please add test card [4242 4242 4242 4242]. Add others details rendomly. </span>
                            </div>
                        </div>
                        <div className='flex justify-center items-center text-2xl font-semibold text-white mt-6' onClick={handleCheckout}>
                            <button type='submit' className='bg-red-600 hover:bg-red-500 sm:w-[50%] rounded-md px-6 py-4 w-full'>
                                {
                                    isLoading ? <Loader /> : 'Next'
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </section >

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

        </div >
    )
}

export default SignupChoosePlan
