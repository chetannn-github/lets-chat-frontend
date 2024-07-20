
import { addLoggedInUser } from "../redux/userSlice";
import toast from 'react-hot-toast';

const useSignup =async (dispatch,userName, password,confirmPassword,fullName) => {
  console.log(userName,password,confirmPassword,fullName)


  try{

    const res = await fetch("http://localhost:3000/api/auth/signup",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({fullName,userName,password,confirmPassword,gender:"male"}),
          credentials: 'include',
    });

    const data = await res.json();

    if(data.error){
      throw new Error (data.error)
    }
    console.log(data);

    dispatch( addLoggedInUser(data))
    localStorage.setItem("loggedInUser",JSON.stringify(data))
  }catch(err){
    toast.error(err.message)
  }

}

export default useSignup