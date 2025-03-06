import React from 'react'
import {CONTACT} from "../assets/constants/index"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:1}}
        className='my-10 text-center text-4xl text-gray-800'>CONTACT
        <span className='text-gray-800 font-bold'>US</span></motion.h1>
        <div className="text-center tracking-tighter">
          <motion.p
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration:1}}
          className='my-4 text-gray-800'>{CONTACT.address}</motion.p>
          <motion.p 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x: 100}}
           transition={{duration:1}}
          className='hover:underline cursor-pointer my-4 text-gray-800'>{CONTACT.phoneNo}</motion.p>
          <a className='hover:underline cursor-pointer text-gray-800' href="https://mail.google.com/mail/u/1/#inbox?compose=new">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact