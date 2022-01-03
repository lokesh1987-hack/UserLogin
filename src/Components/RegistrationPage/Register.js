import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './RegisterPage.css'

function Register() {

    const navigate = useNavigate()

    const [userData, setUserDAta] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobileNumber: ""
    })

    const { first_name, last_name, email, mobileNumber } = userData

    const OnChange = (e) => {
        setUserDAta({ ...userData, [e.target.name]: e.target.value })
    }



    const submit = (e) => {
        e.preventDefault()
        alert("Your Registered Now....")
        navigate("/userlogin")
    }

    const textColor = localStorage.getItem("mode")
    const themeColor = localStorage.getItem("text")

    return (
        <div className="bg-light p-4 position-relative background">
            <div className="container w-25 border shadow p-5 position-absolute top-50 translate-middle registrationContainer">
                <div className="d-flex justify-content-center mt-5">
                    <h1 className={`text-${textColor} h1 mb-5`}>Register</h1>
                </div>
                <div className={`text-${textColor} d-flex justify-content-center text-start`}>
                    <form onSubmit={e => submit(e)}>
                        <div className="mb-3">
                            <label for="first_name" className="form-label">First Name </label>
                            <input name="first_name" value={first_name} type="name" onChange={e => OnChange(e)} className="form-control" id="first_name" required />

                        </div>
                        <div className="mb-3">
                            <label for="last_name" className="form-label">Last Name </label>
                            <input name="last_name" value={last_name} type="name" onChange={e => OnChange(e)} className="form-control" id="last_name" required />

                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email id </label>
                            <input name="email" value={email} type="email" onChange={e => OnChange(e)} className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label for="mobileNumber" className="form-label">Mobile Number </label>
                            <input name="mobileNumber" value={mobileNumber} type="mobileNumber" onChange={e => OnChange(e)} className="form-control" id="mobileNumber" required />
                        </div>
                        <hr />

                        <div className="mb-3 ms-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="loginButton" >
                <Link to="/userlogin" variant="primary" className="btn btn-secondary ps-5 pe-5 position-absolute top-50 ">Login</Link>
            </div>
        </div>
    )
}

export default Register
