import React from "react";

import github from '../../assets/githubIcon.png'
import twitter from '../../assets/twitter.png';
import linkedIn from '../../assets/linkedin.png'

const Sidelinks = () => {
  return (
    <div className="fixed top-[40%] left-0 bg-[rgb(217,217,217,0.31)] p-2 flex flex-col items-center gap-y-2 z-20">
        <a href="https://github.com/honeycoded" target='_blank' className='w-[33px] h-[33px] cursor-pointer'><img src={github} className='max-w-full' alt="github icon" /></a>
        <a href="https://twitter.com/honey_coded" target='_blank' className='w-[33px] h-[33px] cursor-pointer'><img src={twitter} className='max-w-full' alt="twitter icon" /></a>
        <a href="https://www.linkedin.com/in/honeycoded/" target='_blank' className='w-[33px] h-[33px] cursor-pointer'><img src={linkedIn} className='max-w-full' alt="linkedIn icon" /></a>
    </div>
  )
};

export default Sidelinks;
