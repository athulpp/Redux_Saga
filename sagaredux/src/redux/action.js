import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart=(data)=>{
    console.log("action is called",data);

    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeFromCart=(data)=>{
    console.log("remove action is called",data);

    return{
        type:REMOVE_FROM_CART,
        data:data
    }
}

export const emptyCart=(data)=>{
    console.log("empty cart action is called",data);
    return{
        type:EMPTY_CART,
        data:data
    }
}