import React, { useRef } from 'react'
import {Send} from "lucide-react"
import {useSelector} from "react-redux"
import useSendMsg from "../customhooks/useSendMsg"

export const Chats = () => {
  let msgs = useSelector((store)=>(store.msg.msgs));
  let me = useSelector((store)=>{store.user.loggedInUser._id})
  let selectedFriend = useSelector((store)=>(store.user.selectedFriend))
  let sendMsg = useRef();

  let handleSendMsg = () =>{
      useSendMsg(sendMsg.current.value,selectedFriend._id)
  }


  console.log(msgs)
  return (
    <div className=' relative  sm:w-[80%]  flex flex-col p-6'>

        <div id="title" className='mb-2'>
            <h3>To : {selectedFriend?.fullName}</h3>
        </div>

        <div id="conversation" className=' flex flex-col gap-3  w-[100%] h-5/6 relative overflow-y-scroll  no-scrollbar scroll-m-4'>
          

          {msgs&&msgs.map((msg)=>(
             <div className={`chat ${msg.senderId === me ? "chat-end" : "chat-start"}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="chat-bubble">{msg.message}</div>
          </div>
          ))}
          
         
            
      
        </div>


    <div id="type-msg" className='mt-5 '>
        <label className="input input-bordered flex items-center gap-2">
        <input ref={sendMsg} type="text" className="grow" placeholder="Type your msg......" />
        <Send onClick={handleSendMsg} />
        </label>
    </div>

    </div>
  )
}
