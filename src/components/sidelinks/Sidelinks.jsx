import React from "react";

import github from '../../assets/githubIcon.png'
import twitter from '../../assets/twitter.png';
import linkedIn from '../../assets/linkedin.png'

const Sidelinks = () => {
  return (
    <div className="fixed bottom-0 w-full sm:w-fit sm:h-full sm:left-0 flex sm:flex-col justify-center z-[99]">
      <div className="bg-[rgb(217,217,217,0.73)] p-2 flex sm:flex-col items-center gap-x-4 sm:gap-y-2 z-20">
          <a href="https://github.com/honeycoded" target='_blank' rel="noreferrer" className='w-[25px] h-[25px] md:w-[33px] md:h-[33px] cursor-pointer'><img src={github} className='max-w-full' alt="github icon" /></a>
          <a href="https://twitter.com/honey_coded" target='_blank' rel="noreferrer" className='w-[25px] h-[25px] md:w-[33px] md:h-[33px] cursor-pointer'><img src={twitter} className='max-w-full' alt="twitter icon" /></a>
          <a href="https://www.linkedin.com/in/honeycoded/" target='_blank' rel="noreferrer" className='w-[25px] h-[25px] md:w-[33px] md:h-[33px] cursor-pointer'><img src={linkedIn} className='max-w-full' alt="linkedIn icon" /></a>
      </div>
    </div>
  )
};

export default Sidelinks;
