import React from 'react';
import Blog from '../components/blog/Blog';

import Companies from "../components/companies/Companies";
import Discover from '../components/discover/Discover';
import Faq from '../components/faq/Faq';
import Features from '../components/features/Features';
import Footer from '../components/footer/Footer';
import Hero from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";
import PaymentTracking from '../components/paymentTracking/PaymentTracking';
import PortfolioTracking from "../components/portfolioTracking/PortfolioTracking";
import Statistics from '../components/statistics/Statistics';
import Testimonials from '../components/testimonials/Testimonials';
import Transaction from '../components/Transaction/Transaction';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <Navigation />
        <Hero />
        <Companies />
        <PortfolioTracking />
        <PaymentTracking />
        <Transaction />
        <Features/>
        <Testimonials/>
        <Statistics /> 
        <Blog/>
        <Faq/>
        <Discover/>
        <Footer/>
    </div>
  )
}

export default Home