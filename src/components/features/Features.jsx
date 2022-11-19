import React from 'react'
import FeatureCard from '../../common/featureCard/FeatureCard';
import './features.css';
import fileExp1 from '../../assets/fileExp1.png'
import fileExp2 from '../../assets/fileExp2.png'
import minusMinus from '../../assets/minusMinus.png'

const Features = () => {
  return (
    <div className='features_container'>
        <div className='features_contents'>
            <div className='features_texts'>
                <h1>Features that blows mind</h1>
                <h5>We so opinion friends me message as delight. Whole front do of plate
                     heard oh ought. His defective nor convinced residence own.
                </h5>
                
            </div>
        </div>
        <div className="feature_cards">
            <FeatureCard 
                fileExpImg = {fileExp2}
                title = "Really boy law county she unable her sister"
                subtitle = "We so opinion friends me message as delight. Whole front do of plate heard oh ought."

            />
            <FeatureCard 
                fileExpImg = {fileExp1}
                title = "Among sex are leave law built now"
                subtitle = "We so opinion friends me message as delight. Whole front do of plate heard oh ought."

            />
            <div className='small_divs'>
                <FeatureCard 
                    title = "Merits behind on afraid or warmly"
                />
                <FeatureCard 
                    title = "Believing neglected so so allowance existence"
                />
            </div>
        </div>
        <div className='minusImage'>
            <img src={minusMinus} alt="" />
        </div>
    </div>
  )
}

export default Features;