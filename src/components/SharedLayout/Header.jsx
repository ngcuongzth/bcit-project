import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, FacebookIcon } from '../../utils/svg';
const Header = () => {
    return (
        <header className='mobile:header-h max-w-1k2 mx-auto px-4 flex justify-between  mb-4 '>
            <div className="h-full flex items-center">
                <Link to="/" className='h-full flex py-1 items-center'>
                    <img src={logo} alt="bcit-logo" className='h-16 laptop-low:h-24' />
                </Link>
                <div className="pl-4 flex flex-col justify-center">
                    <div className="border-b-2 pt-2">
                        <h3 className="uppercase text-primary font-semibold">Trường Cao Đẳng Kỹ Thuật Công Nghiệp</h3>
                        <h3 className="uppercase text-primary">College Of Industrial Techniques</h3>
                    </div>
                    <h1 className="uppercase font-semibold text-primary drop-shadow-h1-custom">Khoa Điện Tử - Tin Học</h1>
                </div>
            </div>
            <div className='hidden laptop-low:block pt-2'>
                <a className="flex items-center  gap-1" href="tel:0000.000.000">
                    <PhoneIcon />
                    <span className='text-normal'>0000.000.000</span>
                </a>
                <a className=" items-center flex gap-1" href="mailto:contact@bcit.com">
                    <MailIcon />
                    <span className='text-normal'>contact@bcit.com</span>
                </a>
                <a className=" items-center flex gap-1" href="#">
                    <FacebookIcon />
                    <span className='text-normal'>Khoa Điện Tử-Tin Học</span>
                </a>
            </div>
        </header>
    )
}

export default Header