import Footer from '@/components/molecules/Footer/Footer'
import Header from '@/components/molecules/Header/Header'
import HeroSection from '@/components/molecules/HeroSection/HeroSection'

import heroMobile from '../../../public/subscribe-hero-mobile.webp'
import heroTablet from '../../../public/subscribe-hero-tablet.webp'
import heroDesktop from '../../../public/subscribe-hero-desktop.webp'

function Subscribe() {
  return (
    <>
      <Header/>

      <HeroSection
        h='h-[400px] md:h-[450px]'
        mobileImage={heroMobile.src}
        tabletImage={heroTablet.src}
        desktopImage={heroDesktop.src}
        h1='Create a plan'
        p='Build a subscription plan that best fits your needs. We offer an assortment of the best 
           artisan coffees from around the globe delivered fresh to your door.'
      />

      <Footer/>
    </>
  )
}

export default Subscribe