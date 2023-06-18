import { React, useEffect, useState } from "react";

import { FaAngleDoubleDown } from "react-icons/fa";

import logoA from "../../assets/logo-a.png";
import logoC from "../../assets/logo-c.png";
import logoText from '../../assets/logoText.png'
import honeyBurgerMenu from "../../assets/honeyBurgerMenu.png";
import closeBurgerMenu from "../../assets/closeBurgerMenu.png"
import Resume from '../../assets/my_cv.pdf'

import './Navbar.scss';

const Navbar = () => {

  const navlinks = ["about", "skills", "work", "testimonials", "contact"];
  const [openOverlay, setOpenOverlay] = useState(false);

  const toggleSidebar = () => {
    let burgermenu = document.getElementById("burgermenu");
    let about = document.getElementById('about');
    if(!openOverlay){
      burgermenu.style.animation = 'burgermenu-animation 0.5s forwards';
        setOpenOverlay(true);
    }else{
      let overlay = document.getElementsByClassName("overlay")[0];
      burgermenu.style.animation = 'burgermenu-close-animation 0.5s forwards';
      overlay.style.animation = "close-overlay 0.5s forwards ";

      setTimeout(() => {
        setOpenOverlay(false);
      }, 500);
    }
  };



  useEffect(() => {
    let navbar = document.getElementById("navbar");
    let mdNavbarContainer = document.getElementById('mdNavbarContainer');
    let logoText = document.getElementById('logoText');
    let logoGT = document.getElementById('logoGT');
    let resumeBtn = document.getElementById("resumeBtn");
    let navLinksContainer = document.getElementById('navLinks');
    let navbarLinks = document.getElementsByClassName('navbar-links');


    document.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
       if(window.innerWidth >= 768){
          for(let i=0; i<navbarLinks.length;i++){
            navbarLinks[i].style.color='#fff'
          }
          navLinksContainer.classList.add('bg-black')
          navLinksContainer.classList.remove('bg-white')
          logoText.classList.remove('hidden');
          logoGT.style.animation = "logo-reverse 2.2s forwards";
          logoText.style.animation = "logo-text-animation 2s forwards"
          mdNavbarContainer.classList.add('md:border-solid')
          resumeBtn.style.display = "none";
          navbar.style.animation = 'navbar-on-scroll-zero 400ms'
          navbar.style.top= '1rem';
        }
      } else {
        if(window.innerWidth >= 768){
          for(let i=0; i<navbarLinks.length;i++){
            navbarLinks[i].style.color='#000'
          }
          navLinksContainer.classList.add('bg-white')
          navLinksContainer.classList.remove('bg-black')
          logoText.classList.add('hidden');
          navbar.style.top= '0';
          logoGT.style.animation = "logo 900ms forwards";
          mdNavbarContainer.classList.remove('md:border-solid')
          resumeBtn.style.display = "flex";
          navbar.style.animation = ''
        };
      }
    })

  }, []);

  return (
    <div id="navbar" className="w-full flex items-center fixed z-[99999] top-0 py-4 bg-white md:py-0 md:top-[1rem]">
      <div id="mdNavbarContainer" className="flex items-center md:border-solid md:ml-2">
        <a className="no-underline text-black" href="#home"> 
        {/* logo */}
        <div id="logo" className="flex items-center relative top-2 md:top-0  ">
            <div id="logoLT">
              <img src={logoA} className="w-[22px] h-[35px] lg:w-[30px] lg:h-[40px] xl:w-[45px] xl:h-[65px] 2xl:w-[90px] 2xl:h-[120px]" alt="logo section a" />
            </div>
            <div id="logoText" className="b relative bottom-[2px] text-[2.5rem] md:text-2xl lg:text-3xl 2xl:text-4xl lowercase coda font-bold">    
              HONEYCODED
            </div>
            <div id="logoGT" className="relative" >
              <img src={logoC} className="w-[32px] h-[38px] lg:w-[35px] lg:h-[40px] xl:w-[65px] xl:h-[65px] 2xl:w-[100px] 2xl:h-[120px]" alt="logo section c" />
            </div>
        </div>
        </a>
        <div id="navLinks" className="hidden bg-black md:flex md:h-16 xl:h-20">
          <ul className="flex items-center py-2 px-8">
            {navlinks.map((el) =>
              (
                <li className="inline-block uppercase text-base ml-12">
                  <a className='navbar-links coda no-underline text-white' href={'#'+el}>{el}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <a href={Resume} id="resumeBtn" download="Abbas Abdallah's Resume"  className="rounded-[4px] w-fit h-[30px] hidden absolute right-6 items-center justify-around text-base uppercase p-2 text-[#353535] no-underline bg-[#e9e9e9] cursor-pointer hover:text-[#F4F4F4] hover:bg-[#353535]">
        <FaAngleDoubleDown className="mr-2" /> Resume
      </a>
      
      <img
        id="burgermenu"
        className="absolute right-4 top-4 md:hidden "
        src={!openOverlay ? honeyBurgerMenu : closeBurgerMenu} 
        width="40px"
        onClick={toggleSidebar}
      />
      {openOverlay && (
      <div className="overlay text-white absolute top-0 right-0 h-[300vh] bg-[#27283D] duration-1000">
        <ul className="p-8">
          {navlinks.map(el=>(
            <li className="text-4xl coda font-normal uppercase mt-24 sm:mt-16 list-none"><a className="no-underline text-white" href={'#'+el}>{el}</a></li>
          ))}
        </ul>
        <div className="w-full flex justify-center mt-12">
          <a href={Resume} target="_blank"  download="Abbas Abdallah's Resume" className="border-solid rounded-[4px] w-fit text-4xl flex items-center gap-x-2 border-none justify-around uppercase p-2 text-[#353535] no-underline bg-[#e9e9e9] cursor-pointer hover:text-[#F4F4F4] hover:bg-[#353535]">
            <FaAngleDoubleDown className="" /> Resume
          </a>
        </div>
        </div>)}
    </div>
  );
};

export default Navbar;
