import profilePic from "../assets/ffraju.jfif";
import { delay, motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
})

const Hero = () => {
    return (
        <div className=" pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">

                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 ml-10 text-4 xl font-thin tracking-tight font-serif lg:mt-16 lg:text-6xl first-letter:text-cyan-300">R 
                            <span className="text-black">aja Ravivarman</span> </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className= "ml-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Java Full-Stack Developer</motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"

                            className=" text-lg leading-10 my-4 ml-10 max-w-xl py-6 font-semibold tracking-tighter text-justify text-gray-800">

                                {/* Full Stack Developer beginner in designing, developing, and implementing scalable web applications using modern technologies. Proficient in both front-end and back-end development, including HTML, CSS, JavaScript, Bootstrap,TailwindCSS and popular framework such as Reactjs. Strong analytical and problem-solving skills, with a keen eye for detail and an ability to rapidly learn and adapt to new technologies. Excellent communication and teamwork abilities, contributing to efficient project management and successful software solutions. */}
                                As a passionate Java Developer fresher, I am eager to contribute my foundational knowledge in Java and object-oriented programming to a dynamic development team. My goal is to apply my skills in software development and grow within a forward-thinking organization that values innovation and continuous learning.
                                Recent graduate with a degree in Computer Science and a solid foundation in Java development. As a Java Developer fresher, I aim to join a collaborative team where I can apply my knowledge of Java and contribute to the successful delivery of innovative software solutions while continuously improving my technical skills.

                        </motion.p>
                        <button className="mx-60 border-2 bg-white text-black p-3 rounded-3xl font-sans hover:bg-slate-600 hover:text-white"> Download Resume</button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-16 ">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.4}}
                        className=" rounded-full opacity-100 hover:opacity-85 " src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero