import React, { useEffect, useState } from 'react'
import { netflixLogo } from '../../public/assets/netflixLogo'
import Button from './Button'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { IoLanguageOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
function Header() {
    const [curPath, setCurPath] = useState('');
    const location = useLocation();
    //console.log(location.pathname)
    useEffect(() => {
        if (location) {
            setCurPath(location.pathname);
        }
    }, [])

    return (
        <div className='flex justify-between items-center w-full sm:w-[80%] z-10 absolute py-1 px-4'>
            <div className='h-full overflow-hidden'>
                <Link to='/'>
                    <img src={netflixLogo} alt='logo' className='w-32 h-auto sm:w-48' />
                </Link>
            </div>
            <div className='flex gap-x-6'>
                <div className=' border-slate-600 border-solid border-2 rounded-md py-1 px-2'>
                    <div className='text-white flex items-center gap-x-2'>
                        <span><IoLanguageOutline color='#fff' /></span>
                        <span className='hidden sm:block'>English</span>
                        <span><AiOutlineCaretDown color='#fff' /></span>
                    </div>
                </div>
                {
                    curPath !== '/login' ? (
                        <Link to='/login'>
                            <Button name='Sign In' />
                        </Link>
                    ) : null
                }

            </div>
        </div >
    )
}

export default Header
