import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { mockImagesSlides } from "@/mock/mockImagesSlide";

const SwiperCarousels = () => {
  const renderSlide = () => {
    return mockImagesSlides.map((imgItem) => (
      <SwiperSlide key={imgItem} className="col-md-2 img-slide">
        <img src={imgItem} alt="slide" />
      </SwiperSlide>
    ));
  };

  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper mt-3"
      >
        {renderSlide()}
      </Swiper>
    </>
  );
};

export default SwiperCarousels;
