import React from 'react'

const EventNotify = () => {
    return (
        <article className='bg-layer'>
            <marquee scrollamount='5' direction="left" align="center"
                className="font-bold text-red-700 px-4 py-2 block mx-4 uppercase text-12px tablet:text-14px laptop-low::text-normal"
            >
                khoa điện tử - tin học chào mừng 93 năm ngày thành
                lập Đảng cộng sản Việt Nam (3/2/1930 - 3/2/2023)!
            </marquee>
        </article>
    )
}

export default EventNotify