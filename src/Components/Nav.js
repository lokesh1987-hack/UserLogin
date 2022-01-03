import React, { useState } from 'react'
import { Navbar, Container, Offcanvas, Form, FormControl, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import './Nav.css'


function Nav({ isLogin ,logOut}) {

    console.log("Navlogin",isLogin)
    const navigate = useNavigate()

    const [darkMode, setDarkMode] = useState(false)

    const logOutHandler = (e) => {
        localStorage.removeItem("Token")
        navigate("/userlogin")
        logOut(false)
    }

    const mode = (e) =>{
        if(e===false)
        {
            localStorage.setItem("mode","light");
            localStorage.setItem("text","dark");
        }
        else
        {
            localStorage.setItem("mode","dark")
            localStorage.setItem("text","light")
        }
        setDarkMode(e)
    }

    const textColor = localStorage.getItem("mode")
    const themeColor = localStorage.getItem("text")
    console.log("textColor ",textColor,"....theme COlor ",themeColor)

    return (

        <div>

            <Navbar bg={themeColor} variant={themeColor} expand={false}>
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
                        className={`bg-${themeColor} `}  
                    >
                        <Offcanvas.Header className={`text-${textColor}`} closeButton  > 
                            <Offcanvas.Title id="offcanvasNavbarLabel" className={`text-${textColor} `} >HeadPhones Wala</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="text-center h4 offcanvasBody">

                            <div className="mt-4 mb-1 d-block pt-2 pb-2" >
                                {(darkMode === true) ? <a type="button" className={`text-${textColor} `}  variant="outline-primary" onClick={() => mode(false)}>Light</a> : <a type="button" className={`text-${textColor} `} variant="outline-primary" onClick={() => mode(true)}>Dark</a>}
                            </div>
                            <div className="mt-1 mb-1 d-block  pt-2 pb-2">
                                <a type="button" variant="outline-primary" className={`text-${textColor} `}  onClick={() => { logOutHandler()}} >Logout</a>
                            </div>
                            <div className="mt-1 d-block  pt-2 pb-2">
                                <Link className={`text-${textColor}`}  variant="outline-primary" to="/user/dashbord/profile" >Profile</Link>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav
