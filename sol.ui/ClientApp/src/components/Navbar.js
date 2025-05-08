import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (currentScrollY > 300) {
                setShowScrollUp(true);
            } else {
                setShowScrollUp(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a className="navbar-brand" href="/" >Haptic</a>

             
                <ul className={`navbar-links ${menuActive ? 'active' : ''}`}>
                    <li><a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a></li>
                    <li><a href="#work" onClick={(e) => handleClick(e, 'work')}>Work</a></li>
                    <li><a href="#pricing" onClick={(e) => handleClick(e, 'pricing')}>Pricing</a></li>
                    <li><a href="#careers" onClick={(e) => handleClick(e, 'careers')}>Careers</a></li>
                    <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="text-danger">Contact</a></li>
                    
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div> 
           
            </div>
           
            {/* Scroll to top button */}
            {showScrollUp && (
                <button className="scroll-up" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </nav>
    );
}

export default Navbar;
