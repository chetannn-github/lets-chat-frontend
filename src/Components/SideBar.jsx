import React from 'react'
import {LogOut, Search} from "lucide-react"
import { useDispatch, useSelector } from 'react-redux'
import User from './User';
import useLogout from '../customhooks/useLogout';

const SideBar = () => {
  let friends = useSelector((store)=>(store.user.otherUsers));
  let dispatch = useDispatch();

  const handleLogout = ()=>{
      useLogout(dispatch);
  }
  
 
  if(!friends) return
  
  return (
    <div className=' sm:w-[20%]  bg-slate-800 p-3 flex flex-col gap-2'>
        <div id="search-bar" className='flex justify-between gap-3 items-center h-[10%]'>
        <input type="text" placeholder="Search..." className="input input-bordered input-info w-5/6 max-w-xs rounded-3xl" />
        <Search className='h-10 w-10 bg-cyan-900 p-2 rounded-3xl' />

        </div>


        <div id="users" className='pt-4 h-5/6 overflow-y-scroll no-scrollbar' >
        
        {friends.map((item,index)=>(
    
          <User userData={item}/>
          ))}   
         
             
        </div>

        <div id="footer">
          <LogOut  className="pointer" onClick={handleLogout} />
        </div>
        

    </div>
  )
}

export default SideBar