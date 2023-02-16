import React from 'react'
import { navLinks } from '../../utils/const'
import { NavLink } from 'react-router-dom'
import { BarsUp, BarsDown } from '../../utils/svg'
import Sidebar from './Sidebar'
import { useGlobalContext } from '../../context/GlobalProvider'

const Navbar = () => {
    const { handleToggleSidebar, state } = useGlobalContext()
    return (
        <nav className=' px-4 py-3 tablet:justify-center bg-primary flex  sticky top-0 z-50 drop-shadow-md'>
            <ul className='tablet:flex gap-6 max-w-1k2 hidden  '>
                {navLinks.map((item) => {
                    const { id, title, link } = item;
                    return <NavLink key={id} to={link} className="text-12px uppercase text-white hover:text-gray-200 hover:underline transition-all delay-300 laptop-low:text-normal tablet:text-14px font-medium">
                        {title}
                    </NavLink>
                })}
            </ul>
            <div className='tablet:hidden'>
                {state.isSidebarOpen ?
                    <button onClick={() => {
                        handleToggleSidebar()
                    }} className='border-2 border-gray-300 rounded '>
                        <BarsUp />
                    </button>
                    :
                    <button className='border-2 border-gray-300 rounded ' onClick={() => {
                        handleToggleSidebar()
                    }}>
                        <BarsDown />
                    </button>
                }
            </div>
            <Sidebar />
        </nav>
    )
}


export default Navbar