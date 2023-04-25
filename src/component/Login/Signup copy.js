import React from 'react'
import { useState } from 'react';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from './firebase'

const auth=getAuth(app);
const Signup = () => {
      //email and password
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
 

const emailChangeHandler = (event) => {

    setEnteredEmail(event.target.value);
   
  };
  const passwordChangeHandler = (event) => {
  
    setEnteredPassword(event.target.value);
  
  };
  const signUpUser=()=>{
    createUserWithEmailAndPassword(
      auth,
      enteredEmail,
      enteredPassword
      ).then((value)=>alert("success"));
  };
  ////email and password handler end
  return (
    <div>
      <div>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          
        </div>
      <button onClick={signUpUser}>signup data</button> 
    </div>
  )
}

export default Signup
