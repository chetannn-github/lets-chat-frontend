
import { addLoggedInUser } from "../redux/userSlice";
import toast from 'react-hot-toast';

const useLogin = async(dispatch,userName, password) => {
  console.log(userName,password)

  
  try{

    const res = await fetch("https://lets-chat-backend-7s3j.onrender.com/api/auth/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({userName,password}),
          credentials: 'include',
    });

    const data = await res.json();

    if(data.error){
      throw new Error (data.error)
    }

    console.log(data);
    dispatch(addLoggedInUser(data));
    localStorage.setItem("loggedInUser",JSON.stringify(data))

  }catch(err){
    console.log(err.message)
      toast.error(err.message)
  }

}

export default useLogin