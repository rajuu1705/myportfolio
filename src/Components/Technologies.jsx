import React from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from 'react-icons/tb'
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { animate, motion } from "framer-motion";



    const iconVariants = (duration) => ({
        initial:{y: -10},
        animate:{
            y: [10, -10],
            transition: {
                duration: duration,
                ease:"linear",
                repeat: Infinity,
                repeatType:"reverse",
            },

        }
        
    })




const Technologies = () => {
  return (
    <div >
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20  text-center text-4xl text-gray-800 ">FRONT-END
        <span className='font-bold'> TECHNOLOGIES</span></motion.h2>
        
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
           
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(6)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div
             variants={iconVariants(4)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-sky-400"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(7)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-violet-700"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJs className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(8)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-7xl text-blue-400"/>
            </motion.div>
            {/* <motion.div
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-green-400"/>
            </motion.div> */}
            {/* <motion.div 
             variants={iconVariants(9)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPostgresql className="text-7xl text-red-400"/>
            </motion.div> */}
            
        </motion.div>
    </div>
  )
}

export default Technologies