import React from 'react';
import ImageGallery from './ImageGallery';
import Header from './Header';
import AboutUsSection from './AboutUsSection';

import ContactSection from './ContactSection';

function Home() {
  const pageStyle = {
    background: 'linear-gradient(to right, #f8e1f4, #f2e7fa)', // Soft gradient, not too colorful
    minHeight: '100vh',
    paddingBottom: '2rem',
  };
  return (
    <div className='home-page' style={pageStyle}>
        <Header />

        <AboutUsSection />

        
        <ImageGallery />

        <ContactSection />
    </div>
  )
}

export default Home;