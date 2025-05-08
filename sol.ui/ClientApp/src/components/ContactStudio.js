import React, { useState } from 'react';

function ContactStudio() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here (send to API)
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact-section bg-light py-5" id="contact">
            <div className="container">
                <h2 className="mb-4 text-center">Contact Us</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5>Get in Touch</h5>
                        <p>Email: contact@hapticstudio.com</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Address: 123 Creative Ave, Cityville</p>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactStudio;
