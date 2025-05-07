//import React from 'react';
//import { Container, Row, Col } from 'react-bootstrap';

//const Footer = () => (
//    <footer className="py-4 bg-dark text-white">
//        <Container>
//            <Row>
//                <Col md={6}>
//                    <h5>Learn More</h5>
//                    <ul className="list-unstyled">
//                        <li><a href="/" className="text-white">Home</a></li>
//                        <li><a href="/work" className="text-white">Work</a></li>
//                        <li><a href="/pricing" className="text-white">Pricing</a></li>
//                        <li><a href="/careers" className="text-white">Careers</a></li>
//                    </ul>
//                </Col>
//                <Col md={6}>
//                    <h5>Follow Us</h5>
//                    <ul className="list-unstyled">
//                        <li><a href="https://www.linkedin.com" className="text-white">LinkedIn</a></li>
//                        <li><a href="https://www.instagram.com" className="text-white">Instagram</a></li>
//                        <li><a href="https://x.com" className="text-white">X</a></li>
//                    </ul>
//                </Col>
//            </Row>
//            <Row className="mt-3">
//                <Col className="text-center">
//                    <p>Haptic Studio © 2025</p>
//                </Col>
//            </Row>
//        </Container>
//    </footer>
//);

//export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import  { useRef } from 'react';
const Footer = () => {
    return (
        <footer className="footer py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h5>Learn More</h5>
                            <ul className="list-unstyled">
                                <li><a href="/haptic" className="footer-link">Home</a></li>
                                <li><a href="/haptic/work" className="footer-link">Work</a></li>
                                <li><a href="/haptic/pricing" className="footer-link">Pricing</a></li>
                                <li><a href="/haptic/careers" className="footer-link">Careers</a></li>
                            </ul>
                        </motion.div>
                    </Col>
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://www.linkedin.com" className="footer-link">LinkedIn</a></li>
                                <li><a href="https://www.instagram.com" className="footer-link">Instagram</a></li>
                                <li><a href="https://x.com" className="footer-link">X</a></li>
                            </ul>
                        </motion.div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="copyright">Haptic Studio © {new Date().getFullYear()}</p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;