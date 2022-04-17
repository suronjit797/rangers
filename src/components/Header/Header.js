import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

import './Header.css'
import logo from '../../images/RangerWhite.png'
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);


    const handelLogout = event => {
        event.preventDefault()
        signOut(auth)
    }


    return (
        <Navbar variant="dark" expand="md" className="main_nav">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} style={{ width: '130px' }} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to='/'>Home </Nav.Link>
                        <Nav.Link as={NavLink} to='/blog'>  Blog </Nav.Link>
                        <Nav.Link as={NavLink} to='/service'>  Service </Nav.Link>
                        <Nav.Link as={NavLink} to='/about'> About </Nav.Link>
                        <Nav.Link as={NavLink} to='/contact'> contact </Nav.Link>
                        {
                            user ? (
                                <Nav.Link as={NavLink} to='/login' onClick={handelLogout}> Logout </Nav.Link>
                            ) : (
                                <Nav.Link as={NavLink} to='/login'> Login </Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;