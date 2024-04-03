"use client"

import Image from "next/image"
import Link from "next/link"
import { navLinks } from "@/constants"
import { slide as Menu } from 'react-burger-menu';

const Navbar = () => {
  const CustomBurgerIcon = () => <img src="/icons/hamburger.svg"/>;
  const CustomCrossIcon = () => <img src="/icons/close.svg"/>;

  return (
    <header className="w-full absolute z-10 flex justify-center">
        <nav className="w-full lg:px-16 px-3 py-1 flex justify-between items-center max-w-screen-2xl">
            <Link href="/" className="flex justify-center items-center">
                <Image src="/icons/logo.svg" alt="Logo" width={80} height={50} className="object-contain"/>
            </Link>

            <div className="hidden lg:flex justify-center items-center gap-10">
                {navLinks.map((link)=>(
                    <Link href={link.href} key={link.label} className="hover:text-light-white text-white text-base text-center">
                        {link.label}
                    </Link>
                ))}
            </div>
            
            {/*mobile navigation*/}
            <div className="lg:hidden relative">
            <Menu customCrossIcon={<CustomCrossIcon />} customBurgerIcon={<CustomBurgerIcon/>}  width={320} right>
                <Link href="/">
                    <Image src="/icons/logo.svg" alt="Navigation Logo" width={80} height={50}/>
                </Link>
                {navLinks.map((link)=>(
                    <Link href={link.href} key={link.label} className="menu-item">
                        {link.label}
                    </Link>
                ))}
            </Menu>
            </div>
        </nav>
    </header>
  )
}

export default Navbar