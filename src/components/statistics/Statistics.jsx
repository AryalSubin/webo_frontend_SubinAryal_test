import React from 'react';
import './statistics.css';
import greenStar from '../../assets/greenStar.png'
import greenUser from '../../assets/greenUser.png'
import curvyImage from '../../assets/curvyImage.png'


const Statistics = () => {
  return (
    <div className='statistics_container'>
        <div className='first_div_border'>
            <div className='stat_first'>
                <h3 className='first_p'>We speak with our powerfull statistics</h3>
            </div>
        </div>
        <div className='stat_second'>
            <h1>1M+</h1>
            <p><img src={greenUser} alt="user" />Active Users</p>
        </div>
        <div className='stat_third'>
            <h1>30K+</h1>
            <p><img src={greenStar} alt="user" />5-Stars Reviews</p>
        </div>
        <div className='stat_fourth'>
            <h1>$252M</h1>
            <p><img src={greenStar} alt="user" />Transactions</p>
        
        </div>
        <div className='stat_fifth'>
            <img src={curvyImage} alt="curvyImage" />
        </div>
    </div>
  )
}

export default Statistics