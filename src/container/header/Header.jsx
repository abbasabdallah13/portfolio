import { React } from "react";

import theperfecthoneyjar from '../../assets/theperfecthoneyjar.png';

import './header.scss';

const Header = () => {
 
 
  return (
    <div className="mt-32 md:mt-16 p-12 md:p-0 mb-16 flex flex-col items-center">
      <div className="md:order-2 flex flex-col items-center md:flex-row md:justify-start md:w-full md:my-32">
        <img src={theperfecthoneyjar} alt='selfie' className="w-full xs:w-[400px] sm:w-[500px] md:w-[70%] lg:max-w-full" />
        <p className="text-2xl mt-2 text-justify md:text-sm lowercase md:ml-0 lg:w-[30%] md:text-center"><span className="text-4xl relative md:top-2">"</span> WELCOME to my LITTLE CORNER of the WORLD WIDE WEB <span className="text-4xl relative md:top-2">"</span></p>
      </div>
      <div className="flex flex-col relative w-full text-right items-end md:mt-12 md:p-12 ">
        <h1 className="font-light text-[8rem] md:text-[6.5rem] md:mt-10">hello world, i am <span className="text-[#E7A600]">abbas</span></h1>
        <h1 className="font-light text-[8rem] md:text-[6.5rem] md:mt-10">full-stack developer</h1>
        <p className="text-7xl md:text-[4rem] md:leading-[5rem] md:w-3/5 text-justify mt-8 md:mt-28 md:px-16">passionate about bringing designs onto the screen with code.</p>
      </div>
    </div>
  );
};

export default Header;
