import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Core components
import { Navigation, Pagination, Scrollbar } from "swiper/modules"; // Optional modules

// Import required Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/300" alt="Slide 1" />
        <p>Slide Caption 1</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/300" alt="Slide 2" />
        <p>Slide Caption 2</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/300" alt="Slide 2" />
        <p>Slide Caption 2</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/300" alt="Slide 2" />
        <p>Slide Caption 2</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/300" alt="Slide 2" />
        <p>Slide Caption 2</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
