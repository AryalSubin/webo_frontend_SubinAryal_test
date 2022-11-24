import React, { useState } from 'react'
import menu from '../../assets/menu.png';
import xicon from '../../assets/xicon.png';
import './navigation.css';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navToggle = () => {
    setShowMenu(!showMenu);

  }
  return (
    <div className='navigation_container'>
        <a className='nav_logo' href="/">AR SHAKIR</a>
        <div className='mid_div'>
            <select name="Product" id="products">
                <option value="Product1">Product </option>
                <option value="Product1">Product 1</option>
                <option value="Product2">Product2</option>
                <option value="Product3">Product3</option>
            </select>
            
            <select name="Template" id="Templates">
                <option value="Template1">Template </option>
                <option value="Template1">Template 1</option>
                <option value="Template2">Template 2</option>
                <option value="Template3">Template 3</option>
            </select>
            <a className='list_mid'>Blog</a>
            <a className='list_mid'>Pricing</a>
        </div>
        <div className='right_div'>
          <a href='/' >Sign In </a>
          <button className='start_free' >Start Free</button>
        </div>
        <div className='menu' onClick={navToggle}>
          <img src={menu} alt="" />
        </div>
        <div className={showMenu? 'small_nav_div': 'hide_menu'}>
            <img src={xicon} alt="" onClick={navToggle}/>
            <select name="Product" id="products">
                <option value="Product1">Product </option>
                <option value="Product1">Product 1</option>
                <option value="Product2">Product 2</option>
                <option value="Product3">Product 3</option>
            </select>
            <select name="Template" id="Templates">
                <option value="Template1">Template </option>
                <option value="Template1">Template 1</option>
                <option value="Template2">Template 2</option>
                <option value="Template3">Template 3</option>
            </select>
            <a className='small_list_mid'>Blog</a>
            <a className='small_list_mid'>Pricing</a>
        </div>
    </div>
  )
}

export default Navigation