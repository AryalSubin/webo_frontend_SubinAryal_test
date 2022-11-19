import React from 'react';
import Companies from "../components/companies/Companies";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import PaymentTracking from '../components/paymentTracking/PaymentTracking';
import PortfolioTracking from "../components/portfolioTracking/PortfolioTracking";
import Transaction from '../components/Transaction/Transaction';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <Navigation />
        <Header />
        <Companies />
        <PortfolioTracking />
        <PaymentTracking />
        <Transaction />
    </div>
  )
}

export default Home