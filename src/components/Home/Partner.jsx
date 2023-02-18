import React from 'react'

const Partner = ({ data }) => {
    const { thumb, title } = data;
    return (
        <div className='py-4 px-2'>
            <img className='h-100 w-full ' src={thumb} alt={title} />
            <h3 className='text-primary font-semibold text-center pt-4 text-normal mobile:text-18px tablet:text-20px'>{title}</h3>
        </div>
    )
}

export default Partner