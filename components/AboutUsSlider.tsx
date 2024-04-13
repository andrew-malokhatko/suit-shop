"use client"

import { aboutUsData } from "@/constants";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Navigation, Pagination} from 'swiper/modules'
import { NavButton } from ".";

import "swiper/css"
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function AboutUsSlider() {
  return (
    <div className="relative w-full h-full">
      <Swiper modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        loop
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        className='w-full h-full lg:!hidden'
        >
        <SwiperSlide className='!flex flex-col justify-center items-center py-12'>
            <h1 className='section-text text-center'>
                Why are we here?
            </h1>
            <h3 className='info-text text-center mt-8'>
                For over a <span className='special-text'>century</span>, our shop has been the epitome of elegance,
                offering <span className='special-text'>premium</span> suits crafted with aralleled expertise.
             </h3>
            <NavButton href='#home' containerStyles='hover:scale-105 duration-200 mt-10 special-shadow-box special-border border-2 border-solid'
                                     textStyles='special-text text-lg'>
                Learn More
            </NavButton>
        </SwiperSlide>

        <SwiperSlide className='!flex flex-col justify-center items-center py-12'>
            <h1 className='section-text text-center'>
                Who are we?
            </h1>
            <h3 className='info-text text-center mt-8'>
                Established <span className='special-text'>over a century ago</span>, our shop has been synonymous with
                timeless elegance and superior craftsmanship <span className='special-text'>since 1927</span>
             </h3>
            <NavButton href="#home" containerStyles='hover:scale-105 duration-200 mt-10 special-shadow-box special-border border-2 border-solid'
                                     textStyles='special-text text-lg'>
                Learn More
            </NavButton>
        </SwiperSlide>

        <SwiperSlide className='!flex flex-col justify-center items-center py-12'>
            <h1 className='section-text text-center'>
                What we get you?
            </h1>
            <h3 className='info-text text-center mt-8'>
            Experience timeless elegance and <span className='special-text'>superiror craftsmanship</span>.
             Our curated selection blends classic sophistication with <span className='special-text'>modern style</span>.
             </h3>
            <NavButton href='#home' containerStyles='hover:scale-105 duration-200 mt-10 special-shadow-box special-border border-2 border-solid'
                                     textStyles='special-text text-lg'>
                Learn More
            </NavButton>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AboutUsSlider;