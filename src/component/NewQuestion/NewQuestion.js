import React from 'react'
import QuestionForm from "./QuestionForm";
import './NewQuestion.css';

function NewQuestion(props) {

  const savequestionhandler=(enteredquestiondata)=>
  {
      const questiondata ={
         ...enteredquestiondata,
        // id: Math.random().toString(),
      };
      props.addquestion(questiondata);
  };

  return (
    <div className="new-expense">
      <QuestionForm onquestionsave={savequestionhandler}/>
  </div>
  )
}

export default NewQuestion