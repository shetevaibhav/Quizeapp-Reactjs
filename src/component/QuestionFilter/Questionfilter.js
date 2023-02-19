import React, {  } from 'react';
//import './Questionfilter.css';
import classes from './Questionfilter.module.css';

 function Questionfilter(props) {

        const dropdownChangeHandler = (event) => {
          props.onChangefilter(event.target.value);
        };

//         const dropdownChangeHandler = (event) => {
//           props.onChangeFilter(event.target.value);
//           //console.log(event.target.value);
//         };


  return (
    <div className="question-filter">
      {/* <div className="question-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="technical">technical</option>
          <option value="general">general</option>
        </select>
      </div> */}
       <div className={classes.numberquestion}>
        <h2>Filter by Categories</h2>
         <div className={classes.time}>
        <select className={classes.dropop} value={props.selected} onChange={dropdownChangeHandler}>
        <option value="technical">Technology</option>
        <option value="general">General</option>
        <option value="science">Science</option>
        <option value="math">Mathematic</option>
        <option value="all">All</option>
        </select>
        </div>
        </div> 
    </div>
  )
    }
export default Questionfilter;
