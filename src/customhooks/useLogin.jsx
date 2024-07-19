
import { addLoggedInUser } from "../redux/userSlice";


const useLogin = async(dispatch,userName, password) => {
  console.log(userName,password)

  
  try{

    const res = await fetch("http://localhost:3000/api/auth/login",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({userName,password}),
          credentials: 'include',
    });

    const data = await res.json();
    console.log(data);
    dispatch( addLoggedInUser(data))

  }catch(err){
    console.log(err.message)
  }

}

export default useLogin