import { useState } from 'react';
import './App.css';
import NewQuestion from './component/NewQuestion/NewQuestion';
import Question from './component/Quiz/Question';
import Login from './component/Login/Login';
import { useEffect } from 'react';
import ErrorModel from './component/UI/ErrorModel';
import MainHeader from './component/MainHeader/MainHeader';
import SignUp from './component/SignUp/SignUp';
import Carts from './component/cart/carts';
import CartProvider from './Store/CartProvider';



const initquestions = [
  { id: 1, question: "What is full form of IT ?", option1: "Information Technology", option2: "Inform tech", option3: "Internal tech", option4: "All of the above" ,category:"general",correctAnswer:"Internal tech"},
  { id: 2, question: "How much contry in word ?", option1: "200", option2: "300", option3: "276 ", option4: "none of the this",category:"general",correctAnswer:"300" },
  { id: 3, question: "What is JavaScript", option1: "WebProgramming", option2: "backendprogramming", option3: "None Of the Above", option4: "Framework",category:"technical",correctAnswer:"WebProgramming" },
  { id: 4, question: "What is Java", option1: "Used For webdevelopment", option2: "use for car making", option3: "software development ", option4: "All of the above",category:"technical",correctAnswer:"software development" }
];
const admin={id:"1",email:"pankaj@gmail.com",password:"123",name:"pankaj",role:"trainer"}
const user={id:"2",email:"aman@gmail.com",password:"123",name:"aman",role:"trainee"}

function App() {

  const[question,setquestion]=useState(initquestions);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userisLoggedIn, setuserIsLoggedIn] = useState(false);
  const[error,setError]=useState();
  const [signup,setsignup]=useState(false);
  const [iscarts,setcarts]=useState(false);
  
 
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
    setquestion((prevState) => 
    { 
      return [question, ...prevState];
    });
  };

    useEffect(()=>{
      
        let adminStatus=localStorage.getItem("adminloginStatus")
          if(adminStatus==="1")
          {
            setIsLoggedIn(true);
          }

    },[]);

    useEffect(()=>{
          let userStatus=localStorage.getItem("userloginStatus")
          if(userStatus==="1")
          {
            setuserIsLoggedIn(true);
          }
   },[]);

            //login trainer 
    const loginHandler = (email, password) => {
           //trainer data fetching
    if(email===myad.email && password===myad.password && myad.role==="trainer")
    {
      setIsLoggedIn(true);
      localStorage.setItem("adminloginStatus","1");
    }
    else if(email!==myad.email && password!==myad.password)
    {
      setError({title:"Username & Password is Invalid !!" ,message:"Please Input all details in text box!!"});
      setIsLoggedIn(false)
    }
    else
    { setIsLoggedIn(false)}
  };

  //trainee login 
  const userloginHandler = (email, password) => {

    //trainee data fetching
      if(email===myusr.email && password===myusr.password && myusr.role==="trainee")
      {
        setuserIsLoggedIn(true);
        localStorage.setItem("userloginStatus","1");
      }
      else if(email!==myuser.email && password!==myusr.password)
    {
      setError({title:"Username & Password is Invalid !!" ,message:"Please Input all details in text box!!"});
      setIsLoggedIn(false)
    }
  else
  {setuserIsLoggedIn(false);}
};

  //logout-trainer
    const logoutHandler = () =>
     {
      localStorage.removeItem("myAdmin")
      setIsLoggedIn(false);
      localStorage.removeItem("user")
      localStorage.removeItem("adminloginStatus");
      setuserIsLoggedIn(false);
    };

    //logout-trainee
    const userlogoutHandler = () => 
    {
      localStorage.removeItem("user")
      setuserIsLoggedIn(false);
      localStorage.removeItem("userloginStatus");
      localStorage.removeItem("myAdmin")
      setIsLoggedIn(false);
    };

     const signUp=()=>{
     setsignup(true);
    }
    const signout=()=>
   {
    setsignup(false);
   }
    const errorHandler=()=>
    {
        setError(null);
    }

    const showCartsHandler=()=>
    {
      setcarts(true)
    }

    const hideCartsHandler=()=>
    {
      setcarts(false)
    }
  return (
    <CartProvider>
       <div className='App'>
     
      {userisLoggedIn && iscarts && <Carts onCloseCarts={hideCartsHandler}/> }

      {!isLoggedIn && !userisLoggedIn && <h1 className='headname'>Login to System to Use Quize Mania</h1>}
      {error && <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/> }
      {!isLoggedIn && !userisLoggedIn&& <Login onLogin={loginHandler} signup={signUp} signups={signup} onUserLogin={userloginHandler}/>}
      {signup && <SignUp signout={signout}/>}
      {isLoggedIn && <NewQuestion addquestion={addquestionhandler} admintitle={adminname} onLogout={logoutHandler}/>}
      {isLoggedIn && <Question question={question}/>}
      {isLoggedIn && <MainHeader admin={adminname} adminstatus={isLoggedIn} onAdminLogout={logoutHandler} />}
      {userisLoggedIn && <MainHeader username={myusername} userloginstatus={userisLoggedIn} onUserLogout={userlogoutHandler} onShowCart={showCartsHandler}/>}
      {userisLoggedIn && <Question question={question} username={myusername} userloginstatus={userisLoggedIn} onLogout={userlogoutHandler}/>}
      
      {/* <Question question={question}/> */}
       </div> 
       </CartProvider>
      
  );
}

export default App;
