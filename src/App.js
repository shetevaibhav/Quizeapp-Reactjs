import { useState } from 'react';
import './App.css';
import NewQuestion from './component/NewQuestion/NewQuestion';
import Question from './component/Quiz/Question';
import Login from './component/Login/Login';
import { useEffect } from 'react';
import ErrorModel from './component/UI/ErrorModel';

const initquestions = [
  { id: 1, question: "What is full form of IT ?", option1: "Information Technology", option2: "Inform tech", option3: "Internal tech", option4: "All of the above" ,category:"general",correctAnswer:"Used For frontend"},
  { id: 2, question: "How much contry in word ?", option1: "200", option2: "300", option3: "276 ", option4: "none of the this",category:"general",correctAnswer:"All of the above" },
  { id: 3, question: "What is JavaScript", option1: "WebProgramming", option2: "backendprogramming", option3: "None Of the Above", option4: "Framework",category:"technical",correctAnswer:"None Of the Above" },
  { id: 4, question: "What is Java", option1: "Used For webdevelopment", option2: "use for car making", option3: "software development ", option4: "All of the above",category:"technical",correctAnswer:"Used For webdevelopment" }
];

const admin={
    id:"1",
    email:"pankaj@gmail.com",
    password:"123",
    name:"pankaj",
    role:"trainer"
    }

    const user={
      id:"2",
      email:"aman@gmail.com",
      password:"123",
      name:"aman",
      role:"trainee"
      }

function App() {

  const[question,setquestion]=useState(initquestions);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userisLoggedIn, setuserIsLoggedIn] = useState(false);
  //const[error,setError]=useState();

  
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("myAdmin", JSON.stringify(admin));
  let myadmin=localStorage.getItem("myAdmin")
  let myad=JSON.parse(myadmin);
  let adminname=myad.name;

  let myuser=localStorage.getItem("user")
  let myusr=JSON.parse(myuser);
  let myusername=myusr.name;

  const addquestionhandler = (question) => 
  {
    //console.log(question);
    setquestion((prevState) => 
    { 
      return [question, ...prevState];
    });
    };

    useEffect(()=>{
         if(localStorage.getItem('myAdmin')!==null)
         {}
    });

    useEffect(()=>{
      if(localStorage.getItem('user')!==null)
      {}
   });

    //login trainer 
  const loginHandler = (email, password) => {

      //trainer data fetching
    if(email===myad.email && password===myad.password && myad.role==="trainer")
    {
      setIsLoggedIn(true);
    }
    else
    { 
      
      setIsLoggedIn(false)
     // setError({title:"Username & password invalid !!" ,message:"Please provide valid details!!"});
    }

  };

  //trainee login 
  const userloginHandler = (email, password) => {

    //trainee data fetching
      if(email===myusr.email && password===myusr.password && myusr.role==="trainee")
      {
        setuserIsLoggedIn(true);
      }
  else
  {
    
    setuserIsLoggedIn(false);
    //setError({title:"Username & password invalid !!" ,message:"Please provide valid details!!"});
  }

};

  //logout-trainer
    const logoutHandler = () =>
     {
      localStorage.removeItem("myAdmin")
      setIsLoggedIn(false);
      localStorage.removeItem("user")
      setuserIsLoggedIn(false);
    };

    //logout-trainee
    const userlogoutHandler = () => 
    {
      localStorage.removeItem("user")
      setuserIsLoggedIn(false);
      localStorage.removeItem("myAdmin")
      setIsLoggedIn(false);
    };
    // const errorHandler=()=>
    // {
    //     setError(null);
    // }
  return (
    <div className="App">
      <h1>Login to System to Use Quize App</h1>
      {/* {error && <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/> } */}
      {!isLoggedIn && !userisLoggedIn&& <Login onLogin={loginHandler} onUserLogin={userloginHandler}/>}
      {isLoggedIn && <NewQuestion addquestion={addquestionhandler} admintitle={adminname} onLogout={logoutHandler}/>}
      {isLoggedIn && <Question question={question}/>}
      {userisLoggedIn && <Question question={question} username={myusername} userloginstatus={userisLoggedIn} onLogout={userlogoutHandler}/>}
      {/* <Question question={question}/> */}
    </div>
  );
}

export default App;
