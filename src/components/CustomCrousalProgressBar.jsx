import React from 'react'

function CustomCrousalProgressBar({ IndicatorCount, curIndex }) {
    const progressIndicators = [];

    for (let i = 0; i < IndicatorCount; i++) {
        const isActive = i === curIndex;
        const indicatorClassName = `h-0.5 w-5 mx-[0.7px] ${isActive ? 'bg-gray-200' : 'bg-gray-500'}`;

        progressIndicators.push(<div key={i} className={indicatorClassName}></div>);
    }

    return <div className='flex'>{progressIndicators}</div>;
}

export default CustomCrousalProgressBar;

