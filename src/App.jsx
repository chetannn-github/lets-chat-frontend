import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

import { useSelector } from 'react-redux';



function App() {
  

let loggedInUser = useSelector((store)=>(store.user.loggedInUser))

  return (
    <>
     <Router>
          

                <Routes>
                    <Route path="/" element={loggedInUser? <Home/> :<Login/>} />
                    <Route path="/login" element={loggedInUser? <Home/> :<Login/>} />
                    <Route path="/signup" element={loggedInUser? <Home/> :<Signup/>} />
                </Routes>
            
        </Router>
    </>
  )
}

export default App
