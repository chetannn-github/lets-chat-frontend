import React from 'react'
import { useDispatch } from 'react-redux';
import {addMsgs, removeMsgs} from "../redux/msgSlice"




const useGetMsg = async(dispatch,recieverId) => {
  
  try{
  
      const res = await fetch(`http://localhost:3000/api/message/${recieverId}`,{
            method:"GET",
             credentials: 'include',
             headers: {
              'Content-Type': 'application/json',
            },
      });
  
      const data = await res.json();
      console.log(data)
      dispatch(removeMsgs())
      dispatch(addMsgs(data));
    

    }catch(err){
      console.log(err.message)
    }

  }
  
 

export default useGetMsg