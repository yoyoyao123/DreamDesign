
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./swiper.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      > 
        <SwiperSlide>
        <div className='image_container'>
                <img src="/deco1.jpeg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='image_container'>
                <img src="https://media.cdnws.com/_i/287802/RAW-842608/3117/9/decoration-objet-jardin-exterieur-ete-salon-de-jardin-rotin-panier-osier.jpeg.webp" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='image_container'>
                <img src="/deco2.jpeg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='image_container'>
                <img src="/image9.jpeg" alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
