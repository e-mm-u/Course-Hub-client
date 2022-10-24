import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';

const Login = () => {
    return (
        <div className='w-50 mx-auto my-4'>
            <Form >
                <Form.Group className="mb-3" controlId="form-email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="form-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-3" controlId="form-checkbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <p>Forgot password?</p>
                </div>


                <Form.Group className="mb-3">
                    <Form.Text className="text-muted">
                        error
                    </Form.Text>
                </Form.Group>

                <div className='d-flex justify-content-between align-items-center'>
                    <Button variant="light" type="submit">
                        Log in
                    </Button>
                    <LinkContainer to='/register'>
                        <p className='mb-0'> Don't have an account? </p>
                    </LinkContainer>
                </div>


            </Form>
            <div className='d-flex align-items-center justify-content-center gap-2'>
                <hr className='w-25' /> <p className='mb-0'>OR</p> <hr className='w-25' />
            </div>
            {/* sign up buttons */}
            <div className='d-flex flex-column gap-2'>
                <Button variant="light">
                    Continue with google
                </Button>
                <Button variant="light">
                    Continue with github
                </Button>
                <Button variant="light">
                    Continue with facebook
                </Button>
            </div>
        </div>
    );
};

export default Login;