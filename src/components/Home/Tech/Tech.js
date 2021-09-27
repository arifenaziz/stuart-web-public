import { useState } from "react";
import OwlCarousel from 'react-owl-carousel2';
import SingleTech from "./SingleTech";

const Tech =()=> {

    const [list,SetList]=useState([
        {
            "id":1,
            "title":"IOS",
            "img":"/assets/img/tech/tech-01.png"
        },
        {
            "id":2,
            "title":"Android",
            "img":"/assets/img/tech/tech-02.png"
        },
        {
            "id":3,
            "title":"React",
            "img":"/assets/img/tech/tech-03.png"
        },
        {
            "id":4,
            "title":"Flutter",
            "img":"/assets/img/tech/tech-04.png"
        },
        {
            "id":5,
            "title":"Html5",
            "img":"/assets/img/tech/tech-05.png"
        },
        {
            "id":6,
            "title":"React Native",
            "img":"/assets/img/tech/tech-06.png"
        },
        {
            "id":7,
            "title":"Vue js",
            "img":"/assets/img/tech/tech-03.png"
        },
        {
            "id":8,
            "title":"Next js",
            "img":"/assets/img/tech/tech-04.png"
        },
                                                                        
    ])



    const options = {
        responsive: {
            0:{
                items:2,
            },
            450:{
                items:3,                
            },
            768: {
              items: 1,
            },
            1000: {
              items: 8,
            },
          },                
        loop: true,
        lazyLoad: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 8000,
        nav: false,
		dots:false, 
        navText:["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],

    };


    return ( 
        <>
        <div className="clients-area ptb-60">
        <div className="container">
            <div className="row">

                <div className="heading-area">
                    <h3>Technologies <span>We work with</span></h3>
                </div>


                <OwlCarousel
                options={options}
                className="clients-active owl-carousel"
                >

                    {
                        list.map((item,index)=>(
                            <SingleTech key={index} item={item}/>
                        ))
                    }

                </OwlCarousel>

            </div>
        </div>
    </div>
            
        </>
     );
}

export default Tech;