import React from 'react'

const Subscribe = () => {
  return (
    <section id="newsletter" className='container relative pt-10 pb-10 sm:pb-24 flex flex-col justify-center items-center gap-10'>
        <h1 className='section-text text-center'>
            Subscribe To Our Newsletter
        </h1>
        <div className='md:max-w-[70%] flex max-md:flex-col justify-center items-center w-full gap-5'>
            <input type="email" placeholder="example@email.com"
            className='bg-black w-[80%] px-5 py-4 special-border border flex-1' />
            <button className='nav-btn py-4 text-black max-md:w-full max-md:max-w-[80%]
            special-bg hover:scale-105  duration-200'>
                <span className='text-xl'>
                    Subscribe
                </span>
            </button>
        </div>
    </section>
  )
}

export default Subscribe