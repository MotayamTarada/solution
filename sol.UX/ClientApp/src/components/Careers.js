import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap'; // Import ThemeProvider

const Careers = () => {
    return (
        <section className="py-5 bg-white">
            <Container>
                <h2 className="text-center mb-5">Join Haptic Studio</h2>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Senior Designer</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Remote/Hybrid • Full-time</Card.Subtitle>
                                <Card.Text>
                                    Join our team and be part of an innovative design studio.
                                </Card.Text>
                                <a href="/careers" className="btn btn-primary">Apply Now</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Careers;