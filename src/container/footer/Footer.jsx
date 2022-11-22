import React from "react";
import fullLogo from '../../assets/logo-full.png'

const Footer = () => {
  return <div style={{position:'relative', backgroundColor:'#fee88c', padding:'2rem 0 1rem 2rem'}}>
    <div style={{display:'flex', flexDirection:'column', fontFamily:'Hepta Slab'}}>
      <h3>Beirut, Lebanon</h3>
      <h3 style={{marginTop:'1rem',fontSize:'0.8rem'}}>All rights reserved</h3>
    </div>    
    <img  style={{width:'min(20%,130px)',position:'absolute', bottom:'0', right:'0'}}  src={fullLogo} alt='logo' />
  </div>;
};

export default Footer;
