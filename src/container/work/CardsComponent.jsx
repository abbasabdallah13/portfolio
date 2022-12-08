import {React, useState} from "react";
import pin from '../../assets/pin.png'
import {motion} from 'framer-motion'
import {FaGithub} from 'react-icons/fa'
import { IconContext } from "react-icons";
import {BiArrowBack} from 'react-icons/bi'
import { urlFor } from "../../client";

const CardsComponent = ({work}) => {
    const [flipCard, setFlipCard] = useState(false);
  const [cardId, setCardId] = useState('');

  return (
    <>
  {work.map(el => (
      <motion.div className='work-card' 
      whileHover={{rotateZ: [0,5,-5]}}
      transition={{ duration: 0.7}}
  
      >
        <div className='frontWorkCard' style={{transform:!flipCard?'rotateY(0deg)':cardId===el.title?'rotateY(180deg)':'rotateY(0deg)'}}>
          <img style={{position: 'absolute', top:'0',left:'50%', width:'10%'}} alt='pin' src={pin}  />
          <img style={{width: '100%', height:'14rem'}}  src={urlFor(el.imgurl)} alt={el.title} />
          <p style={{textAlign: 'center', fontFamily:'hepta slab'}}>{el.title}</p>
          <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', marginTop:'.5rem',  flexDirection:'column',fontFamily:'Hepta Slab', color:'white', fontWeight:'400', fontSize:'.8rem'}}>
            <motion.a 
            whileHover={{scale: 1.2}}
            transition={{type:'spring',stiffness:200, damping: 2}}
            style={{width:'fit-content',backgroundColor: '#353535', borderRadius:'10px', marginTop:'3%', textDecoration:'none',color:'white', display:'flex',padding:'3px 8px', alignItems:'center'}} href={el.giturl} target='_blank'>Visit</motion.a>

            <motion.button
            whileHover={{scale: 1.2}}
            transition={{type:'spring',stiffness:200, damping: 2}}
            style={{color:'white', border:'none', cursor:'pointer', backgroundColor: '#353535', borderRadius:'10px', marginTop:'3%', display:'flex', alignItems:'center', padding:'3px 8px'}} onClick={()=>{setFlipCard(true);setCardId(el.title)}}  >Description</motion.button>
          </div>
        </div>

        <div className='backWorkCard' style={{opacity:!flipCard?'0':cardId===el.title?'1':'0',transform:!flipCard?'rotateY(-180deg)':cardId===el.title?'rotateY(0deg)':'rotateY(-180deg)', zIndex:!flipCard?'-1':cardId===el.title?'1':'-1', padding:'1.5rem', textAlign:'center'}}>
          <img style={{position: 'absolute', top:'0',left:'50%', width:'10%'}} alt='pin' src={pin}  />
          <div style={{border:'1px solid black', width:'100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', flexDirection:'column', width:'100%', fontFamily:'Hepta Slab', padding:'0 0.5rem'}}>
              <div style={{textAlign:'center', padding:'.1rem', borderBottom:'5px solid #ffd770'}}>
                <h3 style={{color:'#000'}}>{el.title}</h3>
              </div>
              <p style={{marginTop:'.6rem', fontSize:'.7rem'}}>{el.description}</p>
            </div>
            <button style={{width:'2rem',height:'2rem', padding:'0.1rem',borderRadius:'50%', backgroundColor:'#000', display:'flex', justifyContent:'center', alignItems:'center',cursor:'pointer'}}  onClick={()=>{setFlipCard(false); setCardId('')}}><IconContext.Provider value={{size:'2rem', color:'#ffd770'}}><BiArrowBack /></IconContext.Provider></button>
          </div>
        </div>
      </motion.div>
    ))}  
  </>)
};

export default CardsComponent;
