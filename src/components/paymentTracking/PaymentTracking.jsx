import React from 'react';
import './paymentTracking.css';
import PaymentTrack from '../../assets/paymentTrack.png';
import Gologolo from '../../assets/gologolo.png';
import YellowTick from '../../assets/yellowTick.png';



const PaymentTracking = () => {
  return (
    <div className='payment_tracking_container'>
        
        <div className='payment_photo'>
            <img src={PaymentTrack} alt="" />
            <div className='gologolo'>
                <img src={Gologolo} alt="" />
            </div>
        </div>
        <div className='payment_contents'>
            <h5>WHY CHOOSE US</h5>
            <h1 className='payment_title'>
            Track your payments on the go with the best way possible
            </h1>
            <p className='payment_subtitle'>
            Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. 
            </p>
            <div className='payment_ticks'>
                <div><img src={YellowTick} alt="" /> Get Overview at a glance </div>
                <div><img src={YellowTick} alt="" /> Deoposit funds easily, securlity </div>
                <div><img src={YellowTick} alt="" /> Get Live Support </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentTracking