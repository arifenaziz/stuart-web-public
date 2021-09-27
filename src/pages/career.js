import CareerBox from "../components/Career/CareerBox/CareerBox";
import Breadcrumb from "../components/Common/Breadcrumb/Breadcrumb";
import Layout from "../components/Template/Layout/Layout";

const Career =()=> {
    return ( 
        <>
        <Layout>
        <Breadcrumb bg="bg-3" heading="CAREER" intro="Start your career with The Stuart Corporation."/>
        <CareerBox/>
        </Layout>
        </>
     );
}

export default Career;