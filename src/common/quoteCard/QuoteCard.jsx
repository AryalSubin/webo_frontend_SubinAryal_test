import React from 'react';
import './quoteCard.css';

import QuotesPng from '../../assets/quotes.png';

const QuoteCard = () => {
  return (
    <div className='card_container'>
        <div className='quote_circle'><img src={QuotesPng} alt="" /></div>
        <p className='first_para'>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.
        </p>
        <p>- Mike Taylor, Web Designer</p>
    </div>
  )
}

export default QuoteCard