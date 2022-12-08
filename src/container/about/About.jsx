import React from "react";
import aboutImg from '../../assets/about-img.png'
import './about.scss'

const About = () => {
  return <section id="about" style={{fontFamily:'Hepta Slab', position: 'relative', backgroundColor: '#fff',padding:'2rem', display:'flex', alignItems:'center',justifyContent:'space-around'}}>
    <div style={{width:'40%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
  <h1>ABOUT ME</h1>
  <p style={{textAlign:'justify', marginTop:'1rem'}}>
  Hello again, my name is Abbas. I am experienced in bringing designs onto the screen as a software engineer specializing in front-end development. My interest in web development started when I was still in college gaining my Information Technology degree. I liked the development field more from the related courses I took there. So then I decided to sharpen these skills by attending an online boot camp in 2021 to further learn and practice the fundamentals of HTML & CSS. With good knowledge of logical algorithms, I then attended a JS course in the boot camp and gained a certificate. Then I started learning frameworks and libraries like reactJS, tailwindCSS, chakraUI, SASS, ...etc. My main focus these days is on working on projects by myself to gain more experience. Think we'd be a good match ?
  </p>
  <div style={{position:'relative', marginTop:'2rem'}}>
  <a className='contact-button'  href="#contact" style={{textDecoration:'none', color:'#353535', borderRadius:'8px', border:'1px solid black',padding:'0.5rem'}}>Contact</a>
  <span className='contact-button-2'></span>
  </div>
    </div>
    <img src={aboutImg} style={{width:'40%'}} alt='about image' />
  </section>;
};

export default About;
