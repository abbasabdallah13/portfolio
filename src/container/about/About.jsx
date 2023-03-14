import React from "react";
import aboutImg from '../../assets/about-img.png'
import './about.scss'

const About = () => {
  return <section id="about" style={{fontFamily:'Hepta Slab', position: 'relative', backgroundColor: '#fff',padding:'2rem', display:'flex', alignItems:'center',justifyContent:'space-around'}}>
    <div className="about-text"  style={{width:'40%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', marginBottom:'1rem'}}>
        <h1 style={{fontSize:'2rem'}}>ABOUT ME</h1>
        <p style={{textAlign:'justify', marginTop:'1rem'}}>
        Hello again, my name is Abbas. I am experienced in bringing ideas onto the screen as a software engineer specializing in full stack development. My interest in web development started when I was still in college gaining my Information Technology degree. I liked the development field while I was attending courses such as database, JAVA, and C++. I even liked it more once I attended courses like HTML and CSS. So then I decided to sharpen these skills by attending an online boot camp where I further learned and practiced the fundamentals of HTML, CSS, JS, Frameworks, and Libararies. With good knowledge of logical algorithms, I gained certificates in the mentioned skills. My main focus these days is on working on projects by myself to gain more experience and learning more skills in the world of website technology as my learning journey never ends. Think we'd be a good match ?        </p>
        <div style={{position:'relative', marginTop:'5rem'}}>
          <a className='contact-button'  href="#contact" style={{textDecoration:'none', color:'#353535', borderRadius:'8px', border:'1px solid black',padding:'1rem'}}>Contact</a>
          <span className='contact-button-2'></span>
       </div>
    </div>
    <img src={aboutImg} style={{width:'40%'}} alt='about' />
  </section>;
};

export default About;
