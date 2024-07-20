
import { useDispatch } from 'react-redux'
import { removeLoggedInUser } from '../redux/userSlice';
import toast from 'react-hot-toast';

const useLogout = async(dispatch) => {
 
// api call 
try{

    const res = await fetch("http://localhost:3000/api/auth/logout",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          
          credentials: 'include',
    });

    const data = await res.json();
    console.log(data);
    if(data.error){
      throw new Error (data.error)
    }

  }catch(err){
    toast.error(err.message)
  }



dispatch(removeLoggedInUser());
localStorage.removeItem("loggedInUser")
}

export default useLogout