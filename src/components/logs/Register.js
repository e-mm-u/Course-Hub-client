import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';

const Register = () => {
    return (
        <div className='w-25 mx-auto my-4'>
            <Form >
                <Form.Group className="mb-3" controlId="form-email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="form-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="form-photo">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="form-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="form-confirm-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Re-type Password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Text className="text-muted">
                        password doesn't match
                    </Form.Text>
                </Form.Group>

                <div className='d-flex justify-content-between align-items-center'>
                    <Button variant="light" type="submit">
                        Register
                    </Button>
                    <LinkContainer to='/login'>
                        <p className='mb-0'> Already have an account? </p>
                    </LinkContainer>
                </div>
            </Form>
        </div>
    );
};

export default Register;