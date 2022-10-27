import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider';
import { SiSololearn } from 'react-icons/si'
import '../../css/navbar.css'

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
            <Navbar bg='dark' variant='dark' className='sticky-top'>
                <Container className='d-flex align-items-center justify-content-between'>
                    <LinkContainer to='/'>
                        <Navbar.Brand ><h2 className='align-self-center'><SiSololearn className='align-self-center'></SiSololearn> Course-Hub</h2></Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto d-flex flex-wrap align-items-center">
                        <LinkContainer to='/courses'>
                            <Nav.Link>Courses</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/FAQ'>
                            <Nav.Link>FAQ</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/blogs'>
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>


                        <div class="form-switch text-white d-flex gap-1">
                            <small><input class="form-check-input" type="checkbox" role="switch" /></small> 
                            <small>Dark</small>

                        </div>

                        {
                            user?.uid ?
                                <>
                                    <Image
                                        src={user?.photoURL ? user.photoURL : ' '}
                                        style={{
                                            height: '26px',
                                            width: '26px'
                                        }}
                                        roundedCircle></Image>
                                    <Nav.Link>{user.displayName}</Nav.Link>
                                    <Nav.Link onClick={handleLogOut}>LogOut</Nav.Link></>
                                :
                                <><LinkContainer to='/login'>
                                    <Nav.Link>LogIn</Nav.Link>
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