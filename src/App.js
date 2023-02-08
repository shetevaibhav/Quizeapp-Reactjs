import { useState } from 'react';
import './App.css';
import NewQuestion from './component/NewQuestion/NewQuestion';
import Question from './component/Quiz/Question';

function App() {

  const initquestions = [
   { id: 1, question: "What is full form of IT ?", option1: "Information Technology", option2: "Inform tech", option3: "Internal tech", option4: "All of the above" ,category:"general",correctAnswer:"Used For frontend"},
   { id: 2, question: "How much contry in word ?", option1: "200", option2: "300", option3: "276 ", option4: "none of the this",category:"general",correctAnswer:"All of the above" },
   { id: 3, question: "What is JavaScript", option1: "WebProgramming", option2: "backendprogramming", option3: "None Of the Above", option4: "Framework",category:"technical",correctAnswer:"None Of the Above" },
   { id: 4, question: "What is Java", option1: "Used For webdevelopment", option2: "use for car making", option3: "software development ", option4: "All of the above",category:"technical",correctAnswer:"Used For webdevelopment" }  ];
 
  const[question,setquestion]=useState(initquestions);

  const addquestionhandler = (question) => 
  {
    console.log(question);
    setquestion((prevState) => 
    { 
      return [question, ...prevState];
    });
    };

  return (
    <div className="App">
     <NewQuestion addquestion={addquestionhandler}/>
     <Question question={question}/>
    </div>
  );
}

export default App;
