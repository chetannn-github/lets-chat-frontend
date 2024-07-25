// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import socketClient, { io } from "socket.io-client";

// import { useDispatch, useSelector } from 'react-redux';
// import { addLoggedInUser, removeLoggedInUser } from './redux/userSlice';
// import { Toaster } from 'react-hot-toast';
// import { useEffect } from 'react';


// // const SERVER = "http://localhost:3000";
// // const socket = socketClient(SERVER);



// function App() {
//   let socket;
//   useEffect(() => {
//     if(me){
//   socket = io("http://localhost:3000");
//  return ()=> socket.close();
//     }else{
//      if(socket) socket.close();
//     }
//      },[]);
 
 
 
//   let dispatch = useDispatch();

//   let me = useSelector((store)=>(store.user.loggedInUser))
//   let loggedInUser = localStorage.getItem('loggedInUser');
  
//   // console.log(typeof(loggedInUser))
//   if(loggedInUser && !me){
//     loggedInUser = JSON.parse(loggedInUser);
//     dispatch(addLoggedInUser(loggedInUser))}
  

//   return (
//     <>
//     <Toaster/>
//      <Router>
          

//                 <Routes>
//                     <Route path="/" element={me? <Home/> :<Login/>} />
//                     <Route path="/login" element={me? <Home/> :<Login/>} />
//                     <Route path="/signup" element={me? <Home/> :<Signup/>} />
//                 </Routes>
            
//         </Router>
//     </>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { io } from "socket.io-client";

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { addLoggedInUser, addOnlineUser } from './redux/userSlice';
import { pushMsg } from './redux/msgSlice';

function App() {
  const dispatch = useDispatch();
  const me = useSelector((store) => store.user.loggedInUser);
  let [socket,setSocket]= useState(null);

  useEffect(() => {
    if (me) {
    const  socket = io("https://lets-chat-backend-7s3j.onrender.com",{
        query:{
          userId:me._id,
                },
      }); 
      setSocket(socket)
 
      socket.on("getOnlineUsers",(users)=>{
        console.log(users)
      dispatch(addOnlineUser(users));
    })
      return () => socket.close();
    } else {
      if (socket) socket.close();
    }


  }, [me]);

  useEffect(() => {
    let loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser && !me) {
      loggedInUser = JSON.parse(loggedInUser);
      dispatch(addLoggedInUser(loggedInUser));
    }
  }, [dispatch, me]);

  useEffect(()=>{
    socket?.on("newmsg", (msg)=>{
      dispatch(pushMsg(newmsg))
    })
  })

  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={me ? <Home /> : <Login />} />
          <Route path="/login" element={me ? <Home /> : <Login />} />
          <Route path="/signup" element={me ? <Home /> : <Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
