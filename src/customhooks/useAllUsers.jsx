import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addOtherUsers } from '../redux/userSlice';

const useAllUsers = () => {

  let dispatch = useDispatch();






  useEffect(()=>{
    fetchUsers();
  },[]);

  let fetchUsers = async() =>{
    const response = await fetch("https://lets-chat-backend-7s3j.onrender.com/api/users", {
        method: 'GET',
        
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials if your server requires it
        mode:'cors'
      });
    let json = await response.json();
    console.log(json);
    dispatch(addOtherUsers(json))
  }
}

export default useAllUsers