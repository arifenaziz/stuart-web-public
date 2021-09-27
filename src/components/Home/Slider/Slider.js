import OwlCarousel from 'react-owl-carousel2';
import SingleSlider from './SingleSlider';


const Slider =()=> {


	const options = {
        responsive: {
            0:{
                items:1,
            },
            600:{
                items:1,
                nav:false
            },
            1000: {
              items: 1,
            },
            1200: {
              items: 1,
            },
          },                
        loop: true,
        lazyLoad: true,
        autoplay: true,
        // autoplaySpeed: 1000,
        autoplayTimeout: 8000,
        //autoplayHoverPause: true,
        nav: true,
		dots:false, 
        navText:["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],

    };



    return (
        <>

        {/* slider start */}

		<div className="slider-section">

                

		<OwlCarousel
		options={options}
		className="slider-active owl-carousel"
		>
		
		{

		[1,2,3].map((item,index)=>(
			<SingleSlider key={index} />
		))

		}
		</OwlCarousel>

		</div>
		
        {/* slider end */}




        </>
    );
}

export default Slider;