import {React, useState, useEffect, useRef} from "react";

import { client, urlFor } from "../../client";

import nontechnicalSkills from '../../assets/nontechnicalskills.png';
import frontendIcon from '../../assets/frontendIcon.png';
import backendIcon from '../../assets/backendIcon.png';


const Skills = () => {
const [skills, setSkills] = useState([]);
const [title, setTitle] = useState(false);


  useEffect(() => {
 const query = '*[_type=="skills"]';
 const someSkills = ['Redux', 'mongoDB', 'Node.JS', 'PostgreSQL', 'Next.JS', 'git', 'Figma', 'reactJS'];
 client.fetch(query).then(data => setSkills(data.filter(el => someSkills.includes(el.title) && el )));
 console.log(skills);
 
}, []);

const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 9 + 1) * 150;
}


const ref = useRef(null);


  return (
    <div id='skills' className="flex flex-col items-center mt-32 inter">
      <h3 className="inter text-4xl font-bold uppercase text-center w-full lg:text-4xl ">skills & experience</h3>
      <div className="inter w-full mt-12 flex flex-col items-center gap-y-20 md:flex-row md:items-start md:justify-center md:gap-x-4 md:mt-4">
        <div className="bg-[#FCFBFB] flex flex-col items-center w-[90%] px-[5%] py-8 md:h-[70vh] md:w-[25%] md:px-4 md:py-0 2xl:max-h-[1470px] drop-shadow-2xl">
          <div className="md:h-[23%] lg:h-[27%] 2xl:h-[31%] flex items-center justify-center w-full">
            <img src={nontechnicalSkills} className="w-48 md:w-24" alt="non technical skills" />
          </div>
          <h3 className="text-3xl font-semibold my-6 md:text-4xl md:text-center md:h-[8%] md:text-xl md:text-left md:my-0 2xl:h-[6%]">Non technical Skills</h3>
          <p className="inter text-2xl font-normal leading-[3rem] text-justify md:text-sm md:h-[60%]">Creative problem-solver always trying to figure out the most advantageous approach in creating output. From designing, to developing the code, to fixing up bugs that crop up, to figuring out how to make the front-end work with the back-end. <br></br><br></br> Posses verbal and vocal communication skills necessary to communicate ideas with others.</p>
        </div>

        <div className="bg-[#FCFBFB] flex flex-col items-center w-[90%] px-[5%] py-8 md:h-[70vh] md:w-[25%] md:px-4 md:py-0 2xl:max-h-[1470px] drop-shadow-2xl">
          <div className="md:h-[23%] lg:h-[27%] 2xl:h-[31%] flex items-center justify-center w-full">
            <img src={frontendIcon} className="w-48 md:w-24" alt="frontend icon" />
          </div>
          <h3 className="text-3xl font-semibold my-6 md:text-4xl md:text-center md:h-[8%] md:text-xl md:text-left md:my-0 2xl:h-[6%]">Front-end Development</h3>
          <div className=" inter text-2xl font-normal leading-[3rem] text-justify md:text-sm md:text-base md:h-[60%]">
            <p className="inter">Developing neat code in my editor with the necessary skills to test using various libraries.</p>
            <p className="mt-2 inter">Illustrating design ideas, sitemaps, and process flows using pen and paper or computer software and packages.</p>
            <p className="mt-2 inter" >Adding life to user interface elements with light animations.</p>
          </div>
        </div>

        <div className="bg-[#FCFBFB] flex flex-col items-center w-[90%] px-[5%] py-8 md:h-[70vh] md:w-[25%] md:px-4 md:py-0 2xl:max-h-[1470px] drop-shadow-2xl">
          <div className="md:h-[23%] lg:h-[27%] 2xl:h-[31%] flex items-center justify-center w-full">
            <img src={backendIcon} className="w-48 md:w-24" alt="backend icon" />
          </div>
          <h3 className="text-3xl font-semibold my-6 md:text-4xl md:text-center md:h-[8%] md:text-xl md:text-left md:my-0 2xl:h-[6%]">Back-end Development</h3>
          <p className="inter inter text-2xl font-normal leading-[3rem] text-justify md:text-sm md:text-base md:h-[60%]">Since the backend of an application is like its brain, it needs to be created, maintained, tested, and debugged carefully. I tend to manage its logic, database, application integration, API, and other processes that take place behind the scenes using the most efficient approaches.</p>
        </div>
      
      </div>
      <div className="w-[80%] rounded-lg mt-8 md:w-[60%] lg:w-[55%] bg-[#FCFBFB] inter">
        <h3 className="m-4 text-3xl font-normal md:text-lg lowercase">Some Skills Achieved</h3>
        <div className="flex flex-wrap">
          {
            skills.map((el,i) => (
              <div className={`flex flex-col m-8 md:h-24 md:w-24 items-center justify-center relative`}>
                <img className={`pop-in pop-in${i}`} onMouseEnter={()=> setTitle(true)} onMouseLeave={()=> setTitle(false)} src={urlFor(el.bubbleImg)} alt={el.title} />
                {
                  title && (
                    <p className="absolute bottom-[-1rem] cursor-pointer inter">{el.title}</p>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Skills;
