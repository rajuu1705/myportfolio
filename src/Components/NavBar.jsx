import logo from "../assets/rajufinalogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export const NavBar = () => {
  return (
  <nav className="  mb-20  flex items-center justify-between py-2 ">
    <div className=" flex flex-shrink-0 items-center">
        <img className=" cursor-pointer mx-1 w-32 " src={logo} alt=""/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a  className="text-cyan-500 " href ="https://www.linkedin.com/in/raja-ravi-varman-k-b02097255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> < FaLinkedin/> </a>
      <a  className="bg-gradient-to-r from-amber-500 to-pink-500" href="https://www.instagram.com/_r4juu__/profilecard/?igsh=MWxveDVscnpscWtpcA==">  <FaInstagram/> </a>
      <a className="text-black" href="https://github.com/rajuu1705"> < FaGithub/> </a>
        
    </div>
  </nav>
  )
}

