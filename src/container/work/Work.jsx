import {React, useState, useEffect} from "react";
import  {urlFor, client} from '../../client'
import pin from '../../assets/pin.png'
import './work.scss'
import {motion} from 'framer-motion'
import gitIcon from '../../assets/git-icon.png'
import {FaGithub} from 'react-icons/fa'
import { IconContext } from "react-icons";
const Work = () => {
  const [myWork, setMyWork] = useState([]);
  useEffect(() => {
    const query = '*[_type=="work"]';
    client.fetch(query).then((data)=>setMyWork(data));
  }, []);
  
    return <section style={{backgroundColor: '#00A0D2', padding:'4rem', height:'fit-content'  }} id='work'  >
    <h1 style={{fontFamily: 'Hepta Slab', color:'#000', textAlign:'center', fontSize:'2.5rem'}}>SELECTED WORK</h1>
    <div className="work-cards-container"
     >
    {myWork.map(el => (
      <motion.div className='work-card' 
      whileHover={{rotateZ: [0,5,-5]}}
      transition={{ duration: 0.7}}
  
      >
        <img style={{position: 'absolute', top:'0',left:'50%', width:'10%'}} alt='pin' src={pin}  />
        <img style={{maxWidth: '100%'}}  src={urlFor(el.imgurl)} alt={el.description} />
        <p style={{textAlign: 'center', fontFamily:'hepta slab'}}>{el.description}</p>
        <motion.a 
        whileHover={{scale: 1.2}}
        transition={{type:'spring',stiffness:200, damping: 2}}
        style={{backgroundColor: '#353535', borderRadius:'10px', marginTop:'3%',padding:'3px 8px 3px 8px ',fontFamily:'Hepta Slab', textDecoration:'none', color:'white', fontWeight:'200',fontSize: '12px', display:'flex', alignItems:'center'}} href={el.giturl} target='_blank'><IconContext.Provider value={{color:'white'}}><FaGithub /></IconContext.Provider>&nbsp;View</motion.a>
      </motion.div>
    ))}
    </div>
  </section>;
};

export default Work;
