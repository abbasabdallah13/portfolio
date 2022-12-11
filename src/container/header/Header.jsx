import {React, useEffect} from "react";
import headerTypo from '../../assets/header typo.png'
import './header.scss';
import mobilePic from '../../assets/mobile-header-pic.png';

const Header = () => {
  useEffect(() => {
 
  }, []);
  
  return (
<div className="header">
      <h1 style={{fontFamily:'hepta slab'}}>Hello World,</h1>
      <div className="header-typo">
      <img src={headerTypo} style={{maxWidth: '80%'}}  alt='header typo' />
      </div>
      <div style={{display:'flex', justifyContent:'center', marginTop:'4rem'}}> <img src={mobilePic} className='mobile-pic' alt="'mobile pic" /></div>
  </div>);
};

export default Header;
