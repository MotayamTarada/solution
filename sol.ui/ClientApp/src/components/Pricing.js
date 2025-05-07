//import React from 'react';
//import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//const plans = [
//    {
//        title: 'Tactile',
//        price: '£7,500',
//        features: [
//            'Dedicated Senior Designer',
//            'Weekly Sprint Call',
//            'Async Loom updates',
//            'Unlimited Slack comms',
//            'Dedicated Design Director',
//            'Scalable with your needs',
//        ],
//    },
//    {
//        title: 'Immersive',
//        price: '£15,500',
//        features: [
//            'Access to our full team',
//            'Daily Standups',
//            'Async Loom updates',
//            'Unlimited Slack comms',
//            'Dedicated Design Director',
//            'Scalable with your needs',
//            'Pause or cancel anytime',
//        ],
//    },
//    {
//        title: 'Sprint',
//        price: '£10,000',
//        features: [
//            'A specially curated team',
//            'Weekly Sprint Call',
//            'Async Loom updates',
//            'Unlimited Slack comms',
//            'Dedicated Design Director',
//            'Scalable with your needs',
//        ],
//    },
//];

//const Pricing = () => (
//    <section className="py-5 bg-light">
//        <Container>
//            <h2 className="text-center mb-5">Pricing + Contact</h2>
//            <Row>
//                {plans.map((plan, index) => (
//                    <Col md={4} key={index} className="mb-4">
//                        <Card className="h-100">
//                            <Card.Body>
//                                <Card.Title>{plan.title}</Card.Title>
//                                <Card.Subtitle className="mb-2 text-muted">{plan.price}/Month</Card.Subtitle>
//                                <ul>
//                                    {plan.features.map((feature, idx) => (
//                                        <li key={idx}>{feature}</li>
//                                    ))}
//                                </ul>
//                                <Button variant="primary" href="https://calendly.com">Book a call</Button>
//                            </Card.Body>
//                        </Card>
//                    </Col>
//                ))}
//            </Row>
//        </Container>
//    </section>
//);

//export default Pricing;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import  { useContext } from 'react';
import  { useRef } from 'react';
const plans = [
    {
        title: 'Tactile',
        price: '£7,500',
        features: [
            'Dedicated Senior Designer',
            'Weekly Sprint Call',
            'Async Loom updates',
            'Unlimited Slack comms',
            'Dedicated Design Director',
            'Scalable with your needs',
        ],
    },
    {
        title: 'Immersive',
        price: '£15,500',
        features: [
            'Access to our full team',
            'Daily Standups',
            'Async Loom updates',
            'Unlimited Slack comms',
            'Dedicated Design Director',
            'Scalable with your needs',
            'Pause or cancel anytime',
        ],
    },
    {
        title: 'Sprint',
        price: '£10,000',
        features: [
            'A specially curated team',
            'Weekly Sprint Call',
            'Async Loom updates',
            'Unlimited Slack comms',
            'Dedicated Design Director',
            'Scalable with your needs',
        ],
    },
];

const Pricing = () => (
    <section className="pricing-section py-5">
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-center mb-5">Pricing + Contact</h2>
            </motion.div>

            <Row>
                {plans.map((plan, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-100 pricing-card">
                                <Card.Body>
                                    <Card.Title>{plan.title}</Card.Title>
                                    <Card.Subtitle className="mb-3 text-muted">{plan.price}/Month</Card.Subtitle>
                                    <ul className="features-list">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <Button variant="primary" className="w-100">Book a call</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Pricing;
