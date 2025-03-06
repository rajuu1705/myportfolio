import React from 'react'
import aboutImg from "../assets/about.jpg"
import { delay, motion } from "framer-motion"


const About = () => {
  return (
    <div className=" pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl text-gray-800">ABOUT
        <span className='text-gray-800 font-bold'>ME</span></motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className=" my-24 max-w-xl py-6 leading-10 text-justify text-black font-semibold " >I am a dedicated and versatile Java full stack developer with a passion for creating efficient and user-friendly web applications. I have worked in a frontend technologies including HTML, Bootstrap, CSS, TailwindCSS, Reactjs and Javascript and BackEnd Technologies like Java, SpringBoot and  MySQL.  My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About