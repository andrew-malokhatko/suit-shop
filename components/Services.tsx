import { serviceIcons } from "@/constants"
import Image from "next/image"

const Services = () => {
  return (
    <section id="services" className='relative p-6 sm:py-12 container overflow-x-hidden bg-about-us bg-no-repeat bg-cover'>
        {/*<div className='absolute border border-white w-screen top-0 left-0'/>*/}
        <h1 className='text-center section-text'>
            That's why we are the best
        </h1>
        <div className='sm:mt-16 mt-8 flex flex-col md:flex-row justify-between items-center gap-10'>
            {serviceIcons.map((item)=>(
                <div className="flex justify-center items-center max-w-sm 
                        max-md:border-2 special-border border-solid">
                    <p className="p-2 info-text text-center">{item.text}</p>
                    <Image src={item.icon} alt="Service Icon" width={120} height={120} className="object-contain"/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Services