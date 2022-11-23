import React from 'react';
import './hero.css';
import playBtn from '../../assets/Play_Button.png';
import tickMark from '../../assets/Tick_mark.png';
import xxPhoto from '../../assets/xx.png';
import handCards from '../../assets/handCards.png';
import dotdot from '../../assets/dotdot.png';
import color_splash from '../../assets/color_splash.png';


const hero = () => {
  return (   
    <div className='hero'>
        <div className='container_header'>
        <div className='left_div'>
            <div className='contents'>
                <h1>Managing freelance payments has never been easier</h1>
                <h5>Yet bed any for travelling assistance indulgence
                     unpleasing. Not thoughts all exercise blessing.</h5>
                
                <div className='CTA'>
                    <button className='btn'>Get Started</button>
                    <img src={playBtn} alt="button" />
                    <a href='/'>See How It Works</a>
                </div>
                <div className='check_tick' >
                    <p><img src={tickMark} alt="tickmark" />  Free Register </p>
                    <p><img src={tickMark} alt="tickmark" />  Great Service </p>
                </div>
            </div>
            <div className='dotdot'><img src={dotdot} alt="dotdot" /></div>

        </div>
        <div className='right_div'>
            <div className='hand_cards'><img  src={handCards} alt="handcards" /></div>
            <div className='color_splash'><img  src={color_splash} alt="colorsplash" /></div>
            <div className='xxPhoto'><img src={xxPhoto} alt="xxphoto" /></div>
        </div>
    </div>
    </div>        
  )
}

export default hero;