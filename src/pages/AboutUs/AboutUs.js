import React from 'react'
import AboutUsBanner from '../../components/AboutUsBanner/AboutUsBanner'
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection'
import OurVison from '../../components/OurVison/OurVison'
import OurMisson from '../../components/OurMisson/OurMisson'
import AnimatedBanner from '../../components/AnimatedBanner/AnimatedBanner'
import OurPartnarship from '../../components/OurPartnarship/OurPartnarship'

const AboutUs = () => {
  return (
    <div>
        <AboutUsBanner />
        <AboutUsSection />
        <OurMisson />
        <OurVison />
        <OurPartnarship />
        <AnimatedBanner />
    </div>
  )
}

export default AboutUs