import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { createUser } from '../../Firebase/Login&SignUp/LoginAndSignUp';

const Login = () => {




    const handleSubmit = event => {
        event.preventDefault();
        console.log('submited')
    }


    // const [user, error] = createUser()
    return (
        <div>
            <Form className='border p-3 rounded' onSubmit={handleSubmit}>
                <h1>Please Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <div>
                        <Button className='mx-2' size="sm" variant="primary">
                            Sign up from here
                        </Button>
                        <Button variant="primary" size="sm">
                            Lost Password?
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Login;