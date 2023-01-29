import React from "react";
import Whatsapp from '../../assets/whatsapp.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import LinkedIn from '../../assets/linkedin.png'
import './contact.scss'
const Contact = () => {
  return <section id='contact' style={{backgroundColor:'#202020', padding:'4rem', fontFamily:'Hepta Slab', height:'fit-content'}}>
    <h1 className='large-text'>CONTACT ME</h1>
    <div style={{marginLeft:'5rem', marginTop:'2rem'}}>
        <p className='small-text'>call me or <img src={Whatsapp} className='social-media-icon'  alt='whatsapp' /></p>
        <h1 className='large-text'>+ 961 3 75 95 68</h1>
        <br />
        <p className='small-text'>email me</p>
        <h1 className='large-text'>personal@honeycoded.fun</h1>
        <br />
        <p className='small-text'>follow me</p>
        <div style={{display:'flex'}}>
           <a href="https://www.instagram.com/honeycoded13/" target='_blank' className='social-media-icon'> <img src={Instagram} alt='instagram'  style={{width:'100%', height:'100%'}}  /></a>
           <a href="https://twitter.com/honey_coded" target='_blank' className="social-media-icon"> <img src={Twitter} alt='twitter'style={{width:'100%', height:'100%'}}  /></a>
           <a href="https://www.linkedin.com/in/honeycoded/" target='_blank' className="social-media-icon"> <img src={LinkedIn} alt='linkedin'style={{width:'100%', height:'100%'}}  /></a>
        </div>
    </div>

  </section>;
};

export default Contact;
