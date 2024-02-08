import React, { useState } from "react";

import whatsappBusinessImg from '../../assets/whatsapp-business.png'


const About = () => {
  const [whatsappBusiness, setWhatsappBusiness] = useState(false);
  

  return (
    <div id="about" className="bg-[#92611e] flex flex-col lg:flex-row justify-around lg:justify-center items-center h-[70vh] lg:h-screen relative bottom-2">
      {/* <div className="w-full px-14 md:w-1/2 lg:px-0 lg:w-1/4 lg:leading-[15rem]">
        <h3 className="text-[22px] lg:text-4xl font-semibold text-center w-full uppercase">about</h3>
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
      </div> */}
    <div className="lg:w-1/3 flex justify-center text-white">
      <p className="text-8xl text-center lg:text-5xl font-heebo">about me</p>
    </div>
    <div className="w-4/5 lg:w-2/3 flex flex-col justify-center items-center">
      <p className="w-3/5 lg:w-2/3 text-3xl sm:text-xl lg:text-base text-justify text-white font-heebo">
        With over two years of experience in front-end and back-end development. I create websites that are well-designed and built with efficient practices.
        I have been a freelancer for almost a year. Right now, I am working on projects keeping up with novice technologies on the network.
        I am always ready to chat. If interested in discussing anything, hit me up
        or check other contact methods
      </p>
      <a href="#work" className="bg-[#ffdb59] px-8 py-6 sm:py-4 lg:py-2 text-[#623e2a] mt-20 sm:mt-8 border-0 text-3xl sm:text-xl lg:text-base lg:font-bold font-heebo mt-10 cursor-pointer hover:bg-[#FFE79E] hover:text-[#A67A62]">
        SEE WHAT I'VE DONE
      </a>
    </div>
    </div>
  )
};

export default About;
