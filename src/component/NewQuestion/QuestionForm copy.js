import React, { useState } from 'react'
import './QuestionForm.css';
//import ErrorModel from '../UI/ErrorModel';
import ErrorModel from '../UI/ErrorModel';
import Button from "../UI/Button";
import { useRef } from 'react';

function QuestionForm(props) {

  // const[userInput,setuserInput]=useState({
   
  //   enteredquestion:"",
  //   enteredcategories:"",
  //   enteredoption1:"",
  //   enteredoption2:"",
  //   enteredoption3:"",
  //   enteredoption4:"",
  //   enteredanswer:"",
  // });

  //useRef
  
  const enteredquestion=useRef();
  const enteredcategories=useRef();
  const enteredoption1=useRef();
  const enteredoption2=useRef();
  const enteredoption3=useRef();
  const enteredoption4=useRef();
  const enteredanswer=useRef();

  const[error,setError]=useState();

  const questionchangehandler=(event)=>
  {
    setuserInput({
      ...userInput,
      enteredquestion:event.target.value,
     
    });
  // console.log(event.target.value);
  };

  const categorieschangehandler=(event)=>{
      setuserInput({
        ...userInput,
        enteredcategories:event.target.value,
      });
     // console.log(event.target.value);
  }

  const option1changehandler=(event)=>
  {
    setuserInput({
      ...userInput,
      enteredoption1:event.target.value,
    });
   // console.log(event.target.value);
  };

  const option2changehandler=(event)=>
  {
    setuserInput({
      ...userInput,
      enteredoption2:event.target.value,
    });
    //console.log(event.target.value);
  };

  const option3changehandler=(event)=>
  {
    setuserInput({
      ...userInput,
      enteredoption3:event.target.value,
    });
  //  console.log(event.target.value);
  };

  const option4changehandler=(event)=>
  {
    setuserInput({
      ...userInput,
      enteredoption4:event.target.value,
    });
   // console.log(event.target.value);
  };

  const currectanswerchangehandler=(event)=>
  {
     setuserInput({
      ...userInput,
      enteredanswer:event.target.value,
     });
    // console.log(event.target.value);
  };

  const submitquestionhandler=(event)=>
  {
      event.preventDefault();

      if(userInput.enteredquestion.trim().length===0 ||
       userInput.enteredcategories.trim().length===0 ||
       userInput.enteredoption1.trim().length===0||userInput.enteredoption2.trim().length===0||
       userInput.enteredoption3.trim().length===0||userInput.enteredoption4.trim().length===0||
       userInput.enteredanswer.trim().length===0)
      {
        setError({title:"form is incomplete" ,message:"Please Input all details in text box!!"});
        return;
      }

      const newquestion=
        {
          //quesno:Math.floor(Math.random() * 10).toString(),
          question:userInput.enteredquestion,
          category:userInput.enteredcategories,
          option1:userInput.enteredoption1,
          option2:userInput.enteredoption2,
          option3:userInput.enteredoption3,
          option4:userInput.enteredoption4,
          correctAnswer:userInput.enteredanswer,
        };
       // console.log(newquestion);
        props.onquestionsave(newquestion);

        setuserInput({
          enteredquestion:"",
          enteredcategories:"",
          enteredoption1:"",
          enteredoption2:"",
          enteredoption3:"",
          enteredoption4:"",
          enteredanswer:"",
        });
  };
  const errorHandler=()=>
  {
      setError(null);
  }


  return (
    <div>
      {error && <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/> }
      <form onSubmit={submitquestionhandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="label">Add Your Question</label>
          <textarea rows="5" cols="60" onChange={questionchangehandler} value={userInput.enteredquestion}>
            write your question for here
            </textarea>
        </div>
        <div className="">
        <label className="label">Categories</label>
        <select onChange={categorieschangehandler} value={userInput.enteredcategories} className="dropdown">
        <option>Select</option>
        <option value="math">Mathematic</option>
        <option value="general">General</option>
        <option value="science">Science</option>
        <option value="technical">Technology</option>
        </select>
        </div>
        <div className="new-expense__control">
          <label>Option 1</label>
          <input type="text" onChange={option1changehandler} value={userInput.enteredoption1}/>
          <label>Option 2</label>
          <input type="text" onChange={option2changehandler} value={userInput.enteredoption2} />
          <label>Option 3</label>
          <input type="text" onChange={option3changehandler} value={userInput.enteredoption3} />
          <label>Option 4</label>
          <input type="text" onChange={option4changehandler} value={userInput.enteredoption4} />
        </div>
        <div className="new-expense__control">
          <label>Correct Answer</label>
          {/* <input type="text"  onChange={currectanswerchangehandler} value={userInput.enteredanswer}/> */}
        <select className="dropdown" onChange={currectanswerchangehandler} value={userInput.enteredanswer}>
        <option value="">Select</option>
        <option value={userInput.enteredoption1}>Option A</option>
        <option value={userInput.enteredoption2}>Option B</option>
        <option value={userInput.enteredoption3}>Option C</option>
        <option value={userInput.enteredoption4}>Option D</option>
        </select>
        </div>
        <div className="new-expense__actions">
          <Button type="submit">Add User</Button>
          <Button onClick={props.onCancel}>Cancel</Button>
          {/* <button onClick={props.onCancel}>Cancel</button> */}
        </div>
      </div>
    </form>
    </div>
  )
}

export default QuestionForm
