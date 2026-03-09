import Image from 'next/image'
import React from 'react'
import siteLogoMobile from '../../../public/coffeeroasters-logo-mobile.svg'
import homePageHeroMobile from '../../../public/home-page-hero-mobile.webp'
import siteLogo from '../../../public/coffeeroasters-logo-desktop.svg'
function Header() {
  return (
    <div>
        <div className='pt-8 px-6 mb-10 flex justify-between items-center md:pt-10 md:mb-13.25 md:px-10 lg:px-20 lg:pt-10.75 lg:mb-10.75 '>
            <Image className='md:hidden' src={siteLogoMobile} alt='site logo'/>
            <Image className='hidden md:block' src={siteLogo} alt='site logo'/>
            <div className='flex flex-col gap-0.75 md:hidden '>
                <div className='w-4 h-0.75 rounded-[1.5px] bg-[#333D4B] '></div>
                <div className='w-4 h-0.75 rounded-[1.5px] bg-[#333D4B] '></div>
                <div className='w-4 h-0.75 rounded-[1.5px] bg-[#333D4B] '></div>
            </div>

            <div className='hidden md:flex gap-8.25 text-[#83888F] text-[12px] font-bold tracking-[0.92px] uppercase'>
                <div className=' hover:text-[#333D4B] cursor-pointer transition-colors  duration-300 ease-in-out font-[barlow]'>Home</div>
                <div className=' hover:text-[#333D4B] cursor-pointer transition-colors  duration-300 ease-in-out font-[barlow]'>About Us</div>
                <div className=' hover:text-[#333D4B] cursor-pointer transition-colors  duration-300 ease-in-out font-[barlow]'>Create your plan</div>
            </div>
        </div>
    </div>
  )
}

export default Header