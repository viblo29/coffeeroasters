import Button from '@/components/atoms/Button/Button'
import Footer from '@/components/molecules/Footer/Footer'
import Header from '@/components/molecules/Header/Header'
import HeroSection from '@/components/molecules/HeroSection/HeroSection'
import React from 'react'
import heroMobile from "../../../public/home-hero-mobile.webp"
import heroTablet from "../../../public/home-hero-tablet.webp"
import heroDesktop from "../../../public/home-hero-desktop.webp"

function Home() {
  return (
    <>
      <Header/>
      <HeroSection
        h="h-[500px] lg:h-[600px]"
        mobileImage={heroMobile.src}
        tabletImage={heroTablet.src}
        desktopImage={heroDesktop.src}
        h1="Great coffee made simple."
        p="Start your mornings with the world’s best coffees. Try our expertly curated artisan 
          coffees from our best roasters delivered directly to your door, at your schedule."
        showButton
      />
      <Footer/>
    </>
  )
}

export default Home