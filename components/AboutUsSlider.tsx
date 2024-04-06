"use client"

import { aboutUsData } from "@/constants";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { NavButton } from ".";


function AboutUsSlider() { //react slick slider
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className="relative w-full h-full">
      <Slider {...settings}>
        <div className='!flex flex-col justify-center items-center py-12'>
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
        </div>

        <div className='!flex flex-col justify-center items-center py-12'>
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
        </div>

        <div className='!flex flex-col justify-center items-center py-12'>
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
        </div>
      </Slider>
    </div>
  );
}

export default AboutUsSlider;