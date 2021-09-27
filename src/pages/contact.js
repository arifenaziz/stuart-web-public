import Breadcrumb from "../components/Common/Breadcrumb/Breadcrumb";
import ContactForm from "../components/Contact/ContactForm/ContactForm";
import ContactLocation from "../components/Contact/ContactLocation/ContactLocation";
import Layout from "../components/Template/Layout/Layout";

const Contact =()=> {
    return ( 
        <>
        <Layout>
        <Breadcrumb bg="bg-2" heading="CONTACT" intro="Get in Touch with us."/>     
        <ContactLocation/>   
        <ContactForm/>
        </Layout>
        </>
     );
}

export default Contact;