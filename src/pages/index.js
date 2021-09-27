//import Head from 'next/head'
//import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';
import About from '../components/Home/About/About';
import Features from '../components/Home/Features/Features';
import Partner from '../components/Home/Partner/Partner';
import Tech from '../components/Home/Tech/Tech';

//import Slider from "../components/Home/Slider/Slider";
import Layout from "../components/Template/Layout/Layout";

const Slider = dynamic(() => import('../components/Home/Slider/Slider'),{
  ssr: false
})

const Home = () => {
  return (
    <>
    <Layout>
    <Slider/>
    <Features/>
    <About/>
    <Tech/>
    <Partner/>
    </Layout>
    </>
  )
}

export default Home;
