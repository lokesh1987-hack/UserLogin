import React, { useState, useEffect } from 'react'
import NavBar from '../Nav'
import { useNavigate } from 'react-router-dom'
import './UserDashBoard.css'

function UserDashBord({isLogin ,logOut}) {
    console.log("isLogin",isLogin)
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(false)
    const token = localStorage.getItem("Token")

    useEffect(()=>{
        landingCheck()
    },[isLogin])

    const landingCheck = ()=>{
        if(isLogin !== true)
            navigate("/userlogin")        
    }
    
    const Checked = (e) => {
        setDarkMode(e)
    }


    return (
        <div>
            <div className="dashBoardbackground">
                <NavBar Checked={Checked} darkMode={darkMode} isLogin={isLogin} logOut={logOut} />
            </div>
        </div>
    )
}

export default UserDashBord
