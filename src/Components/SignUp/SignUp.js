import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseInit from '../../Firebase/firebase.init';
firebaseInit();

const auth = getAuth();


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [userData, setUserData] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (password.length >= 6) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const { email } = userCredential.user;
                    setUserData(email)
                    setErrorMsg('')
                }).catch((error) => {
                    setErrorMsg(error.message);
                });
        }
        else {
            setErrorMsg('Password must be 6 characters')
        }
    }

    return (
        <div>
            {userData && <h1 className='text-center'>Your Email: {userData}</h1>}
            <Form className='border p-3 rounded' onSubmit={handleSubmit}>
                <h1>Please Sign up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                <div className='d-flex justify-content-between'>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <div>
                        <Button className='mx-2' size="sm" variant="primary">
                            Already Register?
                        </Button>
                        <Button variant="primary" size="sm">
                            Lost Password?
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
export default SignUp;