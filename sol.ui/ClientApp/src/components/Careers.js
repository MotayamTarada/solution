//import React from 'react';
//import { Container, Row, Col, Card } from 'react-bootstrap';

//const Careers = () => (
//    <section className="py-5 bg-white">
//        <Container>
//            <h2 className="text-center mb-5">Join Haptic Studio</h2>
//            <Row className="justify-content-center">
//                <Col md={6}>
//                    <Card>
//                        <Card.Body>
//                            <Card.Title>Senior Designer</Card.Title>
//                            <Card.Subtitle className="mb-2 text-muted">Remote/Hybrid • Full-time</Card.Subtitle>
//                            <Card.Text>
//                                Join our team and be part of an innovative design studio.
//                            </Card.Text>
//                            <a href="/careers" className="btn btn-primary">Apply Now</a>
//                        </Card.Body>
//                    </Card>
//                </Col>
//            </Row>
//        </Container>
//    </section>
//);

//export default Careers;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import  { useContext } from 'react';
import  { useRef } from 'react';
// ... your component code
const Careers = () => {
    return (
        <section className="careers-section py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center mb-5">Join Haptic Studio</h2>
                </motion.div>

                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="career-card">
                                <Card.Body>
                                    <Card.Title>Senior Designer</Card.Title>
                                    <Card.Subtitle className="mb-3 text-muted">Remote/Hybrid • Full-time</Card.Subtitle>
                                    <Card.Text>
                                        Join our team and be part of an innovative design studio working with ambitious clients to create lasting impact.
                                    </Card.Text>
                                    <div className="d-grid">
                                        <button className="btn btn-primary">Apply Now</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Careers;