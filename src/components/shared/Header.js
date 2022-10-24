import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error.message))
    }
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Course-Hub</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/'>
                            <Nav.Link>Courses</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/FAQ'>
                            <Nav.Link>FAQ</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/blog'>
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>


                        <Nav.Link>Theme</Nav.Link>

                        {
                            user?.uid ?
                                <>
                                    <Image
                                        src={user?.photoURL ? user.photoURL : ' '}
                                        style={{
                                            height: '30px',
                                            width: '30px'
                                        }}
                                        roundedCircle></Image>
                                    <Nav.Link>{user.displayName}</Nav.Link>
                                    <Nav.Link onClick={handleLogOut}>LogOut</Nav.Link></>
                                :
                                <><LinkContainer to='/login'>
                                    <Nav.Link>LogIn</Nav.Link>
                                </LinkContainer>
                                    <LinkContainer to='/register'>
                                        <Nav.Link>Register</Nav.Link>
                                    </LinkContainer>
                                </>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;