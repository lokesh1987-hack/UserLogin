import React, { useState, useEffect } from 'react'
import { Navbar, Container, Offcanvas, Form, FormControl, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import './Nav.css'


function Nav({ logOut }) {


    const navigate = useNavigate()

    const [darkMode , setDarkMode] = useState(false)

    if(!darkMode)
    {
        localStorage.setItem("text","dark");
        localStorage.setItem("theme","light");
    }
    else
    {
        localStorage.setItem("text","light");
        localStorage.setItem("theme","dark");
    }

    const logOutHandler = (e) => {       
        navigate("/userlogin")
        logOut()
    }

    const textColor = localStorage.getItem("text")
    const themeColor = localStorage.getItem("theme")


    return (

        <div>

            <Navbar bg={themeColor} variant={themeColor}  expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar " />
                    <Navbar.Brand className="ms-3" >HeadPhone Wala</Navbar.Brand>
                    <Container className="d-flex flex-row-reverse" >

                        <Button type="button" className="ms-4" onClick={() => { logOutHandler() }} >Logout</Button>
                        <Navbar.Brand className="ms-4">
                            <img
                                src="https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-edit-profile-icon-png-image_758006.jpg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Container>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        className={`bg-${themeColor}`}
                    >
                        <Offcanvas.Header closeButton  >
                            <Offcanvas.Title id="offcanvasNavbarLabel" className={`text-${textColor}`} >HeadPhones Wala</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="text-center h4 offcanvasBody">

                            <div className="mt-4 mb-1 d-block pt-2 pb-2" >
                                {(darkMode) ? <a type="button" className={`text-${textColor}`}  variant="outline-primary" onClick={()=>{setDarkMode(false)}}>Light</a> : <a type="button" className={`text-${textColor}`} variant="outline-primary" onClick={()=>{setDarkMode(true)}}>Dark</a>}
                            </div>
                            <div className="mt-1 mb-1 d-block  pt-2 pb-2">
                                <a type="button" className={`text-${textColor}`} variant="outline-primary"  onClick={() => { logOutHandler() }} >Logout</a>
                            </div>
                            <div className="mt-1 d-block  pt-2 pb-2">
                                <Link  className={`text-${textColor}`} variant="outline-primary" to="/profile" >Profile</Link>
                            </div>
                            <div className="mt-1 d-block  pt-2 pb-2">
                                <Link  className={`text-${textColor}`} variant="outline-primary" to="/dashboard" >Dashboard</Link>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav
