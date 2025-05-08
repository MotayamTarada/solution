import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h5>Learn More</h5>
                    <ul className="footer-list">
                        <li><a href="/home" className="footer-link">Home</a></li>
                        <li><a href="/work" className="footer-link">Work</a></li>
                        <li><a href="/pricing" className="footer-link">Pricing</a></li>
                        <li><a href="/careers" className="footer-link">Careers</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Follow Us</h5>
                    <ul className="footer-list">
                        <li><a href="https://www.linkedin.com" className="footer-link">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com" className="footer-link">Instagram</a></li>
                        <li><a href="https://x.com" className="footer-link">X</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Haptic Studio © {new Date().getFullYear()}</p>
            </div>
            <div className="footer-bottom">
                <p>Develobed by <a className="footer-link"  href="https://github.com/MotayamTarada">Motayam Tarada</a> </p>
            </div>
        </footer>
    );
};

export default Footer;
