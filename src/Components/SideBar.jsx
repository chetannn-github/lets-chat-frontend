import React, { useRef } from 'react'
import {LogOut, Search} from "lucide-react"
import { useDispatch, useSelector } from 'react-redux'
import User from './User';
import useLogout from '../customhooks/useLogout';
import { addSelectedFriend } from '../redux/userSlice';

const SideBar = () => {
  let friends = useSelector((store)=>(store.user.otherUsers));
  let search = useRef(null);
  let dispatch = useDispatch();

  const handleLogout = ()=>{
      useLogout(dispatch);
  }
  let performSearch = (searchValue) =>{
    const foundFriend = friends.find((friend) => 
      friend.userName.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(foundFriend)
    if(foundFriend) dispatch(addSelectedFriend(foundFriend))
    
    search.current.value="";
  }
  let handleEnter = (e) => {
    if (e.key === 'Enter') {
     performSearch(search.current.value);
     
    }
  }

  

  let handleSearch = () => {
    performSearch(search.current.value);
    
  }


  if(!friends) return
  
  return (
    <div className=' sm:w-[20%]  bg-slate-800 p-3 flex flex-col gap-2'>
        <div id="search-bar" className='flex justify-between gap-3 items-center h-[10%]'>
        <input ref={search} type="text" placeholder="Search..." className="input input-bordered input-info w-5/6 max-w-xs rounded-3xl" onKeyDown={handleEnter} />
        <Search className='h-10 w-10 bg-cyan-900 p-2 rounded-3xl cursor-pointer' onClick={handleSearch} />

        </div>


        <div id="users" className='pt-4 h-5/6 overflow-y-scroll no-scrollbar' >
        
        {friends.map((item,index)=>(
    
          <User userData={item}/>
          ))}   
         
             
        </div>

        <div id="footer">
          <LogOut  className="cursor-pointer" onClick={handleLogout} />
        </div>
        

    </div>
  )
}

export default SideBar