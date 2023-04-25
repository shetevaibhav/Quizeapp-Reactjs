import React, { useState } from 'react'
import QuestionForm from "./QuestionForm";
import classes from './NewQuestion.module.css';



function NewQuestion(props) {

  const[isEditing,setisEditing]=useState(false);
  const savequestionhandler=(enteredquestiondata)=>
  {
      const questiondata ={
         ...enteredquestiondata,
         //id: Math.floor(Math.random() * 10).toString()
      };
      props.addquestion(questiondata);
      setisEditing(true);
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
     <React.Fragment>
      <div className={classes.newquestion}>

     {/* {!isEditing &&(
          <button onClick={startEditing}>Add New Question</button>
        )
      }
      {isEditing &&(
        <QuestionForm onquestionsave={savequestionhandler} onCancel={stopEditing}/>
      )
      } */}
     {
       isEditing?<QuestionForm onquestionsave={savequestionhandler} adminName={props.admintitle} onLogout={props.onLogout} onCancel={stopEditing}/>:<button onClick={startEditing}>Add New Question</button>
     }
   
    </div>
  </React.Fragment>
  )
}

export default NewQuestion