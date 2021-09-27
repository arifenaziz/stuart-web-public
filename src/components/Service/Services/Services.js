import { useState } from "react";
import SingleService from "./SingleService";

const Services =()=> {

    const [list,SetList]=useState([
        {
            "id":1,
            "style":"left",
            "main_img":"/assets/img/service-one.jpg",
            "service_name":"Founder Enablement <span>Services</span>",
            "service_desc":"The Stuart Corporation will advise you on how to navigate the startup landscape as you turn early business ideas into valued business solutions with the appropriate company structure and legitimizers to enable you business to take flight.",
            "items":[
                {
                    "id":"1",
                    "name":"Ideation and Company Structure",
                    "img":"/assets/img/services-icon/hierarchical.svg",
                },
                {
                    "id":"2",
                    "name":"Ideation and Company Structure",
                    "img":"/assets/img/services-icon/strategy.svg",
                },
                {
                    "id":"3",
                    "name":"Funding",
                    "img":"/assets/img/services-icon/share.svg",
                },                                

            ]
        },
        {
            "id":2,
            "style":"right",
            "main_img":"/assets/img/service-two.jpg",
            "service_name":"Program & Project <span>Management</span>",
            "service_desc":"The Stuart Corporation has deep experience in managing programs and projects in operations and technology related change in Fortune 50 companies in a global environment. We can apply these skills to deliver value to your business initiatives to drive successful outcomes.",
            "items":[
                {
                    "id":"1",
                    "name":"Program Planning",
                    "img":"/assets/img/services-icon/algorithm.svg",
                },
                {
                    "id":"2",
                    "name":"Program Management",
                    "img":"/assets/img/services-icon/programmer.svg",
                },                               

            ]
        },
        {
            "id":2,
            "style":"left",
            "main_img":"/assets/img/service-three.jpg",
            "service_name":"Software Develoment<span>Services</span>",
            "service_desc":"The Stuart Corporation can support your software product development initiatives, from initial business requirements through to development, testing, implementation and production support. We have deep experience managing development teams in a global marketplace and will leverage the latest Agile methods to ensure ......",
            "items":[
                {
                    "id":"1",
                    "name":"Software Design and Development",
                    "img":"/assets/img/services-icon/application.svg",
                },
                {
                    "id":"2",
                    "name":"Mobile Application Design and Development",
                    "img":"/assets/img/services-icon/mobile.svg",
                },                               

            ]
        }                


    ])

    return ( 
        <>
<section className="pt-90">

    {
        list.map((item,index)=>(
            <SingleService key={index} item={item}/>
        ))
    }

</section>        
        </>
     );
}

export default Services;