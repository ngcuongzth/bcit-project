import React from 'react'
import { collegeBranches } from '../../utils/const'
import { Link } from 'react-router-dom'
import { MdOutlineVisibility } from "react-icons/md";
import './Branches.scss'
const Branches = () => {
    return (
        <section className=' px-4'>
            <h3 className='flex justify-center text-20px uppercase font-semibold text-primary mb-4 px-4 text-center'>Các chuyên ngành của khoa</h3>
            <div className='grid grid-cols-1 mobile:grid-cols-2 gap-4 laptop-low:grid-cols-4 laptop-low:gap-6 laptop-high:gap-4'>
                <div className='flex flex-col items-center justify-center bg-layer p-4 rounded'>
                    <h3 className='text-text-2 text-14px mobile:text-normal font-semibold pb-1'>Các chuyên ngành của khoa</h3>
                    <p className='text-text-2 text-12px font-medium mobile:text-14px text-justify'>Với triết lý đào tạo: "Học đi đôi với hành", Trường Cao Đẳng Kỹ Thuật Công Nghiệp đào tạo 30% lý thuyết, 70% thực hành giúp sinh viên có việc làm ngay sau khi tốt nghiệp.</p>
                </div>
                {collegeBranches.map((item) => {
                    const { id, title, thumb } = item;
                    return <div key={id} className="py-4 px-2 bg-layer rounded my-card">
                        <img className='m-auto rounded-sm hover:opacity-90 hover:cursor-pointer transition-all delay-200 ease-linear w-10/12 mobile:w-11/12 ' src={thumb} alt={title} />
                        <h3 className='font-14px font-semibold mobile:text-normal text-text-1 text-center mt-2'>{title}</h3>
                        <Link to="/" className='my-link  bg-blue-100 bg-opacity-90 font-semibold'>
                            <MdOutlineVisibility />
                            <span className="text-14px font-medium">
                                Xem chi tiết
                            </span>
                        </Link>
                    </div>
                })}
                <div className='flex flex-col items-center justify-center bg-layer p-4 rounded'>
                    <h3 className='text-text-2 text-14px mobile:text-normal font-semibold pb-1'>Các chuyên ngành của khoa</h3>
                    <p className='text-text-2 text-12px font-medium mobile:text-14px text-justify'>Với triết lý đào tạo: "Học đi đôi với hành", Trường Cao Đẳng Kỹ Thuật Công Nghiệp đào tạo 30% lý thuyết, 70% thực hành giúp sinh viên có việc làm ngay sau khi tốt nghiệp.</p>
                </div>

            </div>
        </section>
    )
}

export default Branches