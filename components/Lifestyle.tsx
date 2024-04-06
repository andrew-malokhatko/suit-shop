import React from 'react'
import { NavButton } from '.'

const Lifestyle = () => {
  return (
    <section id="testimonials" className='container relative flex justify-center items-center'>
      <div className='absolute flex flex-col justify-center items-center'>
          <h1 className=' title-text leading-normal sm:leading-none font-semibold text-center'>
          We offer unique Lifestyle <br/> not only suits
          </h1>
          <p className='p-5 lg:p-12 info-text text-white font-light text-center'>
            Learn mindblowing stories of our customers
          </p>
          <NavButton href='#home' containerStyles='hover:scale-105 duration-200 border border-white' textStyles='text-lg'>
            See Stories
          </NavButton>
      </div>
        <video width="100%" autoPlay muted loop className='object-cover min-h-screen max-h-full -z-10'>
            <source src="/videos/tristanvideo.mp4" type="video/mp4"/>
            Your Browser Does not support video tag
        </video>
    </section>
  )
}

export default Lifestyle