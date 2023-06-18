import {React, useState, useEffect, useRef} from "react";

import  { client} from '../../client'

import './work.scss'

import CardsComponent from "./CardsComponent";

import { Triangle } from "react-loader-spinner";

import { useInView } from "framer-motion";

const Work = () => {
  const [allWork, setAllWork] = useState([]);
  const [skills, setSkills] = useState([]);
  const [work, setWork] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('show all');
  const [loader, setLoader] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);
  
  
  const ref = useRef(null)
  const isInView = useInView(ref);
  
  const workCategories = ['show all','reactJS','mongoDB','NodeJS', 'sanity','Next.JS','Redux','GoogleLogin','PayPal','Stripe','Regex','Vite','Motion','tailwindCSS','SASS','ChakraUI','MUI']
  
  useEffect(() => {
    let skillsQuery, workQuery;
      workQuery = `*[_type=="work"]`;
      client.fetch(workQuery).then((data)=>{setAllWork(data); setWork(data); console.log(data)});
      skillsQuery = `*[_type=="skills"]`;
      client.fetch(skillsQuery).then((data)=>{setSkills(data); console.log(data)});
  }, []);

  useEffect(() => {
    if(currentFilter === 'show all'){
      setWork(allWork)
    }else{
      let filteredWork = allWork.filter(el => el.skillsUsed.filter(skill => skill._ref === currentFilter._id).length > 0 && el)
      setWork(filteredWork);
    }
  }, [currentFilter]);
  


  const Loading = () => {
    setLoader(true);
    setVisibleItems(0)
    setTimeout(() => {
      setLoader(false);
      setVisibleItems(2)
    }, 1500);
  }
  
    return (
    <div id='work' className="mt-12 h-fit">
        <h3 className="inter uppercase text-4xl font-bold  text-center w-full lg:text-4xl">selected work</h3>
        <p className="text-2xl inter lowercase font-medium mt-12 md:text-base ml-12 ">Filter by skill or technology:</p>
        <div className="flex flex-col items-center mt-2">
          <div className="w-[90%] md:w-[75%] flex flex-wrap gap-[3px] xl:gap-2">
            <button 
                className={`cursor-honeyjar text-md border-solid border-[1px]  ${currentFilter === 'show all' ? 'bg-[#FFD770]' : 'bg-[#EAEAEA] hover:bg-[#9C9B9B] hover:text-white'} px-4 py-[1px] cursor-pointer shadow-filterBtn xl:text-lg`}
                onClick={()=>setCurrentFilter('show all')}
            >
              show all
            </button>
            {
              skills.filter(el => workCategories.includes(el.title) && el).map((el,i) => (
                  <button 
                    className={`cursor-honeyjar text-md border-solid border-[1px] ${currentFilter === el ? 'bg-[#FFD770]' : 'bg-[#EAEAEA] hover:bg-[#9C9B9B] hover:text-white'} px-4 py-[1px] cursor-pointer shadow-filterBtn xl:text-lg`}
                    onClick={()=>setCurrentFilter(el)}
                    >
                  {el.title}
                  </button>
                ))
            }
          </div>
        </div>
        <p className="inter lowercase font-medium text-2xl ml-24 mt-8 md:text-base">showing {work.length} projects</p>
        <div className="w-full flex justify-center mt-2 mb-2">
            <div className={`flex justify-center pb-4 h-fit flex-wrap w-[80%] xs:w-[90%] gap-y-8 xs:gap-x-[4%] lg:gap-x-[2.65%] ${loader ? 'justify-center items-center' : ''}`}>
              {
                loader ? <Triangle color='#ffd770' /> : <CardsComponent visibleItems={visibleItems} work={work} /> 
              }         
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
