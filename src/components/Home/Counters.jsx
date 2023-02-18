import React from 'react'
import { counters } from '../../utils/const'
const Counters = () => {
    return (
        <section className='my-8 grid grid-cols-1 mobile:grid-cols-2 laptop-low:grid-cols-4 px-4 py-8 gap-4 laptop-low:gap-6 laptop-high:gap-4 bg-layer '>
            {counters.map((item) => {
                const { id, icon: Icon, title, data } = item;
                return <div className='flex items-center flex-col gap-2 bg-white px-2 py-4 rounded' key={id}>
                    <Icon className='text-80px mobile:text-60px mt-2' />
                    <span className='flex gap-1 flex-col'>
                        <span className=' font-bold text-text-1 text-center'>{data}</span>
                        <p className='text-center font-medium text-text-2'>{title}</p>
                    </span>
                </div>
            })}
        </section>
    )
}

export default Counters