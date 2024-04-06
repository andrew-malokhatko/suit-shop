import { NavButton, ProductSlider } from "."
import Image from "next/image"

const PopularProducts = () => {
  /*remove min-h screen when finished*/ 
  return (
    <section className='container text-white py-12 sm:pt-32 sm:pb-32' id="products">
        <div className='relative flex sm:flex-row flex-col justify-between items-center h-full'>
            <div className=' relative flex flex-col max-sm:items-center justify-center px-[3%]'>
                <h3 className="info-text text-base">Where price meets quality</h3>
                <h1 className="section-text">Popular Products</h1>
                <p className="info-text mt-10 max-w-[400px] max-sm:text-center">See some of our best selling products which are loved by thousands</p>
                <NavButton href="/products" textStyles=" text-xl text-black" 
                containerStyles="hover:scale-105 duration-200 special-bg sm:mt-24 mt-12 sm:flex max-sm:hidden">
                    See More
                </NavButton>
            </div>

            <div className="relative flex w-full sm:w-3/5 max-sm:py-8">
                <div className="relative w-full h-full flex justify-center items-center">
                    <ProductSlider />
                </div>
            </div>

            <div className='max-sm:hidden absolute g-inset -z-10'>
                    <Image src="/images/G.png" alt="G background Image" fill className='object-contain -z-10'/>
            </div>
        </div>
    </section>
  )
}

export default PopularProducts