import React from 'react'
import PortfolioCard from '../../common/portfolioCard/PortfolioCard';
import QuoteCard from '../../common/quoteCard/QuoteCard';
import './portfolioTracking.css'
import fileExp1 from '../../assets/fileExp1.png'
import fileExp2 from '../../assets/fileExp2.png'
import fileExp3 from '../../assets/fileExp3.png'

const PortfolioTracking = () => {
  return (
    <div className='portfolio_tracking'>
        <div className='section_heading'>
            <div className="left_section">
                <h1>Automated portfolio tracking</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. </p>
            </div>
            <div className='right_section'>
                <QuoteCard/>
            </div>
        </div>
        <div className='portfolio_cards'>
            <PortfolioCard 
                number='01'
                fileImage={fileExp1}
                title='Connect wallets & companies'
                subtitle='Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. '
            />
            <PortfolioCard 
                number='02'
                fileImage={fileExp2}
                title='Review
                transactions'
                subtitle='Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. '
            />
            <PortfolioCard 
                number='03'
                fileImage={fileExp3}
                title='Get income
                insights'
                subtitle='Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. '
            />
        </div>
    </div>
  )
}

export default PortfolioTracking