import {React, useState, useEffect} from "react";
import  { client} from '../../client'
import './work.scss'
import WorkTitle from '../../assets/selectedWork.png';
import CardsComponent from "./CardsComponent";
import { Triangle } from "react-loader-spinner";
const Work = () => {
  const [work, setWork] = useState([]);
  const [currentSection, setCurrentSection] = useState('all');
  const [loader, setLoader] = useState(false);
  
  
  
  useEffect(() => {

    let query = '';
    if(currentSection === 'all'){
      query = `*[_type=="work"]`;
    }else{
      query = `*[_type=="work" && projectType=='${currentSection}']`;
    }
    client.fetch(query).then((data)=>{setWork(data); console.log(data)});

  }, [currentSection]);

  const workCategories = [
    {
      title: 'All',
      sectionVar:'all'
    },
    {
      title: 'Personal',
      sectionVar: 'personal'
    },
    {
      title:'Collaborated',
      sectionVar: 'collaborated'
    },
    {
      title:'HTML/CSS/JS',
      sectionVar: 'js'
    },
  ]

  const Loading = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }
  
    return (
    <section className="work-section"  style={{ position:'relative', height:'fit-content' }} id='work'  >
    <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
      <img src={WorkTitle} alt='title' style={{maxWidth:'70%'}} />
    </div>
    <div style={{backgroundColor:'#00A0D2', padding:'4rem', height:'fit-content'}}>
    <div style={{display:'flex', border:'1px solid black', width:'fit-content', borderRadius:'2rem', backgroundColor:'whitesmoke', overflow:'hidden', fontFamily:'Hepta Slab'}}>
      {
        workCategories.map((el,i) => (
          <div style={{borderRight:i===el.length-1?'':'1px solid black', padding:'0.5rem', backgroundColor: currentSection===el.sectionVar?'#ffd770':'transparent'}} onClick={()=>{setCurrentSection(el.sectionVar); Loading();}} >{el.title}</div>
          ))
      }
    </div>

    <div className="work-cards-container" style={{justifyContent:loader?'center':'unset', alignItems:loader?'center':'unset'}}>
      {loader ? (<Triangle color='#ffd770' />) : <CardsComponent work={work} setWork={setWork} currentSection={currentSection}  /> }
        
    </div>
    </div>
  </section>)
};

export default Work;
