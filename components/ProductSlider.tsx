"use client"

import { popularProducts } from "@/constants";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

import "swiper/css"
import 'swiper/css/navigation'


function ProductSlider() {
  return(
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1.4}
      navigation
      className='w-full h-full'

      breakpoints={{ //important breakpoints are directly applied to slider width not screen resolution
        1024: {
          slidesPerView: 3.4,
          spaceBetween : 10,
        },
        668: {
          slidesPerView: 2.7,
          spaceBetween : 10,
        },
        450: {
          slidesPerView: 2.3,
          spaceBetween : 10,
        },
        0: {
          slidesPerView: 1.5,
          spaceBetween : 10,
        },
      }}
    >
      { popularProducts.map((item)=>(
        <SwiperSlide className="relative h-full w-full flex justify-center items-center">
          <div className="relative h-full w-full flex flex-col items-center">
            <Image src={item.image} alt={item.name} width={300} height={100} className="object-contain"/>
            <h4 className="text-lg">{item.name}</h4>
            <p className="text-base">{item.price}</p>
          </div>
        </SwiperSlide>
      ))
      }
    </Swiper>
  );
}

export default ProductSlider;