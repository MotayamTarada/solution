import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/haptic">Haptic Studio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/haptic">Home</Nav.Link>
                            <Nav.Link as={Link} to="/haptic/work">Work</Nav.Link>
                            <Nav.Link as={Link} to="/haptic/pricing">Pricing</Nav.Link>
                            <Nav.Link as={Link} to="/haptic/careers">Careers</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className="container my-4">
                <Outlet /> {/* Required to render nested route content */}
            </main>

            <Footer />
        </>
    );
};

export default Layout;
