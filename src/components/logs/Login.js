import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { user, logIn, googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
    const [err, seterr] = useState(' ');
    const navigate = useNavigate();

    const location = useLocation();
    // get the location from private route if login page is visited beacause of private route
    let from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        seterr(' ')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            }).catch(err => seterr(err.message))

    }
    const handleGoogleLogin = () => {
        console.log('google login clicked');
        googleLogin()
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from, { replace: true });
            }).catch(err => console.error(err.message))
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from, { replace: true });
            }).catch(err => console.error(err.message))
    }
    const handleFacebookLogin = () => {
        facebookLogin()
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from, { replace: true });
            }).catch(err => console.error(err.message))
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <div className='text-center'>
                <h3 >LOG IN HERE</h3>
                <hr />
            </div>
            <Form onSubmit={handleLogin}>
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
                    <Form.Text className='text-danger'>
                        {
                            err ? <p >{err}</p> : <p> </p>
                        }
                    </Form.Text>
                </Form.Group>

                <div className='d-flex justify-content-between align-items-center'>
                    <Button variant="dark" type="submit">
                        LOG IN
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
                <Button onClick={handleGoogleLogin} variant="warning">
                    Continue with google
                </Button>
                <Button onClick={handleGithubLogin} variant="dark">
                    Continue with github
                </Button>
                <Button onClick={handleFacebookLogin} variant="primary">
                    Continue with facebook
                </Button>
            </div>
        </div>
    );
};

export default Login;