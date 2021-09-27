import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout =({children})=> {
    return (  
        <>
        <Header/>
        <div className="main-container" id="main-container">     
        {children}
        </div>
        <Footer/>
        </>
    );
}

export default Layout;