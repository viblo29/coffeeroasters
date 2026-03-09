import Footer from '@/components/molecules/Footer/Footer'
import Header from '@/components/molecules/Header/Header'
import HeroSection from '@/components/molecules/HeroSection/HeroSection'
import React from 'react'

import heroMobile from '../../../public/aboutus-hero-mobile.webp'
import heroTablet from '../../../public/aboutus-hero-tablet.webp'
import heroDesktop from '../../../public/aboutus-hero-desktop.webp'

function AboutUs() {
  return (
    <>
      <Header/>

      <HeroSection
        h='h-[400px] md:h-[450px]'
        mobileImage={heroMobile.src}
        tabletImage={heroTablet.src}
        desktopImage={heroDesktop.src}
        h2='About Us'
        p='Coffeeroasters began its journey of exotic discovery in 1999,
           highlighting stories of coffee from around the world. We have since been dedicated
           to bring the perfect cup - from bean to brew - in every shipment.'
      />

      <Footer/>
    </>
  )
}

export default AboutUs