import React from 'react'
import "./portfolioCard.css";

const PortfolioCard = ({number, fileImage, title, subtitle}) => {
  return (
    <div className='Portfolio_card_container'>
        <div className='number'>{number}</div>
        <div className='file_img'>
            <img src={fileImage} alt="" />
        </div>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
    </div>
  )
}

export default PortfolioCard