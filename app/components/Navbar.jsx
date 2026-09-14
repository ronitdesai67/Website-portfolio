import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    
    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full'/>
            </div>
            
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300 ${
                isScroll 
                ? "py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
                : "py-4 bg-transparent"
            }`}>
                <a href="#top">
                    <Image src={assets.logo} alt="" className={`cursor-pointer mr-14 transition-all duration-300 ${
                        isScroll ? "w-24" : "w-28"
                    }`}/>
                </a>
                
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2 transition-all duration-300 ${
                    isScroll 
                    ? "bg-gray-50/80 shadow-md backdrop-blur-sm" 
                    : "bg-white/70 shadow-sm backdrop-blur-sm"
                }`}>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200' href="#top">Home</a></li>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200' href="#about">About Me</a></li>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200' href="#services">Service</a></li>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200' href="#work">My Work</a></li>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200' href="#contact">Contact Me</a></li>
                </ul>
                
                <div className='flex items-center gap-4'>
                    
                    
                    <a href="#contact" className={`hidden lg:flex items-center gap-3 px-8 border border-gray-500 rounded-full ml-4 font-Ovo hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 ${
                        isScroll ? "py-2" : "py-2.5"
                    }`}>
                        Contact 
                        <Image src={assets.arrow_icon} alt='' className='w-3'/>
                    </a>

                    <button className='block md:hidden ml-3 hover:scale-110 transition-transform duration-200' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6'/>
                    </button>
                </div>

                {/*------- Mobile Menu --------------- */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/95 backdrop-blur-md shadow-2xl transition-transform duration-500 border-l border-gray-200'>
                    <div className='absolute right-6 top-6 hover:scale-110 transition-transform duration-200' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
                    </div>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200 py-2 block' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200 py-2 block' onClick={closeMenu} href="#about">About Me</a></li>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200 py-2 block' onClick={closeMenu} href="#services">Service</a></li>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200 py-2 block' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo hover:text-purple-600 transition-colors duration-200 py-2 block' onClick={closeMenu} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )  
}

export default Navbar