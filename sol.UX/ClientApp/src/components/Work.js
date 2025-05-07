import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap'; // Import ThemeProvider

const projects = [
    {
        title: 'Harvard',
        description: 'Empowering youth with neuroscience',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Neon Horizons',
        description: 'Welcome to the cyberscape',
        image: 'https://via.placeholder.com/300x200',
    },
];

const Work = () => (
    <section className="py-5 bg-white">
        <Container>
            <h2 className="text-center mb-5">Partners + Projects</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={project.image} alt={project.title} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Work;