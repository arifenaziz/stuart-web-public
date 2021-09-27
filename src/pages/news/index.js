import BlogControl from "../../components/Blog/BlogControl/BlogControl";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Layout from "../../components/Template/Layout/Layout";

const News =()=> {
    return ( 
        <>
        <Layout>
        <Breadcrumb bg="bg-2" heading="OUR NEWS" intro="Explore our latest news and blog."/>
        <BlogControl/>
        </Layout>
        </>
     );
}

export default News;