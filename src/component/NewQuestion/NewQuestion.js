import React, { useState } from 'react'
import QuestionForm from "./QuestionForm";
import './NewQuestion.css';

function NewQuestion(props) {

  const[isEditing,setisEditing]=useState(false);
  const savequestionhandler=(enteredquestiondata)=>
  {
      const questiondata ={
         ...enteredquestiondata,
        // id: Math.random().toString(),
      };
      props.addquestion(questiondata);
  };
  const startEditing=()=>
  {
    setisEditing(true);
  }

  const stopEditing=()=>
  {
    setisEditing(false);
  }
  // if (isEditing===false)
  //       {
  //         return <button onClick={startEditing}>Add New Question</button>;
  //       }
  //       else{
  //         return <QuestionForm onquestionsave={savequestionhandler} onCancel={stopEditing}/>;
  //       }
  return (
     <div className="new-expense">

     {/* {!isEditing &&(
          <button onClick={startEditing}>Add New Question</button>
        )
      }
      {isEditing &&(
        <QuestionForm onquestionsave={savequestionhandler} onCancel={stopEditing}/>
      )
      } */}
     {
       !isEditing?<button onClick={startEditing}>Add New Question</button>:<QuestionForm onquestionsave={savequestionhandler} onCancel={stopEditing}/>
     }
    
  </div>
  )
}

export default NewQuestion