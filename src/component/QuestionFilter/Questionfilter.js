import React, {  } from 'react';
import './Questionfilter.css';

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
       <div className='number-question'>
        <h2>Filter by Categories</h2>
         <div className='time'>
        <select className='dropop' value={props.selected} onChange={dropdownChangeHandler}>
        <option value="technology">Technology</option>
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
