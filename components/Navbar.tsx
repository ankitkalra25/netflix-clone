import React, { useCallback, useEffect, useState } from 'react'
import NavItems from "@/components/NavItems"
import MobileMenu from './MobileMenu'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import AccountMenu from './AccountMenu'

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, SetShowMobileMenu] = useState(false)
    const [showAccountMenu, SetShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)

    useEffect(()=> {
     const handleScroll = () => {
        if(window.scrollY > TOP_OFFSET ){
            setShowBackground(true)
        }else {
            setShowBackground(false)
        }
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
     }
    },[])
console.log(showBackground)
    const toggleMobileMenu =useCallback(() => {
        SetShowMobileMenu((current) => !current)
    },[])

    const toggleAccountMenu =useCallback(() => {
        SetShowAccountMenu((current) => !current)
    },[])
  return (
    <nav className='w-full fixed z-40'>
        <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""} `}>
            <img className='h-4 lg:h-7' src="/images/logo.png" alt="logo" />
            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
                <NavItems label="Home"/>
                <NavItems label="Series"/>
                <NavItems label="Films"/>
                <NavItems label="New & Popular"/>
                <NavItems label="My List"/>
                <NavItems label="Browse by languages"/>
            </div>
            <div onClick={toggleMobileMenu} className={`lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative }`}>
                <p className='text-white text-sm'>Browse</p>
                <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : ''}`}/>
                <MobileMenu visible={showMobileMenu}/>
            </div>
            <div className='flex flex-row ml-auto gap-7 items-center'>
                <div className='text-gray-200 hover-text-gray-300 cursor-pointer'>
                    <BsSearch/>
                </div>
                <div className='text-gray-200 hover-text-gray-300 cursor-pointer'>
                    <BsBell/>
                </div>
                <div onClick={toggleAccountMenu} className='flex flex-row items-center gap-2 cursor-pointer relative'>
                    <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                        <img src="/images/default-blue.png" alt="" />
                    </div>
                    <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : ''}`}/>
                    <AccountMenu visible={showAccountMenu}/>
                </div>
            </div>
        </div> 

    </nav>
  )
}

export default Navbar