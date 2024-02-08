import React, { useEffect, useState } from "react";
import { About, Header, Footer, Skills, Work, Contact, Testimonials } from "./container";
import { Navbar } from "./components";
import "@fontsource/hepta-slab";
import { FaWindowClose } from "react-icons/fa";

import Sidelinks from "./components/sidelinks/Sidelinks";
import { navlinks } from "./data/Navlinks";
import SocialIcons from "./components/SocialIcons";


const App = () => {  
  const [showSidebar, setShowSidebar] = useState(false)
  const [socialIcons, setSocialIcons] = useState(false)
 
  useEffect(() => {
    const displaySocialIcons = () => {
      const scrollY = window.scrollY
      if(scrollY >= 200){
        setSocialIcons(true)
      }else{
        setSocialIcons(false)
      }
    }

    document.addEventListener("scroll", displaySocialIcons)
  }, [])
  
  return (
    <div className="relative">
      {
        showSidebar && (
          <div className={`fixed top-0 right-0 w-3/5 h-screen z-[900] bg-[#92611e] p-4`}>
            <FaWindowClose className="text-8xl text-[#ffbd59]" onClick={()=>setShowSidebar(false)} />
            <ul>
            {
              navlinks.map((link, i) => (
                <li key={i} className="mt-10 list-none" onClick={() => setShowSidebar(false)}>
                  <a href={"#"+link} className="capitalize no-underline text-white text-6xl">{link}</a>
                </li>
              ))
            }
            </ul>
          </div>
        )
      }
      <div className={`duration-75 ${showSidebar ? "translate-x-[-60%]" : ""}`}>
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {/* <Sidelinks /> */}
        <Header />
        <About />
        <Skills />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
        {
          socialIcons && (
            <SocialIcons styles={"fixed left-0 top-[40%] flex-col bg-[#e2dfd4]/50 p-2"} />
          )
        }
      </div>
    </div>
  );
};

export default App;
