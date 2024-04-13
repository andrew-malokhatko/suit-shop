import React from 'react'
import { NavButton } from '.'
import Image from 'next/image'
import AboutUsSlider from './AboutUsSlider'

const AboutUs = () => {
  return (
    <section id="about-us" className='relative container bg-about-us bg-no-repeat bg-cover max-sm:px-4 py-10 md:py-5'>
        {/*PC only Start*/}
        <div className='hidden lg:flex flex-col max-sm:gap-16 sm:flex-row justify-center items-center'>
            <div className='flex flex-1 flex-col justify-center items-center z-10'>
                <h1 className='section-text text-center'>Why are we here?</h1>
                <h3 className='info-text text-center mt-8 max-w-[80%]'>
                    For over a <span className='special-text'>century</span>, our shop has been the epitome of elegance,
                    offering <span className='special-text'>premium</span> suits crafted with aralleled expertise.
                    With a legacy  spanning generations.
                </h3>
                <NavButton href='#home' containerStyles='hover:scale-105 duration-200 mt-10 special-shadow-box special-border border-2 border-solid'
                                         textStyles='special-text text-lg'>
                    Learn More
                </NavButton>
            </div>
            
            <div className='hidden md:flex size-fit relative justify-center self-end z-10'>
                <Image src="/images/black-man.png" alt="Black Man" width={265} height={700} className='object-contain'/>
            </div>

            <div className='flex flex-1 flex-col justify-center items-center z-10'>
                <h1 className='section-text border-solid text-center'>Who we are?</h1>
                <h3 className='info-text mt-8 text-center max-w-[80%]'>
                    Established <span className='special-text'>over a century ago</span>, our shop has been synonymous with
                    timeless elegance and superior craftsmanship <span className='special-text'>since 1927</span>
                </h3>
                <NavButton href='#home'containerStyles='hover:scale-105 duration-200 mt-10 special-shadow-box special-border border-2 border-solid'
                                         textStyles='special-text text-lg'>
                    Learn More
                </NavButton>
            </div>
        </div>

        <div className='max-lg:hidden absolute inset-[15%]'>
            <Image src="/images/G.png" alt="G background Image" fill className='object-contain'/>
        </div>
        {/*PC only End*/}

        <div className='lg:hidden flex relative w-full h-full justify-center items-center'>
            <AboutUsSlider />
        </div>
    </section>
  )
}

export default AboutUs