import React from 'react';
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from 'framer-motion';
import { BiLogoSpringBoot } from "react-icons/bi";

const Back = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
     <div className='my-60'>
            <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20  text-center text-4xl text-gray-800 ">BACK-END
            <span className='font-bold'> TECHNOLOGIES</span></motion.h2>


            <motion.div 
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity:0, x: -100}}
                    transition={{ duration: 1.5}}
                    className="flex flex-wrap items-center justify-center gap-4 ">

                        <motion.div 
                                  variants={iconVariants(5)}
                                  initial="initial"
                                  animate="animate"
                                  className="rounded-2xl border-4 border-neutral-800 p-4 ">
                                      <FaJava  className="text-7xl text-green-600"/>
                                  </motion.div>
                                  <motion.div 
                                  variants={iconVariants(9)}
                                  initial="initial"
                                  animate="animate"
                                  className="rounded-2xl border-4 border-neutral-800 p-4">
                                      <SiMysql  className="text-7xl text-blue-600"/>
                                  </motion.div>
                                  <motion.div 
                                  variants={iconVariants(15)}
                                  initial="initial"
                                  animate="animate"
                                  className="rounded-2xl border-4 border-neutral-800 p-4">
                                      <BiLogoSpringBoot  className="text-7xl text-green-600"/>
                                  </motion.div>
                    </motion.div>
            </div>
  );
};

export default Back;
