import React, { useState } from "react";

import whatsappBusinessImg from '../../assets/whatsapp-business.png'
import smileyFace from '../../assets/smiley-face.png'


const About = () => {
  const [whatsappBusiness, setWhatsappBusiness] = useState(false);
  

  return (
    <div id="about" className="flex flex-col items-center">
      <div className="w-full px-14 md:w-1/2 lg:px-0 lg:w-1/4 lg:leading-[15rem]">
        <h3 className="text-[22px] lg:text-4xl font-semibold text-center w-full">about</h3>
        <div className="inter text-[16px] md:text-base mt-4 text-justify">
          <p className="">With over two years of experience in front-end and back-end development. I create websites that are well-designed and built with efficient practices.</p>
          <p className="mt-4"> I have been a freelancer for almost a year. Right now, I am working on projects keeping up with novice technologies on the network.</p>
          <p className="mt-4">I am always ready to chat. If interested in discussing anything, <a className="cursor-pointer relative text-[#175B3F] hover:line-through" onMouseOver={() => setWhatsappBusiness(true)} onMouseOut={()=>setWhatsappBusiness(false)} href="https://wa.me/9613759568?text=Hey%20what's%20up%20?">hit me up{whatsappBusiness && <span className="whatsapp-business-onhover"><img src={whatsappBusinessImg} className="w-[100px] lg:w-36 2xl:w-[350px] relative top-4 md:top-2"  alt='whatsapp business' /></span>}</a></p>
          <p className="mt-4">or check other <a href="#contact" className="relative text-[#175B3F] hover:line-through">contact methods</a></p>
          <p className="mt-4">Other than that, feel free to check out the skills I’ve accomplished so far and my recent projects.</p>
          <div className="flex gap-x-2">
            <p className="mt-4">I hope you enjoy your visit.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
