//import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes

//import Portfolio from './components/Portfolio'; // Correct import for Portfolio

//// AppRoutes should be an array of route objects
//const AppRoutes = [
//    { path: '/', element: <Portfolio /> },
//    // Add more routes here if necessary
//];

//const App = () => {
//    return (
//        <Router> {/* Wrap the Routes with BrowserRouter */}
//            <Routes>
//                {AppRoutes.map((route, index) => (
//                    <Route key={index} path={route.path} element={route.element} />
//                ))}
//            </Routes>
//        </Router>
//    );
//};

//export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes

// Import components for your routes
import Portfolio from './components/Portfolio'; // Correct import for Portfolio
// Add more imports for other components if necessary
const AppRoutes = [
    { path: '/', element: <Portfolio /> },
    // Add more routes here if necessary
];

const App = () => {
    return (
            <Routes>
                {/* Map over AppRoutes to create Route elements */}
                {AppRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
    );
};

export default App;
