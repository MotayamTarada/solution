//import React from 'react';
//import { Container, Row, Col, Card } from 'react-bootstrap';

//const projects = [
//    {
//        title: 'Harvard',
//        description: 'Empowering youth with neuroscience',
//        image: 'https://via.placeholder.com/300x200',
//    },
//    {
//        title: 'Neon Horizons',
//        description: 'Welcome to the cyberscape',
//        image: 'https://via.placeholder.com/300x200',
//    },
//];

//const Work = () => (
//    <section className="py-5 bg-white">
//        <Container>
//            <h2 className="text-center mb-5">Partners + Projects</h2>
//            <Row>
//                {projects.map((project, index) => (
//                    <Col md={4} key={index} className="mb-4">
//                        <Card>
//                            <Card.Img variant="top" src={project.image} alt={project.title} />
//                            <Card.Body>
//                                <Card.Title>{project.title}</Card.Title>
//                                <Card.Text>{project.description}</Card.Text>
//                            </Card.Body>
//                        </Card>
//                    </Col>
//                ))}
//            </Row>
//        </Container>
//    </section>
//);

//export default Work;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import  { useContext } from 'react';
import  { useRef } from 'react';
const projects = [
    {
        title: 'Harvard',
        description: 'Empowering youth with neuroscience',
        image: 'https://haptic.studio/images/harvard.jpg'
    },
    {
        title: 'Neon Horizons',
        description: 'Welcome to the cyberscape',
        image: 'https://haptic.studio/images/neon.jpg'
    },
    {
        title: 'Quantum',
        description: 'Redefining digital experiences',
        image: 'https://haptic.studio/images/quantum.jpg'
    }
];

const Work = () => (
    <section className="work-section py-5">
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-center mb-5">Partners + Projects</h2>
            </motion.div>

            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-100 work-card">
                                <Card.Img variant="top" src={project.image} alt={project.title} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Work;
