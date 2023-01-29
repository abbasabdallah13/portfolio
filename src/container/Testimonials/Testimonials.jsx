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
        
        const [testimonialsData, setTestimonialsData] = useState([]);


    useEffect(() => {  
        const query = `*[_type == 'testimonials']`;

        client.fetch(query).then(data => {setTestimonialsData(data); console.log(data)});

    }, []);

    return (
        <div id="testimonials"  className="testimonials-div">
            <h1>Testimonials</h1>
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
