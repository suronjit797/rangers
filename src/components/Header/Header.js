import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import './Header.css'
import logo from '../../images/RangerWhite.png'


const Header = () => {
    return (
            <Navbar variant="dark" expand="md" className="main_nav">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} style={{width: '130px'}} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to='/'>Home </Nav.Link>
                            <Nav.Link as={NavLink} to='/blog'>  Blog </Nav.Link>
                            <Nav.Link as={NavLink} to='/about'> About </Nav.Link>
                            <Nav.Link as={NavLink} to='/contact'> contact </Nav.Link>
                            <Nav.Link as={NavLink} to='/login'> Login </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


    );
};

export default Header;