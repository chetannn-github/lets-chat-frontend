import React from 'react'
import SideBar from '../Components/SideBar'
import { Chats } from '../Components/Chats'
import useAllUsers from '../customhooks/useAllUsers';

const Home = () => {
  let allUsers = useAllUsers();

  return (
    <>
    <div id="home" className='relative w-[100vw] h-[100vh] bg-black  flex'>
      <SideBar/>
    <Chats/>
    </div>
    </>
  )
}

export default Home