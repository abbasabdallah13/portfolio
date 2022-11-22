import {React, useEffect} from "react";
import headerTypo from '../../assets/header typo.png'

const Header = () => {
  useEffect(() => {
 
  }, []);
  
  return (
<div>
      <div className="header-typo">
      <img src={headerTypo} style={{maxWidth: '100%'}}  alt='header typo' />
      </div>
  </div>);
};

export default Header;
