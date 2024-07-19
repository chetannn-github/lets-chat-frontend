import { createSlice } from "@reduxjs/toolkit";


const msgSlice = createSlice ({
    name:"user",
    initialState:{
        msgs:[],
        
    },
    reducers:{
        addMsgs :(state,action) =>{
                state.msgs = action.payload;
        },
        removeMsgs :(state,action) =>{
        state.msgs = [];
        },
        
    }
});

export default msgSlice.reducer;
export const {addMsgs,removeMsgs} = msgSlice.actions;