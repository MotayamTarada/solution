//import React, { useState, useEffect, useRef } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

//const ProductShowcase = () => {
//    const [isPaused, setIsPaused] = useState(false);
//    const containerRef = useRef(null);
//    const animationRef = useRef(null);
//    const positionRef = useRef(0);

//    const products = [
//        { id: 1, title: "Team", subtitle: "Action engineering", icon: "💡" },
//        { id: 2, title: "Playerbed", subtitle: "Not gaming/Alcompanion", icon: "💡" },
//        { id: 3, title: "Attitude", subtitle: "Examinance concepts", icon: "💡" },
//        { id: 4, title: "Spark", subtitle: "Testing platform", icon: "💡" },
//        { id: 5, title: "Next", subtitle: "You", icon: "💡" },
//        { id: 6, title: "Playerbed", subtitle: "per part of consumer use action", icon: "💡" },
//        { id: 7, title: "Executive", subtitle: "", icon: "💡" },
//        { id: 8, title: "305ALT", subtitle: "", icon: "💡" }
//    ];

//    const animate = () => {
//        if (!isPaused) {
//            positionRef.current -= 1;
//            if (positionRef.current <= -containerRef.current.scrollWidth / 2) {
//                positionRef.current = 0;
//            }
//            containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
//        }
//        animationRef.current = requestAnimationFrame(animate);
//    };

//    useEffect(() => {
//        animationRef.current = requestAnimationFrame(animate);
//        return () => cancelAnimationFrame(animationRef.current);
//    }, [isPaused]);

//    return (
//        <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa', overflow: 'hidden' }}>
//            <div className="text-center mb-5">
//                <h1 className="display-4">
//                    <span role="img" aria-label="bulb">💡</span> designer working with startups globally
//                </h1>
//                <p className="lead">Currently steering the ship at <span role="img" aria-label="bulb">💡</span>Haptic</p>
//            </div>

//            <div className="position-relative" style={{ height: '300px' }}>
//                <div
//                    ref={containerRef}
//                    className="d-flex position-absolute w-100"
//                    style={{
//                        willChange: 'transform',
//                        gap: '30px',
//                        padding: '0 15px'
//                    }}
//                >
//                    {[...products, ...products].map((product, index) => (
//                        <div
//                            key={`${product.id}-${index}`}
//                            className="card flex-shrink-0"
//                            style={{
//                                width: '250px',
//                                minHeight: '200px',
//                                cursor: 'pointer'
//                            }}
//                            onMouseEnter={() => setIsPaused(true)}
//                            onMouseLeave={() => setIsPaused(false)}
//                        >
//                            <div className="card-body text-center d-flex flex-column justify-content-center">
//                                <div className="display-4 mb-3">{product.icon}</div>
//                                <h3 className="card-title">{product.title}</h3>
//                                <p className="card-text text-muted">{product.subtitle}</p>
//                            </div>
//                        </div>
//                    ))}
//                </div>
//            </div>

//            <div className="text-center mt-5">
//                <p className="text-muted">most</p>
//            </div>
//        </div>
//    );
//};

//export default ProductShowcase;


import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const ProductShowcase = () => {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const positionRef = useRef(0);

    // Mock data matching your C# DTO structure
    const products = [
        {
            Id: 1,
            Titel: "Team",
            Description: "Action engineering",
            UrlImage: "https://via.placeholder.com/150",
            UrlLogo: "💡"
        },
        {
            Id: 2,
            Titel: "Playerbed",
            Description: "Not gaming/Alcompanion",
            UrlImage: "https://via.placeholder.com/150",
            UrlLogo: "💡"
        },
        {
            Id: 3,
            Titel: "Attitude",
            Description: "Examinance concepts",
            UrlImage: "https://via.placeholder.com/150",
            UrlLogo: "💡"
        },
        {
            Id: 4,
            Titel: "Spark",
            Description: "Testing platform",
            UrlImage: "https://via.placeholder.com/150",
            UrlLogo: "💡"
        },
        {
            Id: 5,
            Titel: "Next",
            Description: "You",
            UrlImage: "https://via.placeholder.com/150",
            UrlLogo: "💡"
        },
        {
            Id: 6,
            Titel: "Playerbed",
            Description: "per part of consumer use action",
            UrlImage: "https://via.placeholder.com/150",
            UrlLogo: "💡"
        },
        {
            Id: 7,
            Titel: "Executive",
            Description: "",
            UrlImage: "https://via.placeholder.com/150",
            UrlLogo: "💡"
        },
        {
            Id: 8,
            Titel: "305ALT",
            Description: "",
            UrlImage: "https://via.placeholder.com/150",
            UrlLogo: "💡"
        }
    ];

    const animate = () => {
        if (!isPaused) {
            positionRef.current -= 1;
            if (positionRef.current <= -containerRef.current.scrollWidth / 2) {
                positionRef.current = 0;
            }
            containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
        }
        animationRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [isPaused]);

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa', overflow: 'hidden' }}>
            <div className="text-center mb-5">
                <h1 className="display-4">
                    <span role="img" aria-label="bulb">💡</span> designer working with startups globally
                </h1>
                <p className="lead">Currently steering the ship at <span role="img" aria-label="bulb">💡</span><p>
                    <Link to="/haptic">Haptic</Link>
                </p></p>
            </div>

            <div className="position-relative" style={{ height: '300px' }}>
                <div
                    ref={containerRef}
                    className="d-flex position-absolute w-100"
                    style={{
                        willChange: 'transform',
                        gap: '30px',
                        padding: '0 15px'
                    }}
                >
                    {[...products, ...products].map((product, index) => (
                        <div
                            key={`${product.Id}-${index}`}
                            className="card flex-shrink-0"
                            style={{
                                width: '250px',
                                minHeight: '200px',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                                {product.UrlLogo && (
                                    <div className="display-4 mb-3">{product.UrlLogo}</div>
                                )}
                                {product.UrlImage && (
                                    <img
                                        src={product.UrlImage}
                                        alt={product.Titel}
                                        className="img-fluid mb-3"
                                        style={{ maxHeight: '80px', objectFit: 'contain' }}
                                    />
                                )}
                                <h3 className="card-title">{product.Titel}</h3>
                                <p className="card-text text-muted">{product.Description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-5">
                <p className="text-muted">most</p>
            </div>
        </div>
    );
};

export default ProductShowcase;