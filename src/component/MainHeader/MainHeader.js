import React from 'react';
import HeaderCartButton from '../Layout/HeaderCartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  console.log(props)
  return (
    <header className={classes['main-header']}>
      <h1>QuizeMania</h1>
      {props.userloginstatus && <h3>Hello, Welcome {props.username}</h3>}
      {props.userloginstatus && <button onClick={props.onUserLogout}>logout</button>}
      {props.adminstatus && <h3>Hello, Welcome {props.admin}</h3>}
      {props.adminstatus && <button onClick={props.onAdminLogout}>logout</button>}
      {props.userloginstatus && <HeaderCartButton onClickCart={props.onShowCart}/>}
      {/* <button onClick={props.onLogout}>logout</button> */}
    </header>
  );
};
export default MainHeader;
