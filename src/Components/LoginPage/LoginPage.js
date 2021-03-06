
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css';


function LoginPage({ Authenticate }) {

    const navigate = useNavigate()

    const pageHandler = (e) => {
        e.preventDefault()
        Authenticate()
        navigate("/dashboard")

    }


    return (
        <div>
            <div className="position-relative background">
                <div className="container w-25 border shadow p-5 position-absolute top-50 translate-middle loginContainer">
                    <div className="d-flex justify-content-center mt-5">
                        <h1 className="h1 mb-5" >Login Page</h1>
                    </div>
                    <div className="d-flex justify-content-center text-start" >
                        <Form onSubmit={(e) => { pageHandler(e) }} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                    </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className="" type="checkbox" label="Check me out" required />
                            </Form.Group>
                            <div className="d-flex mt-3">

                                <Link to="/forgetpassword" variant="primary" >
                                    Forget Password ?
                            </Link>
                                <Button className="ms-auto" variant="primary" type="submit">
                                    Login
                            </Button>
                            </div>

                            <hr />

                        </Form>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/register" variant="primary" className="btn btn-success ps-5 pe-5 position-absolute top-50 registerationButton" >Register</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
