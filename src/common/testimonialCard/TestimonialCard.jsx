import React from 'react';
import './testimonialCard.css';
import QuotesPng from '../../assets/quotes.png';



const TestimonialCard = ({photo, authorName, authorDescription}) => {
  return (
    <div className='testimonial_card_container'>
        <div className='quote_circle'><img src={QuotesPng} alt="" /></div>
        <div className="testimonial_card_left">
            <p className='author_description'>{authorDescription}</p>
            <p className='author_name'>{authorName}</p>
        </div>
        <div className='testimonial_card_right'>
            <img src={photo} alt="" />
        </div>

    </div>
  )
}

export default TestimonialCard