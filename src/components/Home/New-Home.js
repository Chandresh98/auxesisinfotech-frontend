import React from 'react';
import Works from './Wifly-works2'
import '../../Css/new-style.css';
import Subscription from './Subscription';
import Service_Plans from './Service-Plans2';
import Why_ebikes from './Why-ebikes';
import Testimonials from './Testimonials';
import HeroSection from './HeroSection';


const Home = () => {

  return (
    <>
        <div className='body-inner pt'>
          <HeroSection heading={'Your own light electric vehicle for a monthly subscription!'} paragraph1={'Move free, we take care of all the hassle.'} paragraph2={'Starting at 45€/month'} button1={'Try it free'} button2={'How does it work?'} />
          <Works />
          <Subscription />
          <Service_Plans />
          <Why_ebikes />
          <Testimonials />
        </div>

    </>
  )

}

export default Home;