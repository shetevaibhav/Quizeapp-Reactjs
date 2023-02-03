import './App.css';
import Question from './component/Question';




function App() {
  const question=[
    { quesno:"Q1",
      question:"what is react js ?",
      option1:"programming language",
      option2:"backend",
      option3:"frontend",
      option4:"frontendframework"
    },
    { quesno:"Q2",
      question:"what is Spring boot ?",
      option1:"programming language",
      option2:"backend framework",
      option3:"frontend framework",
      option4:"Assembly langauge"
    },
    { quesno:"Q3",
      question:"what is javascript ?",
      option1:"programming language",
      option2:"backend langauge",
      option3:"frontend lagauge",
      option4:"frontend framework"
    },
    { quesno:"Q4",
      question:"what is core java ?",
      option1:"programming language",
      option2:"backend programming",
      option3:"design language",
      option4:"frontendframework"
    },
    

  ]
  return (
    <div className="App">
     <Question question={question}/>
     
    </div>
  );
}

export default App;
