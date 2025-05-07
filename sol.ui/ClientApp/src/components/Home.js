//import React from 'react';
//import { Container, Row, Col } from 'react-bootstrap';

//const Home = () => (
//    <section className="bg-light text-center py-5">
//        <Container>
//            <Row>
//                <Col>
//                    <h1 className="display-4 fw-bold mb-4">
//                        We help <span className="text-success">🟩</span> ambitious teams turn bold visions into <span className="text-primary">○</span> lasting impact.
//                    </h1>
//                </Col>
//            </Row>
//        </Container>
//    </section>
//);

//export default Home;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import  { useContext } from 'react';
import  { useRef } from 'react';
const Home = () => {
    return (
        <section className="home-section">
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="display-3 fw-bold text-center mb-5">
                                We help <span className="text-success">🟩</span> ambitious teams turn bold visions into <span className="text-primary">○</span> lasting impact.
                            </h1>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home;
