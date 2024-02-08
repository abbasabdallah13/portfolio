import { React, useState, useEffect } from "react";

import  { client} from '../../client'

import './work.scss'

import CardsComponent from "./CardsComponent";


const Work = () => {
  const [allWork, setAllWork] = useState([]);
  const [skills, setSkills] = useState([]);
  const [work, setWork] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('show all');
  const [visibleItems, setVisibleItems] = useState(4);
  
  
  const workCategories = ['show all','reactJS','mongoDB','NodeJS', 'sanity','Next.JS','Redux','GoogleLogin','PayPal','Stripe','Regex','Vite','Motion','tailwindCSS','SASS','ChakraUI','MUI', 'Node.JS', 'Express']
  
  useEffect(() => {
    let skillsQuery, workQuery;
      workQuery = `*[_type=="work"]`;
      client.fetch(workQuery).then((data)=>{setAllWork(data); setWork(data)});
      skillsQuery = `*[_type=="skills"]`;
      client.fetch(skillsQuery).then(data =>{ setSkills(data) });
  }, []);

  useEffect(() => {
    if(currentFilter === 'show all'){
      setWork(allWork)
    }else{
      let filteredWork = allWork.filter(el => el.skillsUsed.filter(skill => skill._ref === currentFilter._id).length > 0 && el)
      setWork(filteredWork);
    }
  }, [currentFilter, allWork]);
  

    return (
    <div id='work' className="mt-12 h-fit text-[#646463] bg-[#ffbd59] p-4">
        <h3 className="inter uppercase text-[22px] font-semibold  text-center w-full lg:text-4xl text-gray-100">selected work</h3>
        <p className="text-gray-100 text-2xl inter lowercase font-medium mt-12 md:text-base ml-12 ">Filter by skill or technology:</p>
        <div className="flex flex-col items-center mt-2">
          <div className="w-[90%] md:w-[75%] flex flex-wrap gap-[3px] xl:gap-2">
            <button 
                className={`text-4xl lg:text-base border-solid border-[#92611e] border-[1px]  ${currentFilter === 'show all' ? 'bg-[#92611e] text-white' : 'bg-[#EAEAEA] hover:bg-[#9C9B9B] hover:text-white'} px-2 cursor-pointer xl:text-lg`}
                onClick={()=>setCurrentFilter('show all')}
            >
              show all
            </button>
            {
              skills.filter(el => workCategories.includes(el.title) && el).map((el,i) => (
                  <button 
                    className={`text-4xl lg:text-base border-solid border-[#92611e] border-[1px] ${currentFilter === el ? 'bg-[#92611e] text-white' : 'bg-[#EAEAEA] hover:bg-[#92611e] hover:text-white'} px-2 cursor-pointer`}
                    onClick={()=>setCurrentFilter(el)}
                    key={i} 
                    >
                  {el.title}
                  </button>
                ))
            }
          </div>
        </div>
        <p className="text-gray-100 inter lowercase font-medium text-2xl ml-24 mt-8 md:text-base">showing {work.length} projects</p>
        <div className="w-full flex justify-center mt-2 mb-2">
            <div className={`flex justify-center pb-4 h-fit flex-wrap w-[80%] xs:w-[90%] gap-y-8 xs:gap-x-[4%] lg:gap-x-[2.65%]`}>
                <CardsComponent visibleItems={visibleItems} work={work} />          
            </div>
        </div>
        {
          visibleItems === 0 ? '' : (
            <div className="flex justify-center my-6">
              <button 
                className="w-fit inter px-4 text-4xl font-medium  lg:text-xl bg-white text-[#27283D] border-[#27283D] hover:text-white hover:bg-[#27283D] cursor-pointer"
                onClick={()=> setVisibleItems(prev =>  prev >= work.length ? prev - 4 : prev + 4)}
              >
                {visibleItems>=work.length?'Load Less':'Load More . . .'}
              </button>
            </div>
          )
        } 
    </div>
  )
};

export default Work;
