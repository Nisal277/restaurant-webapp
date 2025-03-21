import React, { useState } from 'react';
import './ImageGallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import ImageGallery1 from '../uitls/images/gallery-1.jpg';
import ImageGallery2 from '../uitls/images/gallery-2.jpg';
import ImageGallery3 from '../uitls/images/gallery-3.jpg';
import ImageGallery4 from '../uitls/images/gallery-4.jpg';
import ImageGallery5 from '../uitls/images/gallery-5.jpg';
import ImageGallery6 from '../uitls/images/gallery-6.jpg';
import ImageGallery7 from '../uitls/images/gallery-7.jpg';
import ImageGallery8 from '../uitls/images/gallery-8.jpg';


export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <section className="gallery-section my-5">
        <div className="container text-center">
          <h2 className="fw-bold">GALLERY</h2>
          <p>Some photos from our restaurant</p>
        </div>
      </section>

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 my-5"
      >
        <SwiperSlide>
          <img className='border-0' src={ImageGallery1} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery2} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery3} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery4} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery5} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery6} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery7} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery8} alt='food' />
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
          <img className='border-0' src={ImageGallery1} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery2} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery3} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery4} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery5} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery6} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery7} alt='food' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='border-0' src={ImageGallery8} alt='food' />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}