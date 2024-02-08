import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterFill } from "react-icons/ri";



function SocialIcons({ styles }) {
  return (
    <div className={`flex gap-x-2 gap-y-2 lg:mr-24 ${styles}`}>
        <a href="https://twitter.com/abbasabdallah97" target='_blank'><RiTwitterFill className='text-6xl sm:text-4xl lg:text-2xl text-black hover:text-[#a0a0a0]' /></a>
        <a href="https://github.com/abbasabdallah13" target='_blank'><FaGithubSquare className='text-6xl sm:text-4xl lg:text-2xl text-black hover:text-[#a0a0a0]' /></a>
        <a href="https://linkedin.com/in/abbasab" target='_blank'><IoLogoLinkedin className='text-6xl sm:text-4xl lg:text-2xl text-black hover:text-[#a0a0a0]' /></a>
    </div>
  )
}

export default SocialIcons