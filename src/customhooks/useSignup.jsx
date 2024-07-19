
import { addLoggedInUser } from "../redux/userSlice";


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
    console.log(data);

    dispatch( addLoggedInUser(data))
  }catch(err){
    console.log(err.message)
  }

}

export default useSignup