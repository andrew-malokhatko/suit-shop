"use client"

import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { popularProducts } from "@/constants";
import Image from "next/image";

interface ArrowProps{
  className?: any;
  style?: any;
  onClick?: any;
}


function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <Image alt="/" src="/icons/right-arrow.svg" width={40} height={40} className="object-contain"/>
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <Image alt="/" src="/icons/left-arrow.svg" width={40} height={40} className="object-contain"/>
    </div>
  );
}


function ProductSlider() { //react slick slider
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3.3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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
            <div key={item.name} className="hover:scale-105 duration-200 p-6 h-full w-full !flex flex-col gap-1 justify-center items-center px-2">
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