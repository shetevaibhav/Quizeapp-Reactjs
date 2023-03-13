import React from 'react';
import Button from '../UI/Button';
import classes from './SignUp.module.css';
import Card from '../UI/Card';
import { useState } from 'react';

const SignUp = (props) => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [enteredname, setenteredname] = useState();
    const[enteredrole,setenteredrole]=useState();

   // const [formIsValid, setFormIsValid] = useState(false);

  
   
    const emailChangeHandler = (event) => {

        setEnteredEmail(event.target.value);
       
      };
    
      const passwordChangeHandler = (event) => {
    
        setEnteredPassword(event.target.value);
    
      };

      const nameChangeHandler = (event) => {
    
        setenteredname(event.target.value);
    
      };
      const roleChangeHandler = (event) => {
    
        setenteredrole(event.target.value);
    
      };
    
      const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
      };
    
      const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 2);
      };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("--signup--")
       
        props.signupdata(enteredEmail,enteredPassword,enteredname,enteredrole)

        console.log(enteredEmail,enteredPassword,enteredname,enteredrole)
        

      };
    
  return (
    <div>
    <Card className={classes.login}>
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
       <div
         className={classes.control}>
         <label htmlFor="Name">Name</label>
         <input
           type="text"
           id="name"
           value={enteredname}
           onChange={nameChangeHandler}
         />
       </div>
       <div
         className={classes.control}>
         <label htmlFor="role">Role</label>
         <input
           type="text"
           id="role"
           value={enteredrole}
           onChange={roleChangeHandler}
         placeholder='Trainee or Trainer'/>
       </div>
       <div className={classes.actions}>
       <Button type="submit">
           Register
         </Button>
         <Button type="submit" onClick={props.signout}>
           Back To Login
         </Button>
       </div>
     </form>
  </Card>
    </div>
  )
}

export default SignUp