import React, { useState } from 'react'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
function Accordian({ faq }) {
    const [open, setOpen] = useState(false);
    const { q, ans } = faq;


    const handleOpen = () => {
        setOpen(!open);
        console.log(open)
    }
    return (
        <div className='mb-4'>
            <div className='w-full bg-stone-800 p-6 text-2xl flex items-center justify-between cursor-pointer hover:bg-stone-700' onClick={() => handleOpen()}>
                <span>{q}</span>
                <span>{
                    open ? <AiOutlineClose color='#fff' size='1.2em' /> : <AiOutlinePlus color='#fff' size='1.2em' />}
                </span>
            </div>
            {
                open && (
                    <div className='w-full bg-stone-800 p-6 text-2xl mt-[.1rem] whitespace-pre-line'>{ans}</div>
                )
            }

        </div>
    )
}

export default Accordian

