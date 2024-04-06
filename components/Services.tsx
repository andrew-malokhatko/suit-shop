import { serviceIcons } from "@/constants"
import Image from "next/image"

const Services = () => {
  return (
    <section id="services" className='relative p-6 flex justify-center sm:py-8 container overflow-x-hidden bg-about-us bg-no-repeat bg-cover'>
        <div className='absolute border border-zinc-800 w-screen top-0 left-0'/>

        <div className=' flex flex-col lg:flex-row justify-between items-center max-w-[90%] gap-4'>
            {serviceIcons.map((item)=>(
                <div className="flex justify-between items-center w-full
                         special-border border-solid">
                    <p className="p-2 info-text text-center">{item.text}</p>
                    <Image src={item.icon} alt="Service Icon" width={100} height={100} className="object-contain"/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Services