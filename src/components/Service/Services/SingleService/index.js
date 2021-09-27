import Link from "next/link";

const SingleService =({item})=> {

    let show=null;

    const first_part=(img)=>(
        <div className="col-md-6 no-pad">
        <div className="about-img hidden-sm hidden-xs">
            <img src={img} alt=""/>
        </div>
        </div>	
    );


    const second_part=(title,desc,items)=>(
        
        <div className="col-md-6">
        <div className="service-text pt-30">
            <h3 dangerouslySetInnerHTML={{__html: title }} ></h3>
            <p>{desc}</p>

            <ul className="service-list">
                {
                items.map((item,index)=>(
                    <li key={index}><a href=""><img src={item.img}/> {item.name} </a></li>
                ))
                }                                
            </ul>

            <div className="mt-40 float-right">            
            <Link href="/service-details" ><a className="feature-read-more"><span>Learn More</span></a></Link>  

            </div>

        </div>
    </div>        

    );

    if(item.style==="left")(
        show=(
            <>        
            {first_part(item.main_img)}
            {second_part(item.service_name,item.service_desc,item.items)}
            </>
        )
    );

    if(item.style==="right")(
        show=(
            <>                    
            {second_part(item.service_name,item.service_desc,item.items)}
            {first_part(item.main_img)}
            </>
        )
    );    


    return ( 
        <>
        
        <div className="service-area">
			<div className="container">
		
				<div className="row">

					{show}


				</div>
			</div>
		</div>


        
        </>
     );
}

export default SingleService;