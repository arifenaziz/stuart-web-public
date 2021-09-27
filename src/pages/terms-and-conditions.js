import Breadcrumb from "../components/Common/Breadcrumb/Breadcrumb";
import Content from "../components/Common/Content/Content";
import Layout from "../components/Template/Layout/Layout";

const TnC =()=> {
    return ( 
        <>
        <Layout>
        <Breadcrumb bg="bg-3" heading="Terms and conditions" intro="Please check our latest terms and conditions"/>
        <Content/>
        </Layout>
        </>
     );
}

export default TnC;