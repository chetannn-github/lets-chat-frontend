import React from 'react'
import useGetMsg from '../customhooks/useGetMsg'
import { useDispatch } from 'react-redux';
import { addSelectedFriend } from '../redux/userSlice';


const User = ({userData}) => {
 let  {profilePic ,userName ,_id } =  userData;
//  console.log(userData)
       let dispatch = useDispatch();

    const handleClick = () => {
      useGetMsg(dispatch,_id);
      dispatch(addSelectedFriend(userData))

    }; 



  return (
    
    <div id="user" className='mb-4 flex gap-3 items-center ' onClick={()=>(handleClick())}>
                <div className="avatar online h-12 w-12">
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