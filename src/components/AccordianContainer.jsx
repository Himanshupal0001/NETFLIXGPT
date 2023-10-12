import React from 'react'
import AccordianBody from './AccordianBody'
import { faq } from '../utils/dummyData'
function AccordianContainer({ Heading }) {
    return (
        <AccordianBody faq={faq} Heading={Heading} />
    )
}

export default AccordianContainer
