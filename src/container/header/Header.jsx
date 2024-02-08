import { React } from "react";

import theperfecthoneyjar from '../../assets/theperfecthoneyjar.jpg';
import pic from "../../assets/amsterdam.jpg"

import './header.scss';

const Header = () => {
 
 
  return (
    <div id="home" className="header w-screen relative">
      <img className="w-screen" src={pic} alt="pic" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center border-4 border-black text-white mt-20">
        <p className="text-3xl xl:text-[40px] font-heebo">WELCOME TO</p>
        <p className="text-[7rem] xl:text-[164px] font-catchy-mager">Abbas Abdallah's</p>
        <p className="text-5xl xl:text-[100px] font-catchy-mager">Portfolio</p>
      </div>
    </div>
  );
};

export default Header;
