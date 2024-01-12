import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useSignout from '../hooks/useSignout'

const Model = ({ children, token }) => {
    const [hasToken, setHasToken] = useState(null);
    useEffect(() => {
        if (token) {
            setHasToken(token)
        }
    }, [token, hasToken])
    const handleSignOut = useSignout();
    return (
        <div className='absolute mt-4  w-52  top-8 right-0 border-2 sm:mt-0  text-white bg-black '>
            {
                children.map((item, index) => {
                    return (
                        <div className='flex items-center gap-x-4 py-2 px-2 hover:underline cursor-pointer' key={index}>
                            <div>{item.content}</div>
                            <Link to={item.path} >
                                <p className='text-sm'>{item?.name}</p>
                            </Link>
                        </div>
                    )
                })
            }
            <div className='flex items-center justify-center border-t-[0.3px] border-slate-500 py-2 text-sm hover:underline cursor-pointer mt-2'
                onClick={() => handleSignOut(hasToken)}
            >
                Sign out of Netflix
            </div>
        </div>
    )
}

export default Model
