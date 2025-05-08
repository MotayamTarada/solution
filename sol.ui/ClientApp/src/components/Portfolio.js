
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductShowcase = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const positionRef = useRef(0);

    // Fetch products once
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5200/api/Card/GetAllCard', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log("Fetched products:", response.data);
                setProducts(response.data);
            } catch (error) {
                console.error('Detailed error:', {
                    message: error.message,
                    config: error.config,
                    response: error.response,
                });
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Animation logic
    useEffect(() => {
        const animate = () => {
            if (!isPaused && containerRef.current && products.length > 0) {
                positionRef.current -= 1;
                if (positionRef.current <= -containerRef.current.scrollWidth / 2) {
                    positionRef.current = 0;
                }
                containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationRef.current);
    }, [isPaused, products]);

    if (loading) return <div className="text-center py-5">Loading...</div>;
    if (error) return <div className="text-center py-5 text-danger">Error: {error}. Please ensure backend is running on port 5200.</div>;

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa', overflow: 'hidden' }}>

            <div className="text-center mb-5">
                <h1 className="display-4">
                    
                    <span style={{ fontWeight: 'bold', fontSize: '3rem', color: '#333' }}>A</span>
                    <a href="https://x.com/olvhrs"> 
                    <img
                        src="/images/personal.avif"
                        alt="Haptic Logo"
                        style={{
                            height: '40px',
                            width: '40px',
                            marginRight: '10px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                        />
                    </a>

                    designer working
                    with startups globally.
                    Currently steering the
                    ship at He Tptic
                </h1>


                <p>
                    <Link to="/home" className="d-inline-flex align-items-center text-decoration-none">
                        <img src="/images/download.png" alt="Haptic Logo" style={{ height: '24px', marginRight: '8px' }} />
                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>Haptic </span>
                    </Link>
                </p>

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
                            key={`${product.titel}-${index}`}
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
                                {product.urlImage ? (
                                    <img
                                        src={product.urlImage.startsWith('http') ?
                                            product.urlImage :
                                            `http://localhost:5200${product.urlImage}`}
                                        alt={product.titel || 'Product image'}
                                        className="img-fluid mb-3"
                                        style={{ maxHeight: '80px', objectFit: 'contain' }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/path/to/placeholder.png';
                                        }}
                                    />
                                ) : (
                                    <div className="text-muted mb-3">No Image</div>
                                )}
                                <h3 className="card-title">{product.titel}</h3>
                                <p className="card-text text-muted">{product.description}</p>

                                <p className="card-text text-muted">{product.description}</p>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <a href="/add" className="card-body text-center d-flex flex-column justify-content-center" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}> Add Card </a>

            <footer className="mt-5 text-center">
                <div className="footer-bottom">
                    <p>Oh Studio © {new Date().getFullYear()}</p>
                </div>
                <div className="footer-bottom">
                    <p>
                        Developed by{' '}
                        <a className="footer-link" href="https://github.com/MotayamTarada" target="_blank" rel="noopener noreferrer">
                            Motayam Tarada
                            
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ProductShowcase;