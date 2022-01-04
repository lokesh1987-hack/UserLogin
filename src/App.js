
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import UserDashBord from './Components/UserDashBoard/UserDashBord';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/RegistrationPage/Register';
import Forgetpassword from './Components/ForgetPassword/Forgetpassword';
import Profile from './Components/Profile/Profile';
import { useEffect, useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(null)

  useEffect(()=>{
    const checkLogin = localStorage.getItem("isLogin")
    checkLogin && JSON.parse(checkLogin) ? setIsLogin(true):setIsLogin(false)
  },[])

  useEffect(() => {
    localStorage.setItem("isLogin",isLogin)
  }, [isLogin])


  return (
    <div className="App">
      <Routes>
        {
          !isLogin && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage Authenticate={() => setIsLogin(true)} />} />
              <Route path="/register" element={<Register />} />
              <Route exact path="/forgetpassword" element={<Forgetpassword />} />
            </>
          )
        }
        {isLogin && (
          <>
            <Route path="/dashboard" element={<UserDashBord logOut={() => setIsLogin(false)} />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )
        }
        <Route path="*" element={<Navigate to={isLogin ? "/dashboard" : "/login"} />} />

      </Routes>

    </div>
  );
}

export default App;
