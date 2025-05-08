import React from 'react';
import '../styles/Work.css'; 
const projects = [
    {
        title: 'Harvard',
        description: 'Empowering youth with neuroscience',
        image: 'images/peronal1.avif',

    },
    {
        title: 'Neon Horizons',
        description: 'Welcome to the cyberscape',
        image: 'images/personal2.avif'
    },
    {
        title: 'Quantum',
        description: 'Redefining digital experiences',
        image: 'images/personal3'
    }
];

const Work = () => (
    <section className="work-section">
        <div className="work-title-wrapper">
            <h2 className="work-title">Partners + Projects</h2>
        </div>

        <div className="work-grid">
            {projects.map((project, index) => (
                <div key={index} className="work-card">
                    <img src={project.image} alt={project.title} className="work-image" />
                    <div className="work-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Work;
