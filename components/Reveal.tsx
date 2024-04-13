"use client"

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
    children: JSX.Element;
    width?: "100%" | "fit-content"
    //containerStyles?: string;
}

/*const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  }*/

export const Reveal = ({children, width="fit-content"}: RevealProps) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible");
        }
    }, [isInView])
    

    return (
        <div ref={ref} className={`flex h-full w-full overflow-hidden relative`} style={{width}}>
            <motion.div
            variants = {{
                hidden: { opacity: 0, y: 40},
                visible: { opacity: 1, y: 0},
                }
            }
            initial={"hidden"}
            animate={mainControls}
            transition={{duration:0.5}}>
                {children}
            </motion.div>
        </div>
    )
}