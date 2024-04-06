import Image from "next/image"
import Link from "next/link";

interface NavButtonProps{
    children: string;
    href: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
}   

const NavButton = ({children, href, containerStyles, btnType,
                       textStyles, rightIcon}: NavButtonProps) => {
  return (
    <Link href={href} className="size-fit flex relative">
      <button disabled = {false}
      type={btnType || "button"}
      className= {'nav-btn ' + containerStyles}>

          <span className={'flex-1 ' + textStyles}>
              {children}
          </span>

          {rightIcon && (
            <div className="relative w-6 h-6">
              <Image src={rightIcon} alt="Right Button Icon" fill className="object-contain"/>
            </div>
          )}
      </button>
    </Link>
  )
}

export default NavButton