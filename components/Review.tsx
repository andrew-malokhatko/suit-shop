import Image from 'next/image'
import { Reveal } from './Reveal';

interface ReviewProps{
    name: string;
    text: string;
    href: string;
}

const Review = ({name, text, href}: ReviewProps) => {
  return (
        <div className='flex mx-auto max-lg:flex-col justify-evenly py-[2%] max-sm:m-4 rounded-lg border-slate-800 bg-gray-950 border lg:w-[80%]'>
            <Reveal>
                <Image src={href} alt="man" width={300} height={690}
                className='max-lg:hidden object-contain border flex border-slate-800 rounded-lg'/>
            </Reveal>

                <div className='relative text-center lg:ml-8 lg:max-w-[50%] rounded-lg lg:py-2 lg:px-6
                flex-1 text-light-white'>
                    <Reveal>
                        <div className='p-5 w-full h-full flex flex-col border-slate-800 bg-gray-950 lg:border'>
                            <h1 className='section-text p-2'> {name} </h1>
                            <p className='text-lg mt-6 text-center'> {text} </p>
                        </div>
                    </Reveal>
                </div>
        </div>

  )
}

export default Review