import React from 'react';
import ImageGallery from './ImageGallery';
import Header from './Header';
import AboutUsSection from './AboutUsSection';

import ContactSection from './ContactSection';

function Home() {
  return (
    <div className='home-page'>
        <Header />

        <AboutUsSection />

        
        <ImageGallery />

        <ContactSection />
    </div>
  )
}

export default Home;