import { React, useEffect, useState } from "react";
import logoA from "../../assets/logo-a.png";
import logoC from "../../assets/logo-c.png";
import { FaAngleDoubleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {

  const navlinks = ["about", "skills", "work", "contact", "testimonials"];
  const [openOverlay, setOpenOverlay] = useState(false);

  const toggleSidebar = () => {
    let burgermenu = document.getElementById("burgermenu");
    if(!openOverlay){
      burgermenu.style.animation = 'burgermenu-animation 0.5s forwards'
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
    let navlinks = document.getElementsByClassName("nav-links")[0];
    let resumeBtn = document.getElementsByClassName("download-resume")[0];
    let overlay = document.getElementsByClassName("overlay")[0];
    let closeOverlay = document.getElementById("closeOverlay");

    document.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        children[1].style.fontSize = "18px";
        children[1].style.transition = "1s";
        children[2].style.animation = "logo-reverse 1s forwards";
        navbar.style.backgroundColor = "unset";
        navbar.style.justifyContent = "space-between";
        navlinks.style.animation = "navlinks-reverse 1s forwards";
        resumeBtn.style.display = "none";
      } else {
        children[1].style.fontSize = "0px";
        children[1].style.transition = "0.5s";
        children[2].style.animation = "logo 1s forwards";
        navbar.style.backgroundColor = "white";
        navbar.style.justifyContent = "unset";
        navlinks.style.animation = "navlinks-animation 1s forwards";
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
      <div className="logo-container">
        <div className="child a">
          <img src={logoA} alt="logo section a" />
        </div>
        <div className="child b">HONEYCODED</div>
        <div className="child c">
          <img src={logoC} alt="logo section c" />
        </div>
      </div>
      <div className="nav-links">
        <ul>
          {navlinks.map((el) =>
            el === "about" ? (
              <li>
                <a href="#about">{el}</a>
              </li>
            ) : (
              <li>
                <a href="#">{el}</a>
              </li>
            )
          )}
        </ul>
      </div>
      <button className="download-resume">
        <FaAngleDoubleDown /> Resume
      </button>
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
      {openOverlay && <div className="overlay">
        <ul>
        {navlinks.map(el=>(
          <li><a href="#">{el}</a></li>
        ))}
        </ul>
        </div>}
    </div>
  );
};

export default Navbar;
