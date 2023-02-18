import { HomeIcon, AboutIcon, EventIcon, ContactIcon, DocIcon, FacebookIcon, LinkedinIcon, YoutubeIcon, PhoneIcon, MailIcon } from "./svg"
import slide from '../assets/images/slide-1.jpg'
import branches_temp_img from '../assets/images/branches_temp_img.png'
import partner_1 from '../assets/images/doi-tac-1.png'
import partner_2 from '../assets/images/doi-tac-2.png'
import partner_3 from '../assets/images/doi-tac-3.png'
import { FcBullish, FcBriefcase, FcDepartment, FcCollaboration } from 'react-icons/fc'

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

export const counters = [
    {
        id: 1,
        data: '97.9%',
        title: 'Sinh viên có việc làm',
        icon: FcBullish
    },
    {
        id: 2,
        data: '20+',
        title: 'Giáo viên, giảng viên',
        icon: FcBriefcase
    },
    {
        id: 3,
        data: '02',
        title: 'Cơ sở đào tạo',
        icon: FcDepartment
    },
    {
        id: 4,
        data: '06',
        title: 'Chuyên ngành',
        icon: FcCollaboration
    }
]

export const collegeBranches = [
    {
        id: 1,
        title: 'Công nghệ kỹ thuật điện, điện tử',
        desc: '/',
        thumb: branches_temp_img
    },
    {
        id: 2,
        title: 'Điện công nghiệp',
        desc: '/',
        thumb: branches_temp_img
    },
    {
        id: 3,
        title: 'Điện tử dân dụng',
        desc: '/',
        thumb: branches_temp_img
    },
    {
        id: 4,
        title: 'Điện tử công nghiệp',
        desc: '/',
        thumb: branches_temp_img
    },
    {
        id: 5,
        title: 'Công nghệ thông tin',
        desc: '/',
        thumb: branches_temp_img
    },
    {
        id: 6,
        title: 'Kỹ thuật sửa chữa và lắp ráp máy tính',
        desc: '/',
        thumb: branches_temp_img
    }
]


export const partners = [
    {
        id: 1,
        title: 'Samsung',
        thumb: partner_1
    },
    {
        id: 2,
        title: 'Canon',
        thumb: partner_2
    },
    {
        id: 3,
        title: 'LG Display',
        thumb: partner_3
    },
    {
        id: 4,
        title: 'Samsung',
        thumb: partner_1
    },
    {
        id: 5,
        title: 'Canon',
        thumb: partner_2
    },
    {
        id: 6,
        title: 'LG Display',
        thumb: partner_3
    }
]