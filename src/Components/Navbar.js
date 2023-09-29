import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';



const NavBars = () => {
    return (
        <Container fluid>
            <Row>
                <Navbar expand="lg" className="navbar" id="navs12">
                    <Container>
                        <Navbar.Brand href="#home" className='logo'>Fetch  <span>API</span> Through Images</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navs' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className='h'>Home</Nav.Link>
                                <Nav.Link href="#home" className='h'>Images</Nav.Link>
                                <Nav.Link href="#home" className='h'>Login</Nav.Link>
                                <Nav.Link href="#home" className='h'>Signup</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    )
}

export default NavBars