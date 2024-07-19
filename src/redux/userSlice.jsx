import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice ({
    name:"user",
    initialState:{
        loggedInUser:null,
        otherUsers:null,
        selectedFriend:null
    },
    reducers:{
        addLoggedInUser :(state,action) =>{
                state.loggedInUser = action.payload;
        },
        removeLoggedInUser :(state,action) =>{
        state.loggedInUser = null;
        },
        addOtherUsers:(state,action) =>{
            state.otherUsers = action.payload;
        },
        removeOtherUsers:(state,action) =>{
            state.otherUsers = null;
        },
        addSelectedFriend:(state,action) =>{
            state.selectedFriend = action.payload
        }
    }
});

export default userSlice.reducer;
export const {addLoggedInUser,removeLoggedInUser,addOtherUsers,removeOtherUsers, addSelectedFriend} = userSlice.actions;