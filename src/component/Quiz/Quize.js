import './Quize.css';
import classes from './Quize.module.css';
function Quize(props) {
    //const len=Object.keys(props.question).length
    //const questionno=props.question.quesno;
    const ques=props.question.question;
   // const index=indexof(props.question);
    const option1=props.question.option1;
    const option2=props.question.option2;
    const option3=props.question.option3;
    const option4=props.question.option4;
  return (
    <div className={classes.Quizeitem}>
        <div className={classes.Qustionitem}><h1>Q{props.index+1} {ques}</h1></div>
        <div className={classes.questionoption}>{option1}</div>
        <div className={classes.questionoption}>{option2}</div>
        <div className={classes.questionoption}>{option3}</div>
        <div className={classes.questionoption}>{option4}</div>
        <div className={classes.statusQuesno}>{props.index+1} out of {props.len}</div>
        
    </div>
  )
  
}

export default Quize
