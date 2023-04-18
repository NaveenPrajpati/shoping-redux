import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[],
    loading:false,
};

export const homeSlice=createSlice({
    name:'home',
    initialState,
    reducers:{
        load(state,action){
            state.loading=action.payload;
        },
        data(state,action){
            state.data=action.payload;        
        },
    
    }
})


export const {load,data}=homeSlice.actions;
export default homeSlice.reducer;