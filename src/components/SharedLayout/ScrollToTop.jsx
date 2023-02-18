import React from 'react'
import { ArrowUp } from '../../utils/svg'
import { useEffect, useState } from 'react'
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        scrollTo(0, 0)
    }
    useEffect(() => {
        const event = window.addEventListener('scroll', () => {
            if (window.scrollY > 400 && !isVisible) {
                setIsVisible(true)
            }
            else {
                setIsVisible(false)
            }
        })
        return () => {
            window.removeEventListener('scroll', event)
        }
    }, [])
    return (
        <button onClick={() => {
            handleScroll()
        }}
            className={isVisible ? ' animate-[fadeInVisible]  fixed bottom-14 right-8 border-primary border rounded-md  transition-all delay-200 z-50 ease-linear hover:scale-105 hover:bg-text-2 hover:border-white hover:shadow-sm shadow-primary' : ''}
        >
            <ArrowUp />
        </button>
    )
}

export default ScrollToTop