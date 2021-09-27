
import BlogSingle from "../../components/Blog/BlogSingle/BlogSingle";
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Layout from "../../components/Template/Layout/Layout";

const SingleNews =()=> {
    return ( 
        <>
        <Layout>
        <Breadcrumb bg="bg-2" heading="The Ultimate Renters Guide" intro="Explore our latest news and blog."/>
        <BlogSingle/>
        </Layout>
        </>
     );
}

export default SingleNews;