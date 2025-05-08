import React from 'react';
import '../styles/Careers.css'; 

const Careers = () => {
    return (
        <section className="careers-section">
            <div className="container">
                <div className="fade-in">
                    <h2 className="careers-title">Join Haptic Studio</h2>
                </div>

                <div className="card-wrapper">
                    <div className="career-card">
                        <h3 className="card-title">Senior Designer</h3>
                        <p className="card-subtitle">Remote/Hybrid • Full-time</p>
                        <p className="card-text">
                            Join our team and be part of an innovative design studio working with ambitious clients to create lasting impact.
                        </p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
