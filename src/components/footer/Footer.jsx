import React from 'react';
import './Footer.css';
import linkedIn from '../../assets/linkedIn.png';
import messenger from '../../assets/messenger.png';
import twitter from '../../assets/twitter.png';
import twoo from '../../assets/twoo.png';


const Footer = () => {
  return (
    <div className='footer_container'>
        <div className="upper_div">
            <div className='first_div'>
                <h2 className='company_name'> AR Shakir </h2>
                <h5>Finance helps companies manage payments easily </h5>
                <div className='socials'>
                    <a href="https://www.linkedin.com" target='_blank' ><img src={linkedIn} alt="linkedIn" /></a>
                    <a href="https://www.facebook.com/messages/t"><img src={messenger} alt="linkedIn" /></a>
                    <a href="https://twitter.com/home"><img src={twitter} alt="linkedIn" /></a>
                    <a href="https://www.linkedin.com"><img src={twoo} alt="linkedIn" /></a>
                </div>
            </div>
            <div className="second_div">
                <h2>Company</h2>
                <p>About  Us</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Pricing</p>
            </div>
            <div className="third_div">
                <h2>Resources</h2>
                <p>Proposal Template</p>
                <p>Invoice Template</p>
                <p>Turorial</p>
                <p>How to write a contract</p>
            </div>
            <div className="fourth_div">
                <h2>Join Our Newsletter</h2>
                <div className='subscribe_container'>
                    <input type="email" placeholder="Your email address" />
                    <button>Subscribe</button>
                </div>
                <h5>* Will send you weekly updates for your better finance management.</h5>
            </div>
            
        </div>
        <div className="lower_div">
            <p>Copyright @ AR Shakir. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;