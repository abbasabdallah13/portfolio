import { React, useState, useEffect } from "react";

import { client, urlFor } from "../../client";

import nontechnicalSkills from '../../assets/nontechnicalskills.png';
import frontendIcon from '../../assets/frontendIcon.png';
import backendIcon from '../../assets/backendIcon.png';

const skillsCards = [
  {
    img: nontechnicalSkills,
    title: "Non technical Skills",
    text: "Creative problem-solver always trying to figure out the most advantageous approach in creating output. From designing, to developing the code, to fixing up bugs that crop up, to figuring out how to make the front-end work with the back-end. Posses verbal and vocal communication skills necessary to communicate ideas with others."
  },
  {
    img: frontendIcon,
    title: "Front-end Development",
    text: "Developing neat code in my editor with the necessary skills to test using various libraries. Illustrating design ideas, sitemaps, and process flows using pen and paper or computer software and packages."
  },
  {
    img: backendIcon,
    title: "Back-end Development",
    text: "Since the backend of an application is like its brain, it needs to be created, maintained, tested, and debugged carefully. I tend to manage its logic, database, application integration, API, and other processes that take place behind the scenes using the most efficient approaches."
  },
]


const Skills = () => {
const [skills, setSkills] = useState([]);
const [title, setTitle] = useState(false);


  useEffect(() => {
 const query = '*[_type=="skills"]';
 const someSkills = ['Redux', 'mongoDB', 'Node.JS', 'PostgreSQL', 'Next.JS', 'git', 'Figma', 'reactJS'];
 client.fetch(query).then(data => setSkills(data.filter(el => someSkills.includes(el.title) && el )));
 
}, []);



  return (
    <div id='skills' className="flex flex-col items-center mt-32 inter text-[#646463]">
      <h3 className="inter text-[22px] font-semibold uppercase text-center w-full lg:text-4xl ">skills & experience</h3>
      <div className="inter w-full mt-12 flex flex-col items-center gap-y-20 md:flex-row md:items-start md:justify-center md:gap-x-4 md:mt-4 p-8">
        {
          skillsCards.map((card, i) => (
            <div key={i} className="bg-[#FCFBFB] flex flex-col items-center p-8 md:h-[65vh] md:w-[25%] md:px-4 md:py-0 2xl:max-h-[1470px] drop-shadow-2xl">
              <div className="md:h-[23%] lg:h-[27%] 2xl:h-[31%] flex items-center justify-center w-full">
                <img src={card.img} className="w-48 md:w-24" alt="non technical skills" />
              </div>
              <h3 className="text-3xl font-semibold my-8 md:text-4xl md:text-center md:h-[8%] md:text-xl md:text-left md:mt-2 2xl:h-[6%]">{card.title}</h3>
              <p className="inter text-3xl sm:text-xl font-normal leading-[3rem] text-justify md:text-sm md:h-[60%] mt-4">{card.text}</p>
            </div>
          ))

        }
      </div>
      <div className="w-[80%] rounded-lg mt-8 md:w-[60%] lg:w-[55%] bg-[#FCFBFB] inter">
        <h3 className="m-4 text-3xl font-normal md:text-lg lowercase">Some Skills Achieved</h3>
        <div className="flex flex-wrap">
          {
            skills.map((el,i) => (
              <div key={i} className={`flex flex-col m-8 md:h-24 md:w-24 items-center justify-center relative`}>
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
