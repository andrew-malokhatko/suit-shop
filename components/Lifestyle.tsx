import React from 'react'

const Lifestyle = () => {
  return (
    <section className='container relative flex justify-center items-center'>
        <h1 className='absolute title-text leading-normal font-semibold text-center'>
        We offer unique Lifestyle <br/> not only suits
        </h1>
        <video width="100%" autoPlay loop className='object-contain'>
            <source src="/videos/tristanvideo.mp4" type="video/mp4"/>
            Your Browser Does not support video tag
        </video>
    </section>
  )
}

export default Lifestyle