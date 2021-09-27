import AboutBottom from "../components/About/AboutBottom/About";
import AboutTop from "../components/About/AboutTop/AboutTop";
import Testimonial from "../components/About/Testimonial/Testimonial";
import Breadcrumb from "../components/Common/Breadcrumb/Breadcrumb";
import Layout from "../components/Template/Layout/Layout";

const About =()=> {
    return ( 
        <>
        <Layout>
        <Breadcrumb bg="bg-2" heading="ABOUT US" intro="A charlotte based technology companies helping business to grow."/>
        <AboutTop/>
        <Testimonial/>
        <AboutBottom/>
        </Layout>
        </>
     );
}

export default About;