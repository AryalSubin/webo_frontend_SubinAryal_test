import React from 'react';
import './discover.css';
import discover1 from '../../assets/discover1.png';
import discover2 from '../../assets/discover2.png';
import discover3 from '../../assets/discover3.png';
import discover4 from '../../assets/discover4.png';
import discover5 from '../../assets/discover5.png';


const Discover = () => {
  return (
    <div className='discover_container'>
        <div className="discover_contents">
            <p className='discover_title'>Discover a better way to manage spendings</p>
            <div className='button'>
                <p>Get Started Now</p>
            </div>
            
        </div>
        <div className="discover_image1">
            <img src={discover1} alt="discover1" />
        </div>
        <div className="discover_image2">
            <img src={discover2} alt="discover2" />
        </div>
        <div className="discover_image3">
            <img src={discover3} alt="discover3" />
        </div>
        <div className="discover_image4">
            <img src={discover4} alt="discover4" />
        </div>
        <div className="discover_image5">
            <img src={discover5} alt="discover5" />
        </div>
    </div>
  )
}

export default Discover