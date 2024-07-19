import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import msgReducer from "./msgSlice"
let store = configureStore({
    name:"Chatapp",
    reducer:{
        user:userReducer,
        msg:msgReducer,
    }
})


export default store;