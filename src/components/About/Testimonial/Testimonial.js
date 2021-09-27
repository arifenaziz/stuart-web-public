import { useState } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SingleTestimonial from './SingleTestimonial';

const Testimonial =()=> {


    const [list,SetList]=useState([
        {
            "id":1,
            "quote":"Lorem ipsum dolor sit amet,no sea takimata sanctus est Lorem ipsum dolor sit amet.  consetetur sadipscing elitr,  At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet,no sea takimata sanctus est At vero eos et accusam et justo duo dolores et ea rebum.",
            "img":"/assets/img/test-one.png",
            "person_name":"Kisu",
            "position":"Police"
        },
        {
            "id":2,
            "quote":"Lorem ipsum dolor sit amet,no sea takimata sanctus est Lorem ipsum dolor sit amet.  consetetur sadipscing elitr,  At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet,no sea takimata sanctus est At vero eos et accusam et justo duo dolores et ea rebum.",
            "img":"/assets/img/test-one.png",
            "person_name":"Alexis Brand Tomas",
            "position":"Rent a Appartment"
        },
                                                                        
    ])
    
    

    const options = {
        responsive: {
            0:{
				items:1
			},
			450:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
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
    
<section className="testimonial">
                <div className="container">
                     <h3>20 years of building digital products and we are
                        just getting started!
                     </h3>
                      <h5>A List of Recommandation Below</h5>
                
                </div>
		<div className="basic-testimonial-area ptb-110">
			<div className="container">
				<div className="row">
					

                <OwlCarousel
                options={options}
                className="testimonial-active owl-carousel"
                >

                    {
                        list.map((item,index)=>(
                            <SingleTestimonial key={index} item={item}/>
                        ))
                    }

                </OwlCarousel>
						

				</div>
			</div>
		</div>

	</section>
    </> 
    );
}

export default Testimonial;