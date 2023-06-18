import {React, useState, useEffect} from "react";
import {motion} from 'framer-motion'
import { IconContext } from "react-icons";
import {BiArrowBack} from 'react-icons/bi'
import { client, urlFor } from "../../client";
import pin from '../../assets/pin.png'
import descriptionIcon from '../../assets/descriptionIcon.png';
import siteLink from '../../assets/siteLink.png';
import gitIcon from '../../assets/githubIcon.png'

const CardsComponent = ({work, visibleItems}) => {
    const [flipCard, setFlipCard] = useState(false);
    const [cardId, setCardId] = useState('');
    const [currentSkills, setCurrentSkills] = useState([]);
    const [skills, setSkills] = useState([]);    
  
    useEffect(() => {
      let varArr= [];
      currentSkills.map(el => varArr.push(el._ref));
      client.fetch(`*[_type=='skills' && _id in $ids]`,{ids: varArr}).then((data)=> setSkills(data));
    }, [currentSkills]);
    

  return (
    <>
  {
    work.slice(0, visibleItems).map(el => (
      <motion.div 
        className='work-card w-full xs:w-[47%] sm:w-[47%] lg:w-[23%] h-[250px] xl:h-[350px] 2xl:h-[550px] md:h-[280px] shadow-cardShadowTopRight' 
        whileHover={{rotateZ: [0,5,-5]}}
        transition={{ duration: 0.7}}
      >
        <div className='frontWorkCard relative w-full flex flex-col items-center justify-between h-full' style={{transform:!flipCard?'rotateY(0deg)':cardId===el.title?'rotateY(180deg)':'rotateY(0deg)'}}>
          <div className="w-full flex flex-col items-center h-[85%] sm:h-[80%] lg:h-[85%]">
            <img className="w-[20px] h-[20px]" src={pin} alt="pin" />
            <div className="relative w-[95%] h-[55%] lg:h-[55%] xl:h-[60%] 2xl:h-[65%] mt-2">
              <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.5)] z-10"></div>
              <img className="max-w-full max-h-full" src={urlFor(el.imgurl) } alt={el.title} />
            </div>
            <h5 className="mt-2 w-[95%] text-center text-3xl font-medium md:text-lg lg:text-xs">{el.title}</h5>
            <motion.button
              whileHover={{scale: 1.2}}
              transition={{type:'spring',stiffness:200, damping: 2}} 
              className="flex items-center gap-2 bg-[#CDDC39] border-0 px-2 py-[3px] rounded-md mt-8 sm:py-0 sm: lg:mt-4"
              onClick={()=>{
                setFlipCard(true);
                setCardId(el.title);
                setCurrentSkills(el.skillsUsed)
              }}
            >
              <p className="text-2xl px-4 py-2 font-medium xs:text-2xl sm:px-2 sm:text-2xl md:text-lg lg:text-xs text-[#534B4F] cursor-pointer">description</p>
              <img className="w-[2.5rem] h-[2.5rem] md:w-[1.8rem] md:h-[1.8rem] lg:w-[.9rem] lg:h-[.9rem]"  src={descriptionIcon} alt='description icon' />
            </motion.button>
          </div>
          <div className="h-[15%] flex items-end sm:h-[20%] lg:h-[15%] lg:w-full lg:justify-center">
            <div className="flex gap-[2px]">
              <motion.a 
                href={el.siteUrl}
                whileHover={{scale: 1.2}}
                transition={{type:'spring',stiffness:200, damping: 2}}
                target='_blank'
              >
                <img className="w-[3.5rem] h-[3.5rem] sm:w-10 sm:h-10 lg:w-8 lg:h-8 cursor-pointer" src={siteLink} alt='www icon' />
              </motion.a>

              <motion.a 
                href={el.gitUrl}
                whileHover={{scale: 1.2}}
                transition={{type:'spring',stiffness:200, damping: 2}}
                target='_blank'
              >
                <img className="w-[3.5rem] h-[3.5rem] sm:w-10 sm:h-10 lg:w-8 lg:h-8 cursor-pointer" src={gitIcon} alt='git' />
              </motion.a>
            </div>
          </div> 
        </div>

        <div className='backWorkCard w-full h-full flex flex-col items-center px-2' style={{opacity:!flipCard ? '0' : cardId === el.title ? '1' : '0', transform: !flipCard ? 'rotateY(-180deg)': cardId===el.title ? 'rotateY(0deg)' : 'rotateY(-180deg)', zIndex: !flipCard ? '-1' : cardId === el.title ? '1' : '-1'}}>
          <img className="w-[20px] h-[20px]" src={pin} alt="pin" />
          <div className="flex flex-col justify-between h-full">
            <p className="text-2xl xs:text-lg md:text-sm lg:text-xs mt-2">{el.description}</p>
            <div>
              <div className="flex flex-wrap">
                {
                  skills.map(el => (
                    <div className="flex flex-col items-center w-[19%] xs:w-[24%] md:w-[24%] lg:w-[33%] pb-2">
                      <img className="w-20 h-20 xs:w-14 xs:h-14 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-8 lg:h-8 rounded-[50%] ml-[2px]" src={urlFor(el.imgurl)} alt={el.title} />
                      <p className="text-2xl xs:text-lg md:tex-sm lg:text-xs max-w-full">{el.title}</p>
                    </div>
                  )) 
                }
              </div>
              <div className="w-full flex justify-center pb-[2px]">
                <motion.button
                    whileHover={{scale: 1.2}}
                    transition={{type:'spring',stiffness:200, damping: 2}} 
                    className="cursor-pointer bg-[#EAEAEA] flex justify-center items-center border-0 rounded-[50%] p-[.2rem] mt-2 text-5xl sm:text-3xl lg:text-2xl"
                    onClick={() => setFlipCard(false)}
                  >
                    <BiArrowBack />
                </motion.button>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>

      </motion.div>
    ))}  
  </>)
};

export default CardsComponent;
