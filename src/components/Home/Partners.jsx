import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { partners } from '../../utils/const';
import Partner from './Partner';

const Partners = () => {
    return (
        <section className='px-4 py-2 my-8'>
            <h3 className='flex justify-center text-20px uppercase font-semibold text-primary mb-4 px-4'>Đối tác</h3>
            <Swiper
                loop={true}
                autoplay={true}
                grabCursor={true}
                slidesPerView={4}
                navigation={true}
                keyboard={{ enabled: true, onlyInViewport: true }}
                speed={1500}
                modules={[Navigation, Pagination, Scrollbar, Keyboard, Mousewheel]}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetweenView: 10
                    },
                    768: {
                        slidesPerView: 4,
                    },
                }}
            >
                {partners.map((item) => {
                    const { id } = item;
                    return <SwiperSlide key={id}>
                        <Partner data={item} />
                    </SwiperSlide>
                })}
            </Swiper>
        </section>
    )
}

export default Partners