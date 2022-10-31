import {React, useEffect} from "react";
import Sass from '../../assets/sass-logo.png' 
import ReactImg from '../../assets/react-logo.png' 
import jQuery from '../../assets/jquery-logo.png' 
import JS from '../../assets/js-logo.png' 
import HTML from '../../assets/html-logo.png' 
import CSS from '../../assets/css-logo.png' 
import mypic from '../../assets/header-img.png'

const Header = () => {
  useEffect(() => {
    let mypic = document.getElementById('mypic');
    document.addEventListener('scroll', ()=>{
      if(window.scrollY > 0){
        mypic.style.right = '-700px';
      }else{
        mypic.style.right = '0px';

      }
    })
  }, []);
  
  return (
  <div style={{border: '1px solid black'}} >
      <img id="mypic"  style={{position: 'absolute', right: '0', height: '100%'}} src={mypic} alt='my pic' />
      <div className="header-typo" style={{margin: '15rem 35rem 0 6rem',textAlign:'center',fontFamily:'inter',textTransform:'uppercase', border: '1px solid black'}}>
      <p style={{fontSize:'1.5rem'}}>I am</p>
      <h1 style={{fontSize:'5rem'}}>Abbas{window.innerWidth<1024?<br />:null} Abdallah</h1>
      <p style={{fontSize:'1.5rem'}}>Front End Developer</p>
      </div>
  </div>);
};

export default Header;
