import React from 'react'
import News from '../components/Home/News'
import Counters from '../components/Home/Counters'
import Branches from '../components/Home/Branches'
import Partners from '../components/Home/Partners'
const HomePage = () => {
    return (
        <main className='min-h-screen'>
            <News />
            <Counters />
            <Branches />
            <Partners />
        </main>
    )
}

export default HomePage