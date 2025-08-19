import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination, Autoplay } from "swiper/modules";

const Main = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{clickable: true}}
    >
      <SwiperSlide>
        <img src="https://storage-asset.msi.com/global/picture/banner/banner_173346170590d70eaecbc67d2c4df5b116a610e54a.jpeg" className='h-[440px] w-full' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://storage-asset.msi.com/global/picture/banner/banner_173699933363bc98f712af8218a54c604a4699484b.jpeg" className='h-[440px] w-full' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://storage-asset.msi.com/global/picture/banner/banner_1739330458a29016a36c589468ff2af3f68649a3c2.jpeg" className='h-[440px] w-full' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://storage-asset.msi.com/global/picture/banner/banner_17375347980015a5908c59c80f41b2bdb55ced8d1a.jpeg" className='h-[440px] w-full' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://storage-asset.msi.com/global/picture/banner/banner_17339696866f5c845ec4299075d614d4d854b68cf1.jpeg" className='h-[440px] w-full' />
      </SwiperSlide>
    </Swiper>

  )
}

export default Main