import React from 'react'
import contact_thumb from '../../assets/images/contact-thumb.jpg'
import './FormQA.scss'
import { TbSend } from "react-icons/tb";
import { useState } from 'react';
import { useGlobalContext } from '../../context/GlobalProvider';
const FormQA = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const { handleSubmitQA } = useGlobalContext()
    const arrCheck = [name, email, tel, content, title]

    return (
        <section className='px-4 gap-4 my-6'>
            <h3 className='text-primary font-semibold uppercase text-center'>Hãy để lại điều gì đó nếu bạn thắc mắc</h3>
            <div className='grid grid-cols-1 tablet:flex tablet:items-center'>
                <img className='w-11/12 my-0 mx-auto py-2 tablet:w-7/12' src={contact_thumb} alt="contact-thumb" />
                <form onSubmit={(e) => e.preventDefault()} className='py-4 tablet:w-5/12'>
                    <div className='my-field'>
                        <label className='my-label' htmlFor="name">Họ và tên</label>
                        <input value={name} onChange={(e) => setName(e.target.value.trim())} className='my-input' type="text" id='name' placeholder='Nhập vào họ tên' />
                    </div>
                    <div className='my-field'>
                        <label className='my-label' htmlFor="tel">Số điện thoại</label>
                        <input value={tel} onChange={(e) => setTel(e.target.value.trim())} className='my-input' type="tel" id="tel" placeholder="Nhập vào số điện thoại" />
                    </div>
                    <div className='my-field'>
                        <label className='my-label' htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value.trim())} className='my-input' type="email" id="email" placeholder="Nhập vào email" />
                    </div>
                    <div className='my-field'>
                        <label className='my-label' htmlFor="title">Bạn cần trợ giúp điều gì?</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value.trim())} className='my-input' type="title" id="title" placeholder="Câu hỏi của bạn" />
                    </div>
                    <div className='my-field'>
                        <label className='my-label' htmlFor="content">Nội dung?</label>
                        <textarea value={content} onChange={(e) => setContent(e.target.value.trim())} rows="2" className='my-input' type="content" id="content" placeholder="Nhập vào nội dung câu hỏi" />
                    </div>
                    <div className='flex justify-end'>
                        <button type='submit' className='my-button bg-primary' onClick={() => {
                            let acceptSend = false;
                            arrCheck.map((item) => {
                                if (item.trim().length === 0) {
                                    acceptSend = false;
                                    return;
                                }
                                else {
                                    acceptSend = true;
                                }
                            })
                            if (acceptSend) {
                                const dataPayload = {
                                    name, email, tel, content, title
                                }
                                handleSubmitQA(dataPayload)
                            }
                            else {
                                alert('Yêu cầu nhập đủ thông tin.')
                            }
                        }}>
                            <TbSend className='text-layer' />
                            <span className='text-12px'>Gửi đi</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormQA