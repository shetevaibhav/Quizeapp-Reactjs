import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
 

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.question}</h2>
        <div className={classes.summary}>
          {props.correctAnswer}
        </div>
      </div>
      <div className={classes.actions}>
      </div>
    </li>
  );
};

export default CartItem;
