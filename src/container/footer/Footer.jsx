import React from "react";
import fullLogo from '../../assets/logo-full.png'

const Footer = () => {
  return <div style={{position:'relative', backgroundColor:'#fee88c', padding:'0 0.5rem 0 0.5rem'}}>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontFamily:'Hepta Slab'}}>
      <h5>Beirut, Lebanon</h5>
      <h5 style={{fontSize:'0.8rem'}}>All rights reserved</h5>
    <img  style={{width:'min(20%,130px)'}}  src={fullLogo} alt='logo' />
    </div>    
  </div>;
};

export default Footer;
