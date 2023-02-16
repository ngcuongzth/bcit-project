import { HomeIcon, AboutIcon, EventIcon, ContactIcon, DocIcon, FacebookIcon, LinkedinIcon, YoutubeIcon, PhoneIcon, MailIcon } from "./svg"
import slide from '../assets/images/slide-1.jpg'
export const navLinks = [
    {
        id: 1,
        title: 'Trang chủ',
        link: '/',
        icon: <HomeIcon />
    },
    {
        id: 2,
        title: 'Giới thiệu',
        link: '/about',
        icon: <AboutIcon />
    }, {
        id: 3,
        title: 'Sự kiện',
        link: '/event',
        icon: <EventIcon />
    },
    {
        id: 4,
        title: 'Tài liệu học tập',
        link: '/documents',
        icon: <DocIcon />
    },
    {
        id: 5,
        title: 'Liên hệ',
        link: '/contact',
        icon: <ContactIcon />
    }
]

export const news = [
    {
        id: 1,
        title: '1- this is a title',
        link: '/',
        img: slide
    },
    {
        id: 2,
        title: '2- this is a title',
        link: '/',
        img: slide
    },
    {
        id: 3,
        title: '3- this is a title',
        link: '/',
        img: slide
    },
    {
        id: 4,
        title: '4- this is a title',
        link: '/',
        img: slide
    }
]

export const footerLinks = [
    {
        colIndex: 1,
        title: 'Khoa Điện Tử-Tin Học',
        subLinks: [
            {
                id: 1,
                title: 'Trụ sở chính: Số 202, Trần Nguyên Hãn, TP.Bắc Giang, tỉnh Bắc Giang',
                icon: <HomeIcon />
            },
            {
                id: 2,
                title: 'Cơ sở 2: xã Tân Dĩnh, huyện Lạng Giang, tỉnh Bắc Giang',
                icon: <HomeIcon />
            },
            {
                id: 3,
                title: 'ĐT: 0000.000.000',
                icon: <PhoneIcon />
            },
            {
                id: 4,
                title: 'Email: contact@gmail.com',
                icon: <MailIcon />
            }
        ]
    },
    {
        colIndex: 2,
        title: 'Danh mục',
        subLinks: [
            {
                id: 1,
                title: 'Trang chủ',
                link: '/',
                icon: <HomeIcon />
            },
            {
                id: 2,
                title: 'Giới thiệu',
                link: '/about',
                icon: <AboutIcon />
            },
            {
                id: 3,
                title: 'Tin tức',
                link: '/event',
                icon: <EventIcon />
            },
            {
                id: 4,
                title: 'Tài liệu',
                link: '/documents',
                icon: <DocIcon />
            },
            {
                id: 5,
                title: 'Liên hệ',
                link: '/contact',
                icon: <ContactIcon />
            }
        ]
    }

]

export const socialLinks = [
    {
        id: 1,
        title: 'facebook',
        link: '/',
        icon: <FacebookIcon />
    },
    {
        id: 2,
        title: 'linkedin',
        link: '/',
        icon: <LinkedinIcon />
    },
    {
        id: 3,
        title: 'youtube',
        link: '/',
        icon: <YoutubeIcon />
    }
]