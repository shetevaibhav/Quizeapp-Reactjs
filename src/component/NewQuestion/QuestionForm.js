import React, { useState } from 'react'
import ErrorModel from '../UI/ErrorModel';
import Button from "../UI/Button";
import { useRef } from 'react';
import './QuestionForm.css';

function QuestionForm(props) {

  //useRef
  
  const enteredquestionRef=useRef();
  const enteredcategoriesRef=useRef();
  const enteredoption1Ref=useRef();
  const enteredoption2Ref=useRef();
  const enteredoption3Ref=useRef();
  const enteredoption4Ref=useRef();
  const enteredanswerRef=useRef();

  const[error,setError]=useState();

  const submitquestionhandler=(event)=>
  {
      event.preventDefault();

      const enteredquestion=enteredquestionRef.current.value;
      const enteredcategories=enteredcategoriesRef.current.value;
      const enteredoption1=enteredoption1Ref.current.value;
      const enteredoption2=enteredoption2Ref.current.value;
      const enteredoption3=enteredoption3Ref.current.value;
      const enteredoption4=enteredoption4Ref.current.value;
      const enteredanswer=enteredanswerRef.current.value;
      

      if(enteredquestion.trim().length===0 ||
       enteredcategories.trim().length===0 ||
       enteredoption1.trim().length===0||enteredoption2.trim().length===0||
       enteredoption3.trim().length===0||enteredoption4.trim().length===0||
       enteredanswer.trim().length===0)
      {
        setError({title:"form is incomplete" ,message:"Please Input all details in text box!!"});
        return;
      }

      const newquestion=
        {
          //quesno:Math.floor(Math.random() * 10).toString(),
          question:enteredquestion,
          category:enteredcategories,
          option1:enteredoption1,
          option2:enteredoption2,
          option3:enteredoption3,
          option4:enteredoption4,
          correctAnswer:enteredanswer,
        };
       // console.log(newquestion);
        props.onquestionsave(newquestion);

       enteredquestionRef.current.value="";
       enteredcategoriesRef.current.value="";
       enteredoption1Ref.current.value="";
       enteredoption2Ref.current.value="";
       enteredoption3Ref.current.value="";
       enteredoption4Ref.current.value="";
       enteredanswerRef.current.value="";
        
  };
  const errorHandler=()=>
  {
      setError(null);
  }

  return (
    <React.Fragment>
      {error && <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/> }
      <form onSubmit={submitquestionhandler}>
        <h3>Hello, Welcome {props.adminName}</h3>
      <div className="newquestioncontrols">
        <div className="newquestioncontrol label">
          <label>Add Your Question</label>
          <textarea rows="5" cols="60" ref={enteredquestionRef}>
            </textarea>
        </div>
        <div className="">
        <label className="label">Categories</label>
        <select ref={enteredcategoriesRef} className="dropdown">
        <option>Select</option>
        <option value="math">Mathematic</option>
        <option value="general">General</option>
        <option value="science">Science</option>
        <option value="technical">Technology</option>
        </select>
        </div>
        <div className="newquestioncontrol input">
          <label>Option 1</label>
          <input type="text" ref={enteredoption1Ref}/>
          <label>Option 2</label>
          <input type="text" ref={enteredoption2Ref} />
          <label>Option 3</label>
          <input type="text" ref={enteredoption3Ref}/>
          <label>Option 4</label>
          <input type="text" ref={enteredoption4Ref} />
        </div>
        <div className="label">
        <label className="label">Correct Answer</label>
        <select className="dropdown" ref={enteredanswerRef}>
        <option value="">Select</option>
        <option value={enteredoption1Ref}>Option A</option>
        <option value={enteredoption2Ref}>Option B</option>
        <option value={enteredoption3Ref}>Option C</option>
        <option value={enteredoption4Ref}>Option D</option>
        </select>
        </div>
        <div className="newquestionactions">
          <Button type="submit">Add User</Button>
          <Button onClick={props.onCancel}>Cancel</Button>
          <Button onClick={props.onLogout}>LOGOUT</Button>
        </div>
      </div>
    </form>
    </React.Fragment>
  )
}

export default QuestionForm
