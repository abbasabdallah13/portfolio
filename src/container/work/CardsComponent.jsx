import {React, useState, useEffect} from "react";
import {motion} from 'framer-motion'
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
    work.slice(0, visibleItems).map((el,i) =>  (
      <motion.div 
        className='relative bg-white work-card w-full max-w-[280px] h-fit min-h-[300px] min-[440px]:h-[360px] lg:h-[380px] xl:h-[420px] min-[1780px]:h-[450px] min-[1970px]:h-[490px]  shadow-cardShadowTopRight card-responsiveness' 
        whileHover={{rotateZ: [0,5,-5]}}
        transition={{ duration: 0.7}}
        key={i}
      >
        <div className='frontWorkCard w-full h-full flex flex-col items-center justify-between h-[300px] min-[440px]:h-[360px] lg:h-[380px] xl:h-[420px] min-[1780px]:h-[450px] min-[1970px]:h-[490px]' style={{transform:!flipCard?'rotateY(0deg)':cardId===el.title?'rotateY(180deg)':'rotateY(0deg)'}}>
          <div className="w-full flex flex-col items-center ">
            <img className="w-[20px] h-[20px]" src={pin} alt="pin" />
            <div className="relative w-full h-[180px] mt-2">
              <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.5)] z-10"></div>
              <img className="max-w-full max-h-full" src={urlFor(el.imgurl) } alt={el.title} />
            </div>
            <h5 className="font-catchy-mager mt-4 text-center text-black text-5xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl px-2">{el.title}</h5>
            <motion.button
              whileHover={{scale: 1.2}}
              transition={{type:'spring',stiffness:200, damping: 2}} 
              className="flex items-center gap-2 border-[2px] border-[#92611e] text-white px-2 py-[3px] rounded-lg mt-2"
              onClick={()=>{
                setFlipCard(true);
                setCardId(el.title);
                setCurrentSkills(el.skillsUsed)
              }}
            >
              <p className="text-3xl sm:text-xl lg:text-sm font-semibold text-[#534B4F] cursor-pointer capitalize">learn more</p>
              <img className="w-[2.5rem] h-[2.5rem] md:w-[1.8rem] md:h-[1.8rem] lg:w-[.9rem] lg:h-[.9rem]"  src={descriptionIcon} alt='description icon' />
            </motion.button>
          </div>
          <div className="flex gap-4 mt-4">
              <motion.a 
                href={el.siteLink}
                whileHover={{scale: 1.2}}
                transition={{type:'spring',stiffness:200, damping: 2}}
                target='_blank'
              >
                <img className="w-[3.5rem] h-[3.5rem] sm:w-10 sm:h-10 lg:w-8 lg:h-8 cursor-pointer" src={siteLink} alt='www icon' />
              </motion.a>

              <motion.a 
                href={el.giturl}
                whileHover={{scale: 1.2}}
                transition={{type:'spring',stiffness:200, damping: 2}}
                target='_blank'
              >
                <img className="w-[3.5rem] h-[3.5rem] sm:w-10 sm:h-10 lg:w-8 lg:h-8 cursor-pointer" src={gitIcon} alt='git' />
              </motion.a>
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
                    <div className="flex flex-col items-ceer w-[19%] xs:w-[24%] md:w-[24%] lg:w-[33%] pb-2">
                      <img className="w-20 h-20 xs:w-14 xs:h-14 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-8 lg:h-8 rounded-[50%] ml-[2px]" src={urlFor(el.imgurl)} alt={el.title} />
                      <p className="text-2xl xs:text-lg md:tex-sm lg:text-xs max-w-full">{el.title}</p>
                    </div>
                  )) 
                }nt
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
      )
    )}  
  </>
  )
};

export default CardsComponent;
