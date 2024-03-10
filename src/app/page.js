import Image from "next/image";
import styles from "./page.module.css";
import Head from 'next/head';
import CallToAction from './components/CallToAction';
import SalesPitch from './components/SalesPitch.js';
import ProcessDetails from './components/ProcessDetails';
import ForbesStatistic from './components/ForbesStatistic';
import ContactSection from './components/ContactSection';
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="full-width-container">
      <Head>
        <title>Provision Pest Control</title>
      </Head>
      <div className="main-wrapper">
        <Header/>
        <CallToAction />

        <SalesPitch />

        <ProcessDetails />

        <ForbesStatistic />

        <ContactSection />
      </div>
      
    </div>
  );
};

export default Home;