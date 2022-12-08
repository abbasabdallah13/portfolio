import {React, useState, useEffect, useRef} from "react";
import { client, urlFor } from "../../client";
import {motion, useInView} from 'framer-motion'
import skillsTitle from '../../assets/workExperience.png';
import nontechnicalSkills from '../../assets/nontechnicalskills.png';
import frontendIcon from '../../assets/frontendIcon.png';
import backendIcon from '../../assets/backendIcon.png';
import './skills.scss';

const Skills = () => {
const [skills, setSkills] = useState([]);

  useEffect(() => {
 const query = '*[_type=="skills"]';
 client.fetch(query).then(data=>{setSkills(data);console.log(data)});
}, []);

const ref = useRef(null);
const isInView = useInView(ref);


  return (
    <section style={{marginTop:'5rem', height:'150vh', position:'relative'}} id='skills'>
        <div style={{position:'relative', top:'1.6rem', textAlign:'center'}}><img src={skillsTitle} alt='skills title'  /></div>
      <div style={{backgroundColor:'#37B7B3',paddingBottom:'10rem', display:'flex', justifyContent:'space-around', fontFamily:'Hepta Slab'}}>
        <div className='skills-container' >
          <img src={nontechnicalSkills} alt='non technical skills' />
          <h4>Non-technical skills:</h4>
          <p>Creative <span style={{color:'#f53083', fontWeight:'600'}}>problem-solver</span> with the ability to figure out the best approach to develop a design, to fixing up bugs that crop up, to figuring out how
            to make the front end work with the backend.
            <br/><br/>Posses<span style={{color:'#ffcf52', fontWeight:'600'}}> verbal and vocal communication skills</span> necessary
            to communicate ideas with others. 
          </p>
          <p>
            Planning and sketching using pencil and paper. 
          </p>
        </div>
        <div className='skills-container'>
          <img src={frontendIcon} alt='frontend icon'/>
          <h4>Frontend Development</h4>
          <p>
          I develop designs using the most optimized and neat code in my editor and have the necessary skills to test using various libraries.
          <br/><br/>PS. I sometimes get creative making up my own designs.
          <br/><br/><span style={{color:'#222725', fontWeight:'600'}}>Actual Work Experience:</span> 18 months
          </p>
        </div>

        <div className='skills-container'   >
          <img src={backendIcon} alt='backend icon' />
          <h4>Backend Development:</h4>
          <p> Node js is my backend language. 
          <br/><br/>I also frequently work with Sanity, an online backend solution. With it I have made data accessible in this portfolio and the Online Wedding Invitations Platform collaboration project.</p>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', position:'absolute', top:'31rem', width:'100%'}}>
        <div style={{width:'80%', backgroundColor:'#fff',  borderTopLeftRadius:'54px', borderTopRightRadius:'54px', display:'flex', flexWrap:'wrap', border:'1px solid black', paddingBottom:'2rem'}}>
          {skills.map(el=>(
            <div style={{display:'flex', flexDirection:'column', marginLeft:'5rem',marginTop:'2rem', justifyContent:'space-around', height:'5rem', alignItems:'center'}}>
              <img src={urlFor(el.imgurl)} alt={el.title} style={{width:'3rem'}}/>
              <p>{el.title}</p>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
};

export default Skills;
