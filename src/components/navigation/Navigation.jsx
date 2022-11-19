import React from 'react'
import downArrow from '../../assets/Down_arrow.png';
import './navigation.css';

const navigation = () => {
  return (
    <div className='navigation_container'>
        <div className='nav_logo'>AR SHAKIR</div>
        <div className='mid_div'>
            <ul>
                <li>Product <img src={downArrow} alt="down arrow" /> </li>
                <li>Template <img src={downArrow} alt="down arrow" /></li>
                <li>Blog</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className='right_div'>
          <a href='/' >Sign In </a>
          <button className='start_free' >Start Free</button>
        </div>
    </div>
  )
}

export default navigation