import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap'; // Import ThemeProvider

const Footer = () => {
    return (
        <footer className="py-4 bg-dark text-white">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Learn More</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/work" className="text-white">Work</a></li>
                            <li><a href="/pricing" className="text-white">Pricing</a></li>
                            <li><a href="/careers" className="text-white">Careers</a></li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.linkedin.com" className="text-white">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com" className="text-white">Instagram</a></li>
                            <li><a href="https://x.com" className="text-white">X</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <p>Haptic Studio © 2025</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;