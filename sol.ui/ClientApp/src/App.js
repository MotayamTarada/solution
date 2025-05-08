
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Footer from './components/Footer';

import Home from './components/Home';

import Portfolio from './components/Portfolio'; // Import Portfolio component
import Pricing from './components/Pricing';
import Work from './components/Work';
import Careers from './components/Careers';
import ContactStudio from './components/ContactStudio';
import AddCardForm from './components/AddCardForm';



const App = () => {
    return (
        <Router> {/* Wrap the routes with BrowserRouter */}
            <Routes> {/* Define routes inside Routes */}
                {/* Define route for Portfolio */}
                <Route path="/" element={<Portfolio />} /> {/* Root route */}

                {/* Add more routes for the components */}
                <Route path="/home" element={<Home />} />

                <Route path="/navbar" element={<Navbar />} />
                <Route path="/hero" element={<Hero />} />

                <Route path="/contact" element={<ContactStudio />} />

                <Route path="/footer" element={<Footer />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/work" element={<Work />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/add" element={<AddCardForm />} />


            </Routes>
        </Router>
    );
};

export default App;


