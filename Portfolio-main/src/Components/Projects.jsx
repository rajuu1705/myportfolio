import React from 'react'
import { PROJECTS } from "../assets/constants/index"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className='my-32 text-center text-4xl text-gray-800'>PRO
                <span className='font-bold text-gray-800'>JECTS</span></motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="  w-full lg:w-1/4 ">
                            <img src={project.image}
                                width={150}
                                height={150}
                                alt={project.title} className=" opacity-100 mb-6 rounded hover:scale-110 cursor-pointer" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold text-orange-500" >{project.title}</h6>
                            <p className="mb-4 text-gray-800 text-justify font-semibold">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white hover:bg-cyan-300 hover:text-black">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects