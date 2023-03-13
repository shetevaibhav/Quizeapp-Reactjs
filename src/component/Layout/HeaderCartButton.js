import React from "react";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {

  const cartctx=useContext(CartContext);
  
  const numberquestions =cartctx.questions.length;

  return (
    <button className={classes.button} onClick={props.onClickCart}>
      <span className={classes.title}>Your wrong question</span>
      <span className={classes.badge}>{numberquestions}</span>
    </button>
  );
};
export default HeaderCartButton;
