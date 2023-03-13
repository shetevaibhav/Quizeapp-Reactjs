import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Login.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
const Login = (props) => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
 

  useEffect(()=>{
  setFormIsValid(
    enteredEmail.includes('@') && enteredPassword.trim().length > 2
  );
},[enteredEmail, enteredPassword]);


  const emailChangeHandler = (event) => {

    setEnteredEmail(event.target.value);
   
  };

  const passwordChangeHandler = (event) => {

    setEnteredPassword(event.target.value);

  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 2);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    
    props.onLogin(enteredEmail, enteredPassword);
    props.onUserLogin(enteredEmail, enteredPassword);

    setEnteredEmail("");
    setEnteredPassword("");
  };

  

  return (

  //  <Card className={classes.login}>
    <Card className={`${classes.login} ${
     emailIsValid === false ? classes.invalid :''}
    ${ props.signups ===true ? classes.dislogin:''
    }`}>
    <button type="submit" onClick={props.signup} className={classes.btnsignup}>SIGN UP</button>
    <form onSubmit={submitHandler}>
    <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}>
          
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        
        <div className={classes.actions}>
          <Button type="submit"  disabled={!formIsValid}>
            LOGIN
          </Button>
        </div>
      </form>
   </Card>
  )
}

export default Login