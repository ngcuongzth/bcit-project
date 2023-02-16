import React from 'react'
import { navLinks } from '../../utils/const'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context/GlobalProvider'
const Sidebar = () => {
    const { state } = useGlobalContext()
    return (
        // <aside className='tablet:hidden absolute  bg-layer top-101percent border border-text-2 rounded-lg min-w-300px'>
        <aside className={`${state.isSidebarOpen ? 'z-10 block tablet:hidden absolute  bg-layer top-101percent border border-text-2 rounded-lg min-w-300px' : 'hidden'}`}>
            <ul className='flex flex-col py-4'>
                {navLinks.map((item) => {
                    const { id, link, title, icon } = item;
                    return <NavLink className="text-14px tablet:text-normal px-2 py-2 text-text-1  transition-all delay-100 capitalize hover:bg-blue-400 hover:text-white font-medium flex items-center gap-2" key={id} to={link}>
                        {icon}
                        {title}
                    </NavLink>
                })}
            </ul>
        </aside>
    )
}

export default Sidebar