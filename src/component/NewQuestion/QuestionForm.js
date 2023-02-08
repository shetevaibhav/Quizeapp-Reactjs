import React, { useState } from 'react'
import './QuestionForm.css';

function QuestionForm(props) {

  const[userInput,setuserInput]=useState({
   
    enteredquestion:"",
    enteredcategories:"",
    enteredoption1:"",
    enteredoption2:"",
    enteredoption3:"",
    enteredoption4:"",
    enteredanswer:"",
  });

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
        console.log(newquestion);
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

  return (
      <form onSubmit={submitquestionhandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Add Your Question</label>
          <textarea rows="5" cols="60" onChange={questionchangehandler} value={userInput.enteredquestion}>
            write your question for here
            </textarea>
        </div>
        <div className="">
        <label className="label">Categories</label>
        <select onChange={categorieschangehandler} value={userInput.enteredcategories} className="dropdown">
        <option>Select</option>
        <option value="technical">Technical</option>
        <option value="general">General</option>
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
          <label>Currect Answer</label>
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
          <button type="submit">Add Question</button>
        </div>
      </div>
    </form>
  )
}

export default QuestionForm
