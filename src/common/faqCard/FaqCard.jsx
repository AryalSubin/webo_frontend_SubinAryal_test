import React, { useState } from 'react';
import './faqCard.css';

const FaqCard = ({plusSign, FAQ}) => {

  const [show, setShow] = useState(null);



  const clickHandler = (index) => {
    if(show === index){
      return setShow(null);
  }
  setShow(index);
  //when you first click qna_div:
  //   var show will not be equal to index
  //and index will be set to show which makes the classname answer_div_show appear
  // when clicking second time show will be equal to index and show is set to null which makes classname answer_div appear 
   
  }

  return (
    <>
    {FAQ.map((element, index)=>(
      <div className='qna_div' key={index} onClick={()=> clickHandler(index)} >
        <div className="question_div" >
          <p>{element.question}</p>
          <img src={plusSign} alt="+" width='20px' height='20px'/>
        </div>
        <div className={show === index ? 'answer_div_show' : 'answer_div'} >
            <p>
              {element.answer}   
            </p>
        </div>
      </div>
    ))}</>
  )
}

export default FaqCard