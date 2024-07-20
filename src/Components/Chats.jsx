import React, { useEffect, useRef } from 'react'
import {Send} from "lucide-react"
import {useDispatch, useSelector} from "react-redux"
import useSendMsg from "../customhooks/useSendMsg"
import socketClient from "socket.io-client";
import io from 'socket.io-client';



export const Chats = () => {
  


  let dispatch = useDispatch();
  let msgs = useSelector((store)=>(store.msg.msgs));
  // let me = useSelector((store)=>(store.user.loggedInUser))
  let me = localStorage.getItem('loggedInUser');
  if(me){me= JSON.parse(me)}

  // console.log(me)
  let selectedFriend = useSelector((store)=>(store.user.selectedFriend))
  let sendMsg = useRef();

  // console.log(typeof(me))
  let handleSendMsg = () =>{
      useSendMsg(dispatch,sendMsg.current.value,selectedFriend._id);
      sendMsg.current.value = ''; 
  }

  let handleEnter = (e) => {
    if (e.key === 'Enter') {
      useSendMsg(dispatch,sendMsg.current.value, selectedFriend._id);
      sendMsg.current.value = ''; // Clear input after sending message
    }
  }



 
  if(!selectedFriend){
    return
  }


  return (
    <div className=' relative  sm:w-[80%]  flex flex-col p-6'>

        <div id="title" className='mb-2'>
            <h3>To : {selectedFriend?.fullName}</h3>
        </div>

        <div id="conversation" className=' flex flex-col gap-3  w-[100%] h-5/6 relative overflow-y-scroll  no-scrollbar scroll-m-4'>
          

          {msgs&&msgs.map((msg)=>(
             <div className={`chat ${msg.senderId ===me._id  ? "chat-end" : "chat-start"}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={`${msg.senderId !==me._id  ? selectedFriend.profilePic : me.profilePic }`} />
              </div>
            </div>
            <div className="chat-bubble">{msg.message}</div>
          </div>
          ))}
          
         
            
      
        </div>


      <div id="type-msg" className='mt-5 '>
        <label className="input input-bordered flex items-center gap-2">
        <input ref={sendMsg} type="text" className="grow" placeholder="Type your msg......" onKeyDown={handleEnter} />
        <Send onClick={handleSendMsg} className='cursor-pointer' />
        </label>
      </div>

    </div>
  )
}
