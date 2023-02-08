import './Quize.css';
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
    <div className='Quize-item'>
        <div className='Qustion-item'><h1>Q{props.index+1} {ques}</h1></div>
        <div className='question__option'>{option1}</div>
        <div className='question__option'>{option2}</div>
        <div className='question__option'>{option3}</div>
        <div className='question__option'>{option4}</div>
        <div className='status-Quesno'>{props.index+1} out of {props.len}</div>
        
    </div>
  )
  
}

export default Quize
