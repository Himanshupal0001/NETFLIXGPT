import React from 'react'
import Accordian from './Accordian'

function AccordianBody({ faq, Heading }) {
    return (
        <div>
            <div className='text-[2rem] sm:text-[3rem] text-center font-bold mb-4'>{Heading}</div>
            {
                faq?.map((q, index) => (<Accordian faq={q} key={index} />))
            }
        </div>
    )
}

export default AccordianBody
