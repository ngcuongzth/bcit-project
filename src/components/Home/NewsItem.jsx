import React from 'react'
import { Link } from 'react-router-dom';
const NewsItem = ({ data }) => {
    const { id, title, link, img } = data;
    return (
        <article className='h-200 laptop-low:h-300 laptop-high:h-400 relative rounded-md overflow-hidden'>
            <Link to={link} key={id} className='h-full rounded-md hover:opacity-80'>
                <img src={img} alt={title} className='h-full ' />
                <h4 className='absolute bottom-0 py-2 px-1 text-14px uppercase  bg-opacity-50 bg-gray-900 w-full  text-white font-semibold'>{title}</h4>
            </Link>
        </article>
    )
}

export default NewsItem