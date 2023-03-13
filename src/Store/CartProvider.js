import React from 'react';
import CartContext from './CartContext';
import { useReducer } from 'react';

const defaultCartState={
  questions:[],
  totalquestion:0
}

const cartReducer=(state,action)=>{

    if(action.type==="ADD")
    {
      console.log(state.questions.id);
     const updatedquestions = state.questions.concat(action.question);
    // const totalquestion = state.totalquestion.concate(action.item);
      return{
        questions:updatedquestions,
        totalquestion:0
      }

    }
    return defaultCartState;
   
}


const CartProvider = (props) => {
 
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState );

    const addItemToCardHandler=(question)=>{
      
      dispatchCartAction({type:"ADD",question:question})
    }
    const removeItemToCardHandler=(id)=>{
      dispatchCartAction({type:"REMOVE",id:id})
    }

    const cartContext ={
            questions:cartState.questions,
            totalquestion:cartState.totalquestion,
            // questions:[],
            // totalquestion:0,
            addItem:addItemToCardHandler,
            removeItem:removeItemToCardHandler
        }
    
  return (

    // providing the value by using CartProvider
    <CartContext.Provider value={cartContext}>
    {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider