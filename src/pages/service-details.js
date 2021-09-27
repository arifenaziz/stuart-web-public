
import BreadcrumbSlick from "../components/Common/BreadcrumbSlick/BreadcrumbSlick";
import Services_list from "../components/Service/Services/Services";
import Layout from "../components/Template/Layout/Layout";

const ServiceDetails =()=> {
    return ( 
        <>
        <Layout>
        <BreadcrumbSlick/>
        <Services_list/>
        <div className="pb-80"></div>
        </Layout>
        </>
     );
}

export default ServiceDetails;