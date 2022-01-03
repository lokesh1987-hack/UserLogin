
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import UserDashBord from './Components/UserDashBoard/UserDashBord';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/RegistrationPage/Register';
import Forgetpassword from './Components/ForgetPassword/Forgetpassword';
import Profile from './Components/Profile/Profile';
import { useEffect, useState } from 'react';

function App() {

  // console.log("localStorage=", localStorage.getItem("Token"))

  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    checkToken()
  }, [isLogin])

  const token = localStorage.getItem("Token")
  const checkToken = () =>{
    (token !== null)?setIsLogin(true):setIsLogin(false)
    console.log("isLogin=",isLogin)
      // {(isLogin === true)? navigate("/user/dashbord"):navigate("/userlogin")}
    if(isLogin === true)
    {
      navigate("/user/dashbord")
    }
    else
    {
      navigate("/userlogin")
    }
  }
  
  const logOut = (e) =>{
    setIsLogin(e)
  }
  const userLogin = (e)=>{
    setIsLogin(e)
  }
  

  return (
    <div className="App">
      <Routes>
        
        <Route exact path="/userlogin" element={<LoginPage Login={isLogin} userLogin={userLogin} />} />
        <Route exact path="/user/dashbord" element={<UserDashBord isLogin={isLogin} logOut={logOut} />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/register" element={<Register />} />
        <Route exact path="user/forgetpassword" element={<Forgetpassword />} />
        <Route exact path="user/dashbord/profile" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;
