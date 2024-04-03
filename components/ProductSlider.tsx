"use client"

import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { popularProducts } from "@/constants";
import Image from "next/image";


function ProductSlider() { //react slick slider
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className="relative w-full h-full">
      <Slider {...settings}>
        {popularProducts.map((item)=>(
            <div key={item.name} className="hover:opacity-70 h-full w-full !flex flex-col gap-1 justify-center items-center px-2">
                <Image src={item.image} alt={item.name} width={300} height={100} className="object-contain"/>
                <h4 className="text-lg">{item.name}</h4>
                <p className="text-base">{item.price}</p>
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;