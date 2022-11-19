import React from 'react';
import './Transaction.css';
import totalBalance from '../../assets/totalBalance.png';
import QuoteCard from '../../common/quoteCard/QuoteCard';




const PaymentTracking = () => {
  return (
    <div className='Transaction_container'>
        
        <div className='Transaction_contents'>
            <h5> WHY CHOOSE US</h5>
            <h1 className='Transaction_title'>
            Save money with proper transaction
            </h1>
            <p className='Transaction_subtitle'>
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. 
            </p>
            <QuoteCard/>
            
        </div>
        <div className='Transaction_photo'>
            <div className='total_balance_photo'><img src={totalBalance} alt="" /></div>
        </div>
    </div>
  )
}

export default PaymentTracking