import { useState } from "react";
import Heading from "./Heading";
import SingleFeature from "./SingleFeature";
import Particles from 'react-particles-js';

const Features =()=> {

const [list,SetList]=useState([
    {
        "id":1,
        "title":"Founder Enablement Services",
        "flag":"img-one",
        "img":"/assets/img/feature_01.jpg",
        "desc":"The Stuart Corporation will advise you on how to navigate the startup landscape as you turn early business ideas into valued business solutions with the appropriate company structure and legitimizers to enable you business to take flight."
    },
    {
        "id":2,
        "title":"Program & Project Management",
        "flag":"img-two",
        "img":"/assets/img/feature_02.jpg",
        "desc":"The Stuart Corporation has deep experience in managing programs and projects in operations and technology related change in Fortune 50 companies in a global environment. We can apply these skills to deliver value to your business initiatives to drive successful outcomes."
    },
    {
        "id":3,
        "title":"Software Develoment Services",
        "flag":"img-three",
        "img":"/assets/img/feature_03.jpg",
        "desc":"he Stuart Corporation can support your software product development initiatives, from initial business requirements through to development, testing, implementation and production support. We have deep experience managing development teams in a global marketplace and will leverage the latest Agile methods to ensure your software product is developed on time, budget, and delivers the necessary business value."
    },        
]);


    return (
        <>
    <div className="section-features animated fadeInUpBig pt-60">




	<div id="particles-js">

    <Particles
           params={{
                                "particles": {
                                    "number": {
                                        "value": 20,
                                        "density": {
                                          "enable": true,
                                          "value_area": 700
                                        }
                                    },
                                    "color": {
                                        "value": "#bb0f2e"
                                    },  
                                    "shape": {
                                        "type": "circle",
                                        "stroke": {
                                          "width": 0,
                                          "color": "#000000"
                                        },
                                        "polygon": {
                                          "nb_sides": 5
                                        },
                                    },                                                                      
                                    "opacity": {
                                        "value": 0.5,
                                        "random": false,
                                        "anim": {
                                          "enable": false,
                                          "speed": 0.1,
                                          "opacity_min": 0.1,
                                          "sync": false
                                        }
                                      },
                                      "size": {
                                        "value": 3,
                                        "random": true,
                                        "anim": {
                                          "enable": false,
                                          "speed": 10,
                                          "size_min": 0.1,
                                          "sync": false
                                        }
                                      },
                                      "line_linked": {
                                        "enable": true,
                                        "distance": 150,
                                        "color": "#bb0f2e",
                                        "opacity": 0.4,
                                        "width": 1
                                      },
                                      "move": {
                                        "enable": true,
                                        "speed": 2,
                                        "direction": "none",
                                        "random": false,
                                        "straight": false,
                                        "out_mode": "out",
                                        "bounce": false,
                                        "attract": {
                                          "enable": false,
                                          "rotateX": 600,
                                          "rotateY": 1200
                                        }
                                      }
                                    },
                                    "interactivity": {
                                      "detect_on": "canvas",
                                      "events": {
                                        "onhover": {
                                          "enable": false,
                                          "mode": "grab"
                                        },
                                        "onclick": {
                                          "enable": false,
                                          "mode": "push"
                                        },
                                        "resize": true
                                      },
                                      "modes": {
                                        "grab": {
                                          "distance": 140,
                                          "line_linked": {
                                            "opacity": 1
                                          }
                                        },
                                        "bubble": {
                                          "distance": 400,
                                          "size": 40,
                                          "duration": 2,
                                          "opacity": 8,
                                          "speed": 3
                                        },
                                        "repulse": {
                                          "distance": 200,
                                          "duration": 0.4
                                        },
                                        "push": {
                                          "particles_nb": 4
                                        },
                                        "remove": {
                                          "particles_nb": 2
                                        }
                                      }
                                    },
                                    "retina_detect": true
                                }
                                
           }
            />


    </div>

		<div className="container">
		<div className="row">			
			<Heading/>		

            {
                list.map((item,index)=> (
                    <SingleFeature key={index} item={item}/>
                ))

            }	

		</div>
	</div>



	</div>




        </>
    );
}

export default Features;