import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'
import { client, urlFor } from "../../client";
import './Testimonials.scss'


const Testimonials = () => {
       const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, },
        { width: 850, itemsToShow: 1 },
        { width: 1150, itemsToShow: 1 },
        { width: 1450, itemsToShow: 1 },
        { width: 1750, itemsToShow: 1 },
       ]

        const [i, setI] = useState(0);
        
        const [testimonialsData, setTestimonialsData] = useState([]);


    useEffect(() => {  
        const query = `*[_type == 'testimonials']`;

        client.fetch(query).then(data => {setTestimonialsData(data); console.log(data)});
        // let max = testimonialsData.length;
    //     console.log(i)
    
    //     let rightArrow = document.getElementById('rightArrow');
    //     rightArrow.addEventListener('click', () => {
    //         if(i === max*100){
    //             setI(0)
    //         }else{
    //             setI(prev => prev + 100)
    //         }
    //         document.getElementById('carouselContainer').style.transform = `translateX(${i}vw)`;
    //     })

    //     let leftArrow = document.getElementById('leftArrow');
    //     leftArrow.addEventListener('click', () => {
    //         if(i === 0){
    //             setI((max-1)*100) 
    //         }else{
    //             setI(prev => prev - 100)
    //         }
    //         document.getElementById('carouselContainer').style.transform = `translateX(${i}vw)`;
    //     })
    }, []);

    return (
        <div id="testimonials"  className="testimonials-div">
            <h1>Testimonials</h1>
        {/* //     <div className="carousel-container" id="carouselContainer"> */}
        {/* //         {testimonialsData.map(el => ( */}
        {/* //             <div className="carousel-card">
        //                 <img src={urlFor(el.image)} alt={el.name} />
        //                 <p style={{width:'30vw', textAlign:'center', marginBottom:'0rem'}}>{el.quote}</p>
        //                 <h3>{el.name}</h3>
        //             </div>
        //         ))}
        //     </div> */}
        {/* //     <div style={{display: 'flex'}}> */}
        {/* //         <button id="leftArrow">&lt;</button> */}
        {/* //         <button id="rightArrow">&gt;</button> */}
        {/* //     </div> */}
            <Carousel 
                breakPoints={breakPoints}
                disableArrowsOnEnd={false}
                pagination={false}
                >
               {testimonialsData.map(el => ( 
                     <item className="carousel-card">
                         <img src={urlFor(el.image)} alt={el.name} />
                         <p style={{width:'30vw', textAlign:'center', marginBottom:'0rem', fontSize:'1rem'}}>{el.quote}</p>
                         <h3>{el.name}</h3>
                     </item>
                 ))}
            </Carousel>
    </div>
  )
};

export default Testimonials;
