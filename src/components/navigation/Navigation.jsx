import React from 'react'
import downArrow from '../../assets/Down_arrow.png';
import './navigation.css';

const navigation = () => {
  return (
    <div className='navigation_container'>
        <a className='nav_logo' href="/">AR SHAKIR</a>
        <div className='mid_div'>
            <select name="Product" id="products">
                <option value="Product1">Product <img src={downArrow} className="arrow" alt="down arrow" /></option>
                <option value="Product1">Product 1 <img src={downArrow} className="arrow" alt="down arrow" /></option>
                <option value="Product2">Product 2<img src={downArrow} className="arrow" alt="down arrow" /></option>
                <option value="Product3">Product 3<img src={downArrow} className="arrow" alt="down arrow" /></option>
            </select>
            <select name="Template" id="Templates">
                <option value="Template1">Template <img src={downArrow} className="arrow" alt="down arrow" /></option>
                <option value="Template1">Template 1 <img src={downArrow} className="arrow" alt="down arrow" /></option>
                <option value="Template2">Template 2<img src={downArrow} className="arrow" alt="down arrow" /></option>
                <option value="Template3">Template 3<img src={downArrow} className="arrow" alt="down arrow" /></option>
            </select>
            <a className='list_mid'>Blog</a>
            <a className='list_mid'>Pricing</a>
        </div>
        <div className='right_div'>
          <a href='/' >Sign In </a>
          <button className='start_free' >Start Free</button>
        </div>
    </div>
  )
}

export default navigation