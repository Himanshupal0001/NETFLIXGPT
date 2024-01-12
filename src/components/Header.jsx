import React, { useState } from 'react'
import { netflixLogo } from '../../public/assets/netflixLogo'
import Button from './Button'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { IoLanguageOutline } from 'react-icons/io5'
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { Link } from 'react-router-dom'
import { headerMenu, avatarModel } from '../utils/contants'
import { netflixAvatar } from '../../public/assets/netflixLogo'
import useAuth from '../hooks/useAuth'
import Model from './Model'
function Header() {

    const {
        curPath,
        isLoggedIn,
        isMouseHovering,
        user,
        handleMouseEnter,
        handleMouseLeave,
    } = useAuth();
    return (
        isLoggedIn === false ? (
            <div className='flex justify-between items-center w-full sm:w-[80%] z-10 absolute py-1 px-4 text-white'>
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
        ) :
            (
                <div className='flex justify-between items-center w-full sm:w-full z-10 absolute py-1 px-12 text-white'>
                    <div className='flex gap-3 items-center'>
                        <Link to='/browse'>
                            <img src={netflixLogo} alt='logo' className='h-12' />
                        </Link>
                        <div>
                            <ul className='md:flex gap-x-2 hidden '>
                                {
                                    headerMenu?.map((item) => {
                                        return (
                                            <Link to={item.path} key={item.id}>
                                                <li>{item.name}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='flex gap-x-4 items-center'>
                        <FiSearch size='1.5em' />
                        <p className='font-medium text-md'>Kids</p>
                        <GoBell size='1.5em' />
                        <div className={`flex gap-x-2 items-center relative`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={netflixAvatar} alt='avatar' className='rounded-sm' />
                            {
                                isMouseHovering ? <IoMdArrowDropup /> : <IoMdArrowDropdown />

                            }
                            {
                                isMouseHovering && <Model children={avatarModel} token={user.token} />
                            }
                        </div>
                    </div>
                </div >
            )
    )


}

export default Header


