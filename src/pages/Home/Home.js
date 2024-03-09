import React from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import OurProductRange from '../../components/OurProductRange/OurProductRange';
import OurVison from '../../components/OurVison/OurVison';
import OurMisson from '../../components/OurMisson/OurMisson';
import AnimatedBanner from '../../components/AnimatedBanner/AnimatedBanner';
import Certificate from '../Certificate/Certificate';

const Home = () => {

  return (
    <div className='scroll-auto'>
      <HomeSlider />
      <WhoWeAre />
      <OurProductRange />
      <OurMisson />
      <OurVison />
      <AnimatedBanner />
      <Certificate />
    </div>
  );
};

export default Home;
