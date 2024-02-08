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

        client.fetch(query).then(data => {setTestimonialsData(data)});

    }, []);

    return (
        <div id="testimonials" className="flex flex-col justify-around items-center bg-[#e5e5e5] py-4">
            <h1 className="inter uppercase text-[22px] lg:text-4xl font-semibold text-[#646463]">TESTIMONIALS</h1>
            <Carousel 
                breakPoints={breakPoints}
                disableArrowsOnEnd={false}
                pagination={false}
                className="mt-4"
                >
               {testimonialsData.map((el,i) => ( 
                     <div className="carousel-card" key={i}>
                         <img src={urlFor(el.image)} alt={el.name} />
                         <p className="inter w-[90%] md:w-[45%] text-justify text-2xl font-normal text-[#646463] mt-2">{el.quote}</p>
                         <h3 className="inter font-semibold text-center text-[#646463] mt-2">{el.name}</h3>
                     </div>
                 ))}
            </Carousel>
    </div>
  )
};

export default Testimonials;
