import React, { useEffect } from "react";
import fullLogo from '../../assets/logo-full.png'
import { navlinks } from "../../data/Navlinks";
import SocialIcons from "../../components/SocialIcons";

const Footer = () => {
  useEffect(() => {
    console.log(navlinks)
  }, [])
  
  return (
    <div className="bg-[e4dfd8] my-4">
      <div>
        <div className="flex justify-between">
          <ul className="p-0">
          {
            navlinks.map(link => (
              <li className="inline ml-2">
                <a href={"/#"+link} className="text-[#623e2a]">{link}</a>
              </li>
            ))
          }
          </ul>
          <SocialIcons mr={4} />
        </div>
        <p className="text-center text-[#623e2a]">2024 - All rights reserved</p>
      </div>

    </div>
  )
};

export default Footer;
