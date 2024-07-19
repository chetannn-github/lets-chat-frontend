import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../customhooks/useSignup';
import { useDispatch } from 'react-redux';

const Signup = () => {
  let dispatch = useDispatch();
  let username = useRef();
  let password = useRef();
  let confirmPass = useRef();
  let gender = useRef();
  let fullName = useRef();

  let handleSignup = () =>{
    useSignup(dispatch,username.current.value, password.current.value , confirmPass.current.value, fullName.current.value)
  }


  return (
    <>
    <div id="login-container" className='w-1/3 relative  h-fit  flex justify-center flex-col'>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" ref={username} className="grow" placeholder="username" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
  
      <input type="text" ref={fullName} className="grow" placeholder="fullname" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
  <input type="password" placeholder='password'  ref= {password}className="grow" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
  <input type="password" placeholder='confirm pass' ref={confirmPass} className="grow"  />
      </label>



      <div id="gender" className='flex  gap-4'>
          <div className="form-control ">
  <label className="cursor-pointer label">
    <span className="label-text">Male</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
  </label>
</div>
<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Female</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
  </label>
</div></div>

<button onClick={handleSignup}>Signup</button>
<Link to="/login">Already User</Link>
</div>
    </>
  )
}

export default Signup