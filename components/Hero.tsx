import Image from "next/image"
import NavButton from "./NavButton"
import Link from "next/link"

const Hero = () => {
  return (
    <section id="home" className='relative container flex justify-between min-h-screen'>
        <div className='flex-1 flex justify-center items-center'>
            <div className="h-3/4 w-3/4 lg:p-10 flex flex-col max-lg:items-center">
                <h1 className="title-text">Best suits for Best men</h1>
                <h3 className="info-text mt-10">
                    “If you're the best dressed man in the room, you're always 
                    <span className="special-text">
                        {` `}The Winner
                    </span>”
                    <p className="mt-6">
                    -Tristan Tate 
                    </p>
                </h3>
                <NavButton href="/products" textStyles="text-xl text-black"
                 containerStyles="special-bg hover:scale-105 duration-200 mt-24">
                    Shop Now
                </NavButton>
            </div>
        </div>

        <div className='max-xl:w-1/2 max-wide:w-[45%] w-2/5 hidden lg:flex
                        justify-end items-end min-h-screen'>
            <div className="relative min-w-full min-h-full">
                <Image  src="/images/hero-bg.png" alt="Hero Image" fill className="object-cover -z-10"/>
            </div>
        </div>

        <div className='lg:hidden absolute top-0 left-0 min-w-full min-h-screen'>
            <Image  src="/images/hero-bg.png" alt="Hero Image" fill className="object-cover opacity-25 -z-10"/>
        </div>
        
        <Link href="#about-us" className="size-fit absolute lg:flex hidden flex-col justify-between items-center bottom-4 left-1/2 w-20 h-16 gap-1">
            <Image src="/icons/scroll.svg" alt="Scroll Icon" width={1} height={3} className="object-contain"/>
            <span className="text-sm">SCROLL</span>
        </Link>
    
    </section>
  )
}

export default Hero