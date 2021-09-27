import Breadcrumb from "../components/Common/Breadcrumb/Breadcrumb";
import Tech from "../components/Home/Tech/Tech";
import Services_list from "../components/Service/Services/Services";
import Layout from "../components/Template/Layout/Layout";

const Services =()=> {
    return ( 
        <>
        <Layout>    
        <Breadcrumb bg="bg-2" heading="SERVICES" intro="We provide a absolute list of superior digital services."/>
        <Services_list/>
        <Tech/>
        </Layout>
        </>
     );
}

export default Services;