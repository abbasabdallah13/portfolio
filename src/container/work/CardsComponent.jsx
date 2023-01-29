import {React, useState, useEffect} from "react";
import pin from '../../assets/pin.png'
import {motion} from 'framer-motion'
import { IconContext } from "react-icons";
import {BiArrowBack} from 'react-icons/bi'
import { client, urlFor } from "../../client";

const CardsComponent = ({work, visibleItems}) => {
    const [flipCard, setFlipCard] = useState(false);
    const [cardId, setCardId] = useState('');
    const [currentSkills, setCurrentSkills] = useState([]);
    const [skills, setSkills] = useState([]);

    
  
    useEffect(() => {
      let varArr= [];
      currentSkills.map(el=>{varArr.push(el._ref); return ''});
      console.log(varArr);
      client.fetch(`*[_type=='skills' && _id in $ids]`,{ids: varArr}).then((data)=> setSkills(data))
    }, [currentSkills]);
    

  return (
    <>
  {work.slice(0, visibleItems).map(el => (
      <motion.div className='work-card' 
      whileHover={{rotateZ: [0,5,-5]}}
      transition={{ duration: 0.7}}
  
      >
        <div className='frontWorkCard' style={{transform:!flipCard?'rotateY(0deg)':cardId===el.title?'rotateY(180deg)':'rotateY(0deg)'}}>
          <img style={{position: 'absolute', top:'0',left:'50%', width:'min(10%,20.5px)'}} alt='pin' src={pin}  />
          <img style={{width: '100%', height:'14rem'}}  src={urlFor(el.imgurl)} alt={el.title} />
          <p style={{textAlign: 'center', fontFamily:'hepta slab'}}>{el.title}</p>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'.5rem', fontFamily:'Hepta Slab', color:'white', fontWeight:'400', fontSize:'.8rem'}}>
            <motion.a 
            whileHover={{scale: 1.2}}
            transition={{type:'spring',stiffness:200, damping: 2}}
            className='work-card-btn' href={el.giturl} target='_blank'>Visit</motion.a>

            <motion.button
            whileHover={{scale: 1.2}}
            transition={{type:'spring',stiffness:200, damping: 2}}
            style={{marginLeft:'1rem'}}
            className='work-card-btn' onClick={()=>{
                                                      setFlipCard(true);
                                                      setCardId(el.title);
                                                      setCurrentSkills(el.skillsUsed)
                                                }}>
                                                  Description
            </motion.button>
          </div>
        </div>

        <div className='backWorkCard' style={{opacity:!flipCard?'0':cardId===el.title?'1':'0',transform:!flipCard?'rotateY(-180deg)':cardId===el.title?'rotateY(0deg)':'rotateY(-180deg)', zIndex:!flipCard?'-1':cardId===el.title?'1':'-1', padding:'2.3rem 1rem 3.5rem 1rem'}}>
          <img style={{position: 'absolute', top:'0',left:'50%', width:'min(10%,20.5px)'}} alt='pin' src={pin}  />
          <div style={{border:'1px solid black', width:'100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection:'column', width:'100%', fontFamily:'Hepta Slab', padding:'0 0.5rem'}}>
              <div style={{textAlign:'center', padding:'.1rem', borderBottom:'5px solid #ffd770'}}>
                <h3 style={{color:'#000'}}>{el.title}</h3>
              </div>
              <p className="back-work-description">{el.description}</p>              
            </div>
            <div style={{fontFamily:'hepta slab', marginBottom:'.3rem'}}>
              <h5 style={{margin:'.3rem', textDecoration:'underline'}}>Skills Used:</h5>
              <div style={{display:'flex', alignItems:'center',justifyContent:'space-around', flexWrap:'wrap'}}>
                {skills.map(el=>(
                  <div style={{display:' flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <img src={urlFor(el.imgurl)} alt={el.title} style={{width:'2rem', height:'2rem'}}  />
                    <p style={{fontSize:'0.9rem'}}>{el.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
         <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><button className="back-arrow"   onClick={()=>{setFlipCard(false); setCardId('')}}><IconContext.Provider value={{size:'2rem', color:'#ffd770'}}><BiArrowBack /></IconContext.Provider></button></div>
        </div>
      </motion.div>
    ))}  
  </>)
};

export default CardsComponent;
