import React, { useState ,useEffect } from 'react'
import NavBar from '../Nav'
import { useNavigate } from 'react-router-dom'
import './UserDashBoard.css'

function UserDashBord({ logOut }) {

    return (
        <div>
            <div className="dashBoardbackground">
                <NavBar logOut={logOut} />  
            </div>
        </div>
    )
}

export default UserDashBord
