import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiNodedotjs } from "react-icons/si";
//import { Link } from 'react-router-dom';
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.facebook.com/profile.php?id=100010566695536">
              <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a href='https://github.com/MuhammadAmeen05'>
              <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/ameen05/'>
              <FaLinkedinIn />
            </a>  
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media