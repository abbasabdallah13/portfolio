import React from "react";

import { IoLogoWechat } from "react-icons/io5";


import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import chat from '../../assets/chat.png'
import waBIcon from '../../assets/waBusinessIcon.png'

const Contact = () => {
  return (
    <div id="contact" className="bg-[#ffbd59] flex justify-center">
      <div className="w-4/5 my-4 lg:my-20">
        <div className="flex flex-col lg:flex-row">
          <div className="text-[5.5rem] border-b-[15px] border-t-0 border-l-0 border-r-0 border-[#92611e] border-solid lg:w-1/2 flex justify-center items-center">
            <p className="font-coco-gothic text-[#e4dfd8]">Get in touch</p>
          </div>
          <div className="font-heebo flex justify-center items-center lg:bg-[#92611e] lg:w-1/2 py-8">
            <p className="text-2xl lg:text-base text-[#92611e] lg:text-[#e4dfd8] font-heebo uppercase">let's make some magic happen together! 🌟</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:w-1/3 mt-2">
            <p className="text-4xl lg:text-2xl text-[#e4dfd8]">Email</p>
            <a className="text-3xl lg:text-xl text-black hover:line-through" href="mailto:abbasab13@outlook.com">abbasab13@outlook.com</a>
          </div>
          <div className="flex flex-col items-center lg:w-1/3 mt-6 lg:mt-2">
            <p className="text-4xl lg:text-2xl text-[#e4dfd8]">Mobile</p>
            <a className="text-3xl lg:text-xl text-black hover:line-through" href="tel:+9613759568">+961 3 75 95 68</a>
          </div>
          <div className="flex flex-col items-center lg:w-1/3 mt-6 lg:mt-2">
            <p className="text-4xl lg:text-2xl text-[#e4dfd8]">Chat</p>
            <p className="text-3xl lg:text-xl text-black">Want an advise ? Share ideas ? Or just a friendly chat ? I am available 24/7 for chat. Hit me up by clicking the button below.</p>
            <a href="javascript:void(Tawk_API.toggle())" className="w-full flex justify-center mt-4">
              <IoLogoWechat className="text-9xl lg:text-7xl text-[#e4dfd8] rounded-full p-4 lg:p-2 bg-[#92611e] hover:bg-[#e4dfd8] hover:text-[#92611e]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
