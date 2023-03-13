import classes from "./Carts.module.css";
import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Carts = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.questions.map((q) => {
        return (
          <CartItem
            // key={q.id}
            question={q.question}
            correctAnswer={q.correctAnswer}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCarts}>
      {cartItem}
      <div className={classes.total}></div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onCloseCarts}>
          Close
        </button>
        {/* <button className={classes.button}>Order</button> */}
      </div>
    </Modal>
  );
};

export default Carts;
