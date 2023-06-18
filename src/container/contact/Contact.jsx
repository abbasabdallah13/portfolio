import React from "react";

import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import chat from '../../assets/chat.png'
import waBIcon from '../../assets/waBusinessIcon.png'

const Contact = () => {
  return (
    <div id="contact" className="p-4 bg-[#202020] text-white">
      <h1 className="inter text-4xl font-bold text-center md:text-left lg:text-4xl">CONTACT</h1>
      <div className="flex flex-col items-center sm:flex-row sm:justify-around sm:items-start">
        <div className="flex flex-col items-center mt-8 ">
          <div className="p-4 bg-white rounded-[50%]">
            <img src={mail} className="w-[40px] h-[35px] xl:w-[60px] xl:h-[50px] 2xl:w-[90px] 2xl:h-[80px]" alt="mail icon" />
          </div>
          <h3 className="font-normal text-4xl m-2 sm:text-2xl">Mail</h3>
          <a className="inter text-2xl text-white underline p-2 hover:line-through sm:text-xl md:text-sm" href="mailto:abbasab13@outlook.com">abbasab13@outlook.com</a>
        </div>
        <div className="flex flex-col items-center mt-8 ">
          <div className="p-4 bg-white rounded-[50%]">
            <img src={phone} className="w-[40px] h-[35px] xl:w-[60px] xl:h-[50px] 2xl:w-[90px] 2xl:h-[80px]" alt="phone icon" />
          </div>
          <h3 className="font-normal font-light text-4xl m-2 sm:text-2xl">Call</h3>
          <a className="inter text-2xl text-white underline p-2 hover:line-through sm:text-xl md:text-sm" href="tel:+9613759568">+ 961 3 75 95 65</a>
        </div>
        <div className="flex flex-col items-center mt-8 ">
          <div className="p-4 bg-white rounded-[50%]">
            <img src={chat} className="w-[40px] h-[35px] xl:w-[60px] xl:h-[50px] 2xl:w-[90px] 2xl:h-[80px]" alt="chat icon" />
          </div>
          <h3 className="font-normal font-light text-4xl m-2 sm:text-2xl">Chat</h3>
          <a className="inter text-2xl text-white underline p-2 hover:line-through flex items-center gap-x-2 sm:text-xl md:text-sm" href="https://wa.me/9613759568?text=Hey%20what's%20up%20?" target="_blank"><img src={waBIcon} className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] lg:w-[30px] lg:h-[30px]" alt='whatsapp business icon' /><span className="inter font-semibold">WhatsApp<span className="inter font-light">Business</span></span></a>
        </div>
      </div>
    </div>
  )
};

export default Contact;
