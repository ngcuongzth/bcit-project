import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import EventNotify from './EventNotify'

const SharedLayout = () => {
    return (
        <main className='bg-bg-custom min-h-screen max-w-1k6 m-auto'>
            <Header />
            <Navbar />
            <EventNotify />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </main >
    )
}



export default SharedLayout