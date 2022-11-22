import {React, useState, useEffect, useRef} from "react";
import { client, urlFor } from "../../client";
import {motion, useInView} from 'framer-motion'

const Skills = () => {
const [skills, setSkills] = useState([]);

  useEffect(() => {
 const query = '*[_type=="skills"]';
 client.fetch(query).then(data=>setSkills(data));
}, []);

const ref = useRef(null);
const isInView = useInView(ref);


  return <section ref={ref} id='skills'  style={{display:'flex', flexDirection:'column', padding:'4rem', alignItems:'center',fontFamily:'Hepta Slab',backgroundColor:'#ededed', height:'fit-content'}}>
<h1 style={{fontSize:'2.5rem', opacity: isInView?'1':'0',transform:isInView?'none':'translateY(80px)', transition: '1s'}}>SKILLS & EXPERIENCE </h1>
<div style={{marginLeft:'1rem',marginTop:'2rem'}}>
<h3  style={{opacity: isInView?'1':'0', transform: isInView?'none':'translateX(-15rem)', transition: '2s'}}>Non-technical skills</h3>
<p style={{marginLeft:'1rem', marginTop:'1rem', fontWeight:'600'}}>
Creative <span style={{color:'#00a0d2', fontWeight:'700'}}>problem-solver</span> with the ability to figure out the best approach to develop a design, to fixing up bugs that crop up, to figuring out how
to make the front end work with the backend.
<br/>
<br/>
Posses <span style={{color:'#f80000', fontWeight:'700'}}>verbal and vocal communication skills</span> necessary
to communicate ideas with others. 

</p>
<h3 style={{opacity: isInView?'1':'0', transform: isInView?'none':'translateX(-15rem)', transition: '2s',marginTop:'3rem'}}>Technical skills</h3>
<div style={{marginLeft:'1rem',marginTop:'1rem', display:'flex', flexWrap:'wrap'}}>
{skills.map(el=>(
  <div style={{display:'flex', flexDirection:'column', justifyContent:'cneter', alignItems:'center', marginLeft:'1rem'}}>
  <img src={urlFor(el.imgurl)} alt={el.title} style={{width: 'max(5vw,30px)', height:'max(5vw,30px)'}}   />
  <span style={{fontWeight:'600'}}>{el.title}</span>
  </div>
))}
</div>
</div>
  </section>;
};

export default Skills;
