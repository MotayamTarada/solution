//import React from 'react';
//import { Navbar, Nav, Container } from 'react-bootstrap';
//import { Link, Outlet } from 'react-router-dom';
//import Footer from './Footer';

//const Layout = () => {
//    return (
//        <>
//            <Navbar bg="dark" variant="dark" expand="lg">
//                <Container>
//                    <Navbar.Brand as={Link} to="/haptic">Haptic Studio</Navbar.Brand>
//                    <Navbar.Toggle aria-controls="navbar-nav" />
//                    <Navbar.Collapse id="navbar-nav">
//                        <Nav className="ms-auto">
//                            <Nav.Link as={Link} to="/haptic">Home</Nav.Link>
//                            <Nav.Link as={Link} to="/haptic/work">Work</Nav.Link>
//                            <Nav.Link as={Link} to="/haptic/pricing">Pricing</Nav.Link>
//                            <Nav.Link as={Link} to="/haptic/careers">Careers</Nav.Link>
//                        </Nav>
//                    </Navbar.Collapse>
//                </Container>
//            </Navbar>

//            <main className="container my-4">
//                <Outlet />
//            </main>

//            <Footer />
//        </>
//    );
//};

//export default Layout;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import { useContext } from 'react';
import  { useRef } from 'react';
const Layout = () => {
    return (
        <div className="app-container">
            <Navbar bg="white" expand="lg" fixed="top" className="navbar-custom">
                <Container>
                    <Navbar.Brand as={Link} to="/haptic" className="brand-text">Haptic Studio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/haptic" className="nav-link-custom">Home</Nav.Link>
                            <Nav.Link as={Link} to="/haptic/work" className="nav-link-custom">Work</Nav.Link>
                            <Nav.Link as={Link} to="/haptic/pricing" className="nav-link-custom">Pricing</Nav.Link>
                            <Nav.Link as={Link} to="/haptic/careers" className="nav-link-custom">Careers</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className="content-wrapper">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
