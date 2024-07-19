
import { useDispatch } from 'react-redux'
import { removeLoggedInUser } from '../redux/userSlice';

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
   

  }catch(err){
    console.log(err.message)
  }



dispatch(removeLoggedInUser());
}

export default useLogout