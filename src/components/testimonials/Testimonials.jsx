import React from 'react';
import './testimonials.css';
import orangeSnake from '../../assets/orangeSnake.png'
import TestimonialCard from '../../common/testimonialCard/TestimonialCard';
import girl from '../../assets/girl.png';
import boy from '../../assets/boy.png';

const Testimonials = () => {
  return (
    <div className='testimonial_container'>
        <div className="testimonial_contents">
            <div className="testimonial_contents_left">
                <h1>Testimonials</h1>    
                <h5>We so opinion friends me message as delight.
                    Whole front do of plate heard oh ought. His defective nor convinced residence own.
                </h5>    
            </div>    
            <div className="testimonial_contents_right">
                <img src={orangeSnake} alt="a curve design" />    
            </div>    
        </div>
        <div className='testimonial_cards'>
            <TestimonialCard
                photo = {girl}
                authorName = 'Mike Taylor, Web Designer'
                authorDescription = 'Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.'
            />
            <TestimonialCard
                photo = {boy}
                authorName = 'Mike Taylor, Web Designer'
                authorDescription = 'Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.'
            />
        </div>        
    </div>
  )
}

export default Testimonials