import React from 'react'

function Button({ name }) {
    return (
        <div className='bg-red-600 text-white py-1 px-3 rounded-md font-poppins text-md font-semibold hover:bg-red-700 cursor-pointer'>
            {name}
        </div>
    )
}

export default Button