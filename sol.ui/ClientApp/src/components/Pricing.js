import React from 'react';
import '../styles/Pricing.css'; 

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
    <section className="pricing-section" id="pricing">
        <h2 className="section-title">Pricing + Contact</h2>
        <div className="cards-container">
            {plans.map((plan, index) => (
                <div className="pricing-card" key={index}>
                    <h3 className="plan-title">{plan.title}</h3>
                    <p className="plan-price">{plan.price}/Month</p>
                    <ul className="features-list">
                        {plan.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

export default Pricing;
