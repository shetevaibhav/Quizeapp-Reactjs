import Questionfilter from "../QuestionFilter/Questionfilter";
import "./Question.css";
import classes from './Question.module.css';
import Quize from "./Quize";
import{useState} from 'react';
import Button from "../UI/Button";

function Question(props) {
  const questions = props.question;
 // const len = Object.keys(questions).length;

  const [filtercategory,setfiltercategory]=useState("all");

  const filterchangehandler=(selectedcategory)=>{

        setfiltercategory(selectedcategory);
  }

  const filterquestion = questions.filter((question) => {
    return question.category === filtercategory;
   });

   let length1=filterquestion.length;

   filtercategory==="all"? length1=Object.keys(questions).length:length1=filterquestion.length

   let questioncontent=<p>No Quiz Available!!</p>
   
   if(filterquestion.length>0)
   {
    questioncontent=filterquestion.map((ques,index)=>{
        return <div><Quize key={ques.id} question={ques} len={length1} index={index}/><hr/></div> 
    });
   }


   if(filtercategory==="all")
   {
    questioncontent=questions.map((ques,index)=>{
        return <div><Quize key={ques.id} question={ques} len={length1} index={index}/><hr/></div> 
    });
   }
  
  
  return (
    <div className={classes.questionbox}>
      {props.userloginstatus && <Button className={classes.logoutbtn} onClick={props.onLogout}>LOGOUT</Button>}
      {props.userloginstatus && <h3>Hello, {props.username}</h3>}
      <div className={classes.numberquestion}>
        <h2>Number of Question {length1}</h2>
        <h2 className={classes.time}>Time:10 Min</h2>
      </div>
      
      
     <Questionfilter key={questions.id} question={questions} selected={filtercategory} onChangefilter={filterchangehandler}/>
    
     {questioncontent}  
      
    <button  className={classes.subbtn} type="submit">Submit</button>
       
    </div>
  );
    }
export default Question;
