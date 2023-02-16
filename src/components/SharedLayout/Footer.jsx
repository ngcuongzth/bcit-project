import React from 'react'
import { HomeIcon } from '../../utils/svg'
import { footerLinks, socialLinks } from '../../utils/const'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const Footer = () => {
    return (
        <footer className=' mt-4 py-2'>
            <div className=' gap-4 pb-2 laptop-low:flex px-4'>
                <div className="laptop-low:w-4/12">
                    <article className='flex flex-col gap-1'>
                        <Link to="/">
                            <img className='h-20 m-auto' src={logo} alt="truong-cao-dang-ky-thuat-cong-nghiep" />
                            <h3 className=' text-text-1 font-semibold text-normal capitalize text-center hover:text-primary transition-all delay-200'>Trường Cao Đẳng Kỹ Thuật Công Nghiệp</h3>
                        </Link>
                        <Link to="http://www.bcit.edu.vn" className='text-14px text-primary hover:text-red-400 text-center'>
                            Website:http://www.bcit.edu.vn/
                        </Link>
                        <div className='flex gap-2 justify-center'>
                            {socialLinks.map((item) => {
                                const { id, link, icon } = item;
                                return <Link to={link} key={id}>{icon}</Link>
                            })}
                        </div>
                    </article>
                </div>
                <div className='laptop-low:w-8/12 flex gap-4 flex-col tablet:flex-row tablet:gap-8'>
                    {footerLinks.map((item) => {
                        const { colIndex, title, subLinks } = item;
                        return <article key={colIndex}>
                            <h3 className='font-medium'>{title}</h3>
                            <ul className='flex flex-col gap-1'>
                                {subLinks.map((item) => {
                                    const { id, title, link, icon } = item
                                    return <Link className='text-14px font-light flex gap-1'
                                        to={link} key={id}>
                                        {icon}
                                        <span>{title}</span>
                                    </Link>
                                })}
                            </ul>
                        </article>
                    })}
                </div>
            </div>
            <div className='flex justify-center py-2 bg-gray-700 text-white text-14px font-medium'>
                Copyright &copy;2023 IT-BCIT
            </div>
        </footer>
    )
}

export default Footer