import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { news } from '../../utils/const';
import NewsItem from './NewsItem';

const Slider = () => {

    return (
        <section className='mt-4 max-w-1k2 m-auto'>
            <Swiper
                grabCursor={true}
                slidesPerView={'auto'}
                navigation={true}
                keyboard={{ enabled: true, onlyInViewport: true }}
                speed={1500}
                slidesPerGroupAuto={true}
                modules={[Navigation, Pagination, Scrollbar, Keyboard, Mousewheel]}
                loop={true}
                autoplay={true}
            >
                {
                    news.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <NewsItem data={item} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    )
}

export default Slider