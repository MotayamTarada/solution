import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap'; // Import ThemeProvider

const Home = () => (
    <section className="bg-light text-center py-5">
        <Container>
            <Row>
                <Col>
                    <h1 className="display-4 fw-bold mb-4">
                        We help <span className="text-success">🟩</span> ambitious teams turn bold visions into <span className="text-primary">○</span> lasting impact.
                    </h1>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Home;