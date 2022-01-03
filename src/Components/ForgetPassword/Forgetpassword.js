import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Forget.css'

function Forgetpassword() {

    const [email, setEmail] = useState("")

    const submit = (e) => {
        e.preventDefault()
        console.log("Sent successfully = ", email)
    }

    return (
        <div className="background position-relative">
            <div className="Container w-25 p-5 forgetPasswordCard" >
                <Modal.Dialog>
                    <Modal.Header className="d-flex flex-column">
                        <img className="pe-4 pb-3" width="30%" height="30%" src="https://icon-library.com/images/transparent-lock-icon/transparent-lock-icon-29.jpg" alt="Not Found" />
                        <Modal.Title>Find Your Account</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={e => submit(e)}>
                        <Modal.Body >
                            <p>Please enter your email address or mobile number to search for your account.</p>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email id </label>
                                <input name="email" value={email} type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="email" required />
                            </div>
                        </Modal.Body>

                        <Modal.Footer >
                            <Link to="/userlogin" className="me-auto btn btn-secondary" variant="danger">Back</Link>
                            <Button variant="primary" type="submit">Find Account</Button>
                        </Modal.Footer>
                    </form>
                </Modal.Dialog>
            </div>  
        </div>
    )
}

export default Forgetpassword
