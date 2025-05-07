//import React from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import Portfolio from './components/Portfolio';
//import Home from './components/Home';
//import Work from './components/Work';
//import Pricing from './components/Pricing';
//import Careers from './components/Careers';
//import Footer from './components/Footer';
//import Layout from './components/Layout';


//function App() {
//    return (
//        <Router>
//            <div className="app-container"> {/* Added wrapper div */}
//                <Routes>
//                    {/* First Route: Portfolio */}
//                    <Route index element={<Portfolio />} /> {/* Portfolio will run first */}

//                    <Route path="/haptic" element={<Layout />}>
//                        <Route index element={<Home />} />
//                        <Route path="work" element={<Work />} />
//                        <Route path="pricing" element={<Pricing />} />
//                        <Route path="careers" element={<Careers />} />
//                    </Route>

//                </Routes>
//            </div>
//        </Router>
//    );
//}
// App.js\

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Portfolio from './components/Portfolio';
import Home from './components/Home';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Careers from './components/Careers';
import Layout from './components/Layout';

const App = () => {
    return (
            <Routes>
                <Route index element={<Portfolio />} />
                <Route path="/haptic" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="careers" element={<Careers />} />
                </Route>
            </Routes>
    );
};

export default App;
