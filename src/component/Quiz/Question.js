import Questionfilter from "../QuestionFilter/Questionfilter";
import "./Question.css";
import Quize from "./Quize";
import{useState} from 'react';

function Question(props) {
  const questions = props.question;
  const len = Object.keys(questions).length;

  const [filtercategory,setfiltercategory]=useState("technical");

  const filterchangehandler=(selectedcategory)=>{

        setfiltercategory(selectedcategory);
  }

  const filterquestion = questions.filter((question) => {
    return question.category === filtercategory;
   });

   let length1=filterquestion.length;
   
   let questioncontent=<p>No Quiz Available!!</p>
   
   if(filterquestion.length>0)
   {
    questioncontent=filterquestion.map((ques,index)=>{
        return <Quize key={ques.id} question={ques} len={length1} index={index} />
    });
   }

  // const [choicecategory, setchoicecategory] = useState("");
  // const filterchoice = (c) => {
  //   setchoicecategory(c);
  // };
  // const filterques = questions.filter((question) => {
  //   return question.category === choicecategory;
  // });
  // let length1 = filterques.length;
  // let questioncontent = <p>There is No Quiz in {choicecategory} </sp>;
  // if (filterques.length > 0) {
  //   questioncontent = filterques.map((question, index) => {
  //     return (
  //       <Quize key={question.id} question={question} len={length1} index={index} />
  //     );
  //   });
  
  return (
    <div className="question-box">
      <div className="number-question">
        <h2>Number of Question {len}</h2>
        <h2 className="time">Time:10 Min</h2>
      </div>
     <Questionfilter question={questions} selected={filtercategory} onChangefilter={filterchangehandler}/>

      {/* <Questionfilter
        selectedcategory={choicecategory}
        onChangeFilter={filterchoice}
      /> */}
     {questioncontent} 
    

      {/* {questions.map((item, index) => {
        return (
          <Quize key={index + 1} question={item} len={len} index={index} />
        );
      })} */}
      <hr/>
    </div>
  );
    }
export default Question;
