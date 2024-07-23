import React, { useEffect } from 'react'
import useGetMsg from '../customhooks/useGetMsg'
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedFriend } from '../redux/userSlice';


const User = ({userData}) => {
 let  {profilePic ,userName ,_id } =  userData;
//  let onlineUserIdArray =useSelector((store)=>(store.user.onlineUsers))
 let selectedFriend = useSelector((store)=>(store.user.selectedFriend))
//  console.log(userData)
       let dispatch = useDispatch();

    const handleClick = () => {
      useGetMsg(dispatch,_id);
      dispatch(addSelectedFriend(userData))

    }; 

    useEffect(() => {
      if (selectedFriend?._id === _id) {
        handleClick();
      }
    }, [selectedFriend, _id]);

  return (
    
    <div id="user" className={`mb-4 flex gap-3 items-center p-2 cursor-pointer ${_id === selectedFriend?._id ? " bg-cyan-600":""}`} onClick={()=>(handleClick())}>
                {/* <div className={`avatar ${onlineUserIdArray.includes(_id) ? "online": ""} h-12 w-12`}> */}  
                <div className={`avatar online h-12 w-12`}>
                    <div className="w-24 rounded-full">
                        <img src={`${profilePic}`} />
                    </div>
                </div>
                <div id="user-name">{userName}</div>
                
                
                <div id="emoji" className=''>🤪</div>
            </div>
           
  )
}

export default User