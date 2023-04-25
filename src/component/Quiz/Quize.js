//import { useState } from 'react';
import './Quize.css';
import classes from './Quize.module.css';

function Quize(props) {
    
    const ques=props.question.question;
  
    const option1=props.question.option1;
    const option2=props.question.option2;
    const option3=props.question.option3;
    const option4=props.question.option4;
    const correctAnswer=props.question.correctAnswer;
    
    
    const answerHandler =(event)=>{
       
        const quesansw={
            question:ques,
            option1:option1,
            option2:option2,
            option3:option3,
            option4:option4,
            correctAnswer:correctAnswer,
            answer:event.target.value
        }
        props.onSubmit(quesansw);
        
    }

  return (
    <div className={classes.Quizeitem}>
        <div className={classes.Qustionitem}><h1>Q{props.index+1} {ques}</h1></div>
        <option className={classes.questionoption} onClick={answerHandler}>{option1}</option>
        <option className={classes.questionoption} onClick={answerHandler}>{option2}</option>
        <option className={classes.questionoption} onClick={answerHandler}>{option3}</option>
        <option className={classes.questionoption} onClick={answerHandler}>{option4}</option>
        <option className={classes.statusQuesno}>{props.index+1} out of {props.len}</option>
      
    </div>
  )
  
}

export default Quize
