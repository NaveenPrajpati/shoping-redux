import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartit:[],
};

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
       
        cartitem(state,action){
            state.cartit.push(action.payload);
        },
        cartitemR(state,action){
            console.log(action.payload)
           return state.cartit.filter((check)=>check.id !==+ action.payload);    
        },
    }
})


export const {cartitem,cartitemR}=cartSlice.actions;
export default cartSlice.reducer;