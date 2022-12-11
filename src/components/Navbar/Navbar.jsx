import { React, useEffect, useState } from "react";
import logoA from "../../assets/logo-a.png";
import logoC from "../../assets/logo-c.png";
import fullLogo from '../../assets/logo-full.png'
import { FaAngleDoubleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Resume from '../../assets/my_cv.pdf'
import './Navbar.scss';

const Navbar = () => {

  const navlinks = ["about", "skills", "work", "contact"];
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
    let navbar = document.getElementsByClassName("navbar")[0];
    let children = document.getElementsByClassName("child");
    let logoContainer = document.getElementsByClassName('logo-container')[0];
    let logo = document.getElementById('headerLogo');
    let navlinks = document.getElementsByClassName("nav-links")[0];
    let resumeBtn = document.getElementsByClassName("download-resume")[0];
    let overlay = document.getElementsByClassName("overlay")[0];
    let closeOverlay = document.getElementById("closeOverlay");
    let navbarLinks = document.getElementsByClassName('navbar-links');


    if (window.scrollY === 0 && window.innerWidth >=1024) {
      logoContainer.style.display='none';
      navlinks.style.marginTop='24px';

    
    }
    document.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
       if(window.innerWidth >= 1024){
        navlinks.style.marginTop='24px';
        logoContainer.style.display='none';
        logo.style.display='flex';
        navlinks.style.backgroundColor='rgba(0, 0, 0, 0.56)';
        navbar.style.top= '1.3rem';
        navlinks.style.animation = 'navbar-on-scroll-zero 0.5s';


       }
        navbar.style.backgroundColor = "unset";
        navbar.style.justifyContent = "space-between";
        for(let i=0; i<navbarLinks.length;i++){
          navbarLinks[i].style.color='#fff'
        }
        resumeBtn.style.display = "none";
      } else {
        if(window.innerWidth >= 1024){
          children[1].style.fontSize = "0px";
        };
        logo.style.display='none';
        navbar.style.top= '0rem';
        navlinks.style.marginTop='unset';
        navlinks.style.backgroundColor='unset';
        navlinks.style.marginLeft='3rem';
        for(let i=0; i<navbarLinks.length;i++){
          navbarLinks[i].style.color='#000'
        }
        children[2].style.animation = "logo 1s forwards";
        logoContainer.style.display='flex';
        navbar.style.backgroundColor = "white";
        navbar.style.justifyContent = "unset";
        navlinks.style.animation = 'unset';

       if(window.innerWidth >= 1024){
        resumeBtn.style.display = "flex"
       }

      }
    });
  }, []);

  useEffect(() => {
    console.log(openOverlay);
  }, [openOverlay]);
  

  return (
    <div className="navbar">
      <a href="#home">
        <div className="logo-container">
          <div className="child a">
            <img src={logoA} alt="logo section a" />
          </div>
          <div className="child b">HONEYCODED</div>
          <div className="child c">
            <img src={logoC} alt="logo section c" />
          </div>
        </div>
      </a>
      <div className="nav-links">
      <div id="headerLogo"  style={{backgroundColor: 'rgba(255, 255, 255, 0.70)', display: 'flex', justifyContent: 'center'}}><img src={fullLogo} style={{width: '90%'}}  /></div>
        <ul>
          {navlinks.map((el) =>
            el === "about" ? (
              <li>
                <a className='navbar-links' href="#about">{el}</a>
              </li>
            ) : (
              <li style={{marginLeft: '3.5rem'}}>
                <a className='navbar-links'  href={'#'+el}>{el}</a>
              </li>
            )
          )}
        </ul>
      </div>
      <a href={Resume} download="Abbas Abdallah's Resume"  className="download-resume">
        <FaAngleDoubleDown /> Resume
      </a>
      
      <div
        id="burgermenu"
        style={{
          position: "absolute",
          right: '5rem',
         
        }}
        onClick={toggleSidebar}
      >
        {!openOverlay ? (
          <GiHamburgerMenu size="25px" />
        ) : (
          <GrClose size="25px" />
        )}
         
      </div>
      {openOverlay && (<div style={{zIndex: '2'}}  className="overlay">
        <ul>
        {navlinks.map(el=>(
          <li><a href={'#'+el}>{el}</a></li>
        ))}
        </ul>
        </div>)}
    </div>
  );
};

export default Navbar;
