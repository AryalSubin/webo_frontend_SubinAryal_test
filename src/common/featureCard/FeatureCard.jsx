import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({fileExpImg, title, subtitle }) => {
  return (
    <div className='feature_card_container'>
      {
        fileExpImg ? 
        <div className='file_img'> <img src={fileExpImg} alt="" /></div>
        : ""
      }
      {
        title ? 
        <h1>{title}</h1>
        : ""
      }
      {
        subtitle ? 
        <h5>{subtitle}</h5>
        : ""
      }
    </div>
  )
}

export default FeatureCard