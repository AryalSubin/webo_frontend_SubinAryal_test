import React from 'react';
import './faq.css';
import plusSign from '../../assets/plusSign.svg';
import messageIcon from '../../assets/messageIcon.png';
import FaqCard from '../../common/faqCard/FaqCard';


const Faq = () => {

  const FAQ = [
    {
        question: "The expense windows adapted sir. Wrong Wide drawn",
        answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
    },
    {    
        question: "Six curiosity day assurance bed necessary?",
        answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
    },
    {
        question: "Produce say the ten moments parties?",
        answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
    },
    {
        question: "Simple innate summer fat appear basket his desire joy?",
        answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
    },
    {
        question: "Outward clothes promise at gravity do excited?",
        answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
    }
]

  return (
    <div className='faq_container'>
      <h1>Frequently Asked Questions</h1>
        <div className="qna_mail">
          <div className='qna_container'>
          <FaqCard
            plusSign = {plusSign}
            FAQ = {FAQ}
          />
        </div>
        <div className='mail_container'>
            <div className='moreQuestion_div'>
                <img src={messageIcon} alt="messageIcon" />
                <h3>Do you have more questions?</h3>
                <h5>
                  End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                </h5>
            </div>
            <div className='button'><p>Shoot a Direct Mail</p></div>
        </div>
      </div>
    </div>
  )
}

export default Faq