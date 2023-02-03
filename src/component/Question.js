import React from 'react';
import './Question.css';
import Quize from './Quize';


function Question(props) {
   const question=props.question;
   const len=Object.keys(question).length
  
   const route=()=>
   {
     alert("Your Quize is submitted!!");
     
   }
  return (

    <div className='question-box'>
         <div className='number-question'><h2>Number of Question {len}</h2>
         <h2 className='time'>Time:10 Min</h2></div>
        {question.map((item)=>{
            return <Quize key={item.quesno} question={item}/>
        })}
        <button className='sub-btn' onClick={route}>Submit</button>
    </div>
  )
}

export default Question