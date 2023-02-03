import React, { useState } from 'react';
import './Quize.css';




function Quize(props) {
    //const len=Object.keys(props.question).length
    const questionno=props.question.quesno;
    const ques=props.question.question;
    const [option1,setoption1]=useState(props.question.option1);
    const [option2,setoption2]=useState(props.question.option2);
    const [option3,setoption3]=useState(props.question.option3);
    const [option4,setoption4]=useState(props.question.option4);
    

    const updatehandle1=()=>
    {
        setoption1("You Selected option 1");
       
    }
    const updatehandle2=()=>
    {
        setoption2(" You Selected option 2");
       
    }
    const updatehandle3=()=>
    {
        setoption3(" You Selected option 3");
        
    }
    const updatehandle4=()=>
    {
        setoption4(" You Selected option 4");
       
    }
  return (
    <div className='Quize-item'>
        <div className='Qustion-item'><h1>{questionno} {ques}</h1></div>
        <div className='question__option'onClick={updatehandle1}>{option1}</div>
        <div className='question__option'onClick={updatehandle2}>{option2}</div>
        <div className='question__option'onClick={updatehandle3}>{option3}</div>
        <div className='question__option'onClick={updatehandle4}>{option4}</div>
        <div className='status-Quesno'>{questionno}</div>
        
    </div>
   
  )
}

export default Quize
