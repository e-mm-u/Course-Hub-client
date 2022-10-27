import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider';
import { SiSololearn } from 'react-icons/si'
import { CiDark } from 'react-icons/ci'
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
                        <Navbar.Brand ><h2><SiSololearn></SiSololearn> Course-Hub</h2></Navbar.Brand>
                    </LinkContainer>

                    <div>
                        <Nav className="d-flex flex-wrap align-items-center">

                            <LinkContainer to='/courses'>
                                <Nav.Link>Courses</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/FAQ'>
                                <Nav.Link>FAQ</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/blogs'>
                                <Nav.Link>Blog</Nav.Link>
                            </LinkContainer>



                            {
                                user?.uid ?
                                    <>
                                        <Nav.Link data-bs-toggle="tooltip" data-bs-placement="top" title={user.displayName}>
                                            <Image
                                                src={user?.photoURL ? user.photoURL : ' '}
                                                style={{
                                                    height: '26px',
                                                    width: '26px'
                                                }}
                                                roundedCircle></Image>
                                        </Nav.Link>
                                        <Nav.Link>{user.displayName}</Nav.Link>
                                        <Nav.Link onClick={handleLogOut}>LogOut</Nav.Link></>
                                    :
                                    <><LinkContainer to='/login'>
                                        <Nav.Link>LogIn</Nav.Link>
                                    </LinkContainer>

                                    </>
                            }
                            <div class="form-switch text-white d-flex gap-0 align-items-center">
                                <small><input class="form-check-input" type="checkbox" role="switch" /></small>
                                <CiDark></CiDark>
                            </div>


                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;