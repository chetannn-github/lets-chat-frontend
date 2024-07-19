import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addOtherUsers } from '../redux/userSlice';

const useAllUsers = () => {

  let dispatch = useDispatch();






  useEffect(()=>{
    fetchUsers();
  },[]);

  let fetchUsers = async() =>{
    const response = await fetch("http://localhost:3000/api/users", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials if your server requires it
      });
    let json = await response.json();
    console.log(json);
    dispatch(addOtherUsers(json))
  }
}

export default useAllUsers