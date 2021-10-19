import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar fixed='top' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand >Health Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/services">Service</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact Us</Link>
                            <span className='userName'>{user.displayName}</span>

                            <Link to='/login'>

                                {user.email ? <Button variant="danger" onClick={logOut}>Logout</Button> : <Button variant="danger">Login</Button>}
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;