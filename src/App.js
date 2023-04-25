import { useState } from 'react';
import './App.css';
import NewQuestion from './component/NewQuestion/NewQuestion';
import Question from './component/Quiz/Question';
import Login from './component/Login/Login';
import { useEffect } from 'react';
import ErrorModel from './component/UI/ErrorModel';
import MainHeader from './component/MainHeader/MainHeader';
import Carts from './component/cart/carts';
import CartProvider from './Store/CartProvider';
import { useSelector} from 'react-redux';
import {fetchUser} from '../src/features/user/userSlice';
import {StoreUser} from '../src/features/user/userSlice';
import { useDispatch } from 'react-redux';
// import {getDatabase ,ref ,set} from'firebase/database';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from './component/Login/firebase'
import Signup from './component/Login/Signup';

const initquestions = [
  { id: 1, question: "What is full form of IT ?", option1: "Information Technology", option2: "Inform tech", option3: "Internal tech", option4: "All of the above" ,category:"general",correctAnswer:"Internal tech"},
  { id: 2, question: "How much contry in word ?", option1: "200", option2: "300", option3: "276 ", option4: "none of the this",category:"general",correctAnswer:"300" },
  { id: 3, question: "What is JavaScript", option1: "WebProgramming", option2: "backendprogramming", option3: "None Of the Above", option4: "Framework",category:"technical",correctAnswer:"WebProgramming" },
  { id: 4, question: "What is Java", option1: "Used For webdevelopment", option2: "use for car making", option3: "software development ", option4: "All of the above",category:"technical",correctAnswer:"software development" }
];
//const db=getDatabase(app);

const auth=getAuth(app);
const admin={id:"1",email:"pankaj@gmail.com",password:"123",name:"pankaj",role:"trainer"}
const trainee={id:"2",email:"aman@gmail.com",password:"123",name:"aman",role:"trainee"}

function App() {
 
  // const dispatch=useDispatch();
  // const user = useSelector((state)=>state.user)
  const[question,setQuestion]=useState(initquestions);

  // useEffect(()=>{
  //   dispatch(fetchUser());
  //   setQuestion(user.users)
  //   },[question,user]);

  //const[loginpass,setloginpass]=useState(usrlog.loginusers);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userisLoggedIn, setuserIsLoggedIn] = useState(false);
  const [error,setError]=useState();
  const [iscarts,setcarts]=useState(false);
  const [signup,setsignup]=useState(false);


  
  localStorage.setItem("user", JSON.stringify(trainee));
  localStorage.setItem("myAdmin", JSON.stringify(admin));
  
  
  let myadmin=localStorage.getItem("myAdmin")
  let myad=JSON.parse(myadmin);
  let adminname=myad.name;

  let myuser=localStorage.getItem("user")
  let myusr=JSON.parse(myuser);
  let myusername=myusr.name;



  const addquestionhandler = (question) => 
  {
    setQuestion((prevState) => 
    { 
      return [question, ...prevState];
    });
    
    console.log(question)

    dispatch(StoreUser(question));
  };

    useEffect(()=>{
      
      let loginStatus=localStorage.getItem("login")
      
        if(loginStatus==="1")
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
    const loginHandler = (email,password) => {
           //trainer data fetching
    // if(email===myad.email && password===myad.password && myad.role==="trainer")
    // {
    //   setIsLoggedIn(true);
    //   localStorage.setItem("adminloginStatus","1");
    // }
    // else if(email!==myad.email && password!==myad.password)
    // {
    //   setError({title:"Username & Password is Invalid !!" ,message:"Please Input all details in text box!!"});
    //   setIsLoggedIn(false)
    // }
    // else
    // { setIsLoggedIn(false)}
   // dispatch(fetchUser());
    signInWithEmailAndPassword(auth,email,password)
    .then((value)=>{
        setError(null)
       
        setIsLoggedIn(true);
        localStorage.setItem("login","1");  
    })
    .catch((err)=>{
      setError({title:"Username & Password is Invalid !!" ,message:"Please Input all details in text box!!"});})
      setIsLoggedIn(false)
  };

  //trainee login 
  const userloginHandler = (email, password) => {
      if(email===myusr.email && password===myusr.password && myusr.role==="trainee")
      
      {
        setuserIsLoggedIn(true);
        localStorage.setItem("userloginStatus","1");
      }
      else if(email!==myuser.email && password!==myusr.password&& myusr.role==="trainee")
     
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
      localStorage.removeItem("login");
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
      {!isLoggedIn && !userisLoggedIn&& <Login  onLogin={loginHandler} signup={signUp} signups={signup} onUserLogin={userloginHandler}/>}
      {signup && <Signup signout={signout}/>}
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
