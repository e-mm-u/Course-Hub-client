import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
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

                        <LinkContainer to='/login'>
                            <Nav.Link>LogIn</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/register'>
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                        <Nav.Link>LogOut</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;