import React from "react";
const CartContext =React.createContext(
    {

        questions:[],
        totalquestion:0,
        addItem:(item)=>{},
        removeItem:(id)=>{}
    }

)
export default CartContext;