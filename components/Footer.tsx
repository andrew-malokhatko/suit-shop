import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { socialMedia } from '@/constants'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer id="footer" className='container relative flex-col px-8'>
        <div className='flex justify-between items-start gap-20 max-lg:flex-col'>
            <div className='flex min-w-[300px] lg:border-r lg:min-h-[200px] border-white flex-col justify-start items-start gap-6'>
                <Link href="/" className="flex justify-center items-center">
                    <Image src="/icons/logo.svg" alt="Logo" width={80} height={50} className="object-contain"/>
                </Link>

                <div className='flex gap-4'>
                    {socialMedia.map((item)=>(
                        <div key={item.alt} className='size-fit bg-white rounded-full p-1'>
                            <Image src={item.src} alt={item.alt} width={30} height={30}/>
                        </div>
                    ))}
                </div>
            </div>
 
            <div className='flex flex-1 max-sm:flex-col flex-wrap justify-between items-start w-full lg:gap-14 gap-20'>
                {footerLinks.map((item)=>(
                    <div key={item.title} className='flex-1'>
                        <h3 className='text-2xl font-semibold whitespace-nowrap'>
                            {item.title}
                        </h3>
                        <ul className='flex flex-col justify-start items-start'>
                            {item.links.map((link)=>(
                                <li key={link.name} className='py-1 text-lg whitespace-nowrap'>
                                    <Link href={link.link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
          <p className="flex-1">&copy; Copyright. All rights reserved</p>
          <p className="text-info cursor-pointer flex-1 text-end">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer