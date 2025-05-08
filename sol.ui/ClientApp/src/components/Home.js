
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactStudio from '../components/ContactStudio';
import Footer from '../components/Footer';
import Work from '../components/Work';
import Pricing from '../components/Pricing';
import Careers from '../components/Careers';

function Home() {
    return (
        <div className="home-page">
            <Navbar />
            <main>
                <section id="home" className="section">
                    <Hero />
                </section>
                <section id="work" className="section">
                    <Work />
                </section>
                <section id="pricing" className="section">
                    <Pricing />
                </section>
                <section id="careers" className="section">
                    <Careers />
                </section>
                <section id="contact" className="section">
                    <ContactStudio />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;