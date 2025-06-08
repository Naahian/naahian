import React, { Component } from 'react';

class Projects extends Component {
    projects = [
        {
            title: "BuildBuddy",
            image: <i className="fas fa-robot"></i>, // or "/images/buildbuddy.png"
            description: "AI-assisted eCommerce platform specifically designed for makers and DIY enthusiasts, featuring personalized recommendations and project planning tools.",
            link: "https://github.com/Naahian/buildbuddy_frontend",
            tags: ["Web", "React", "Flask.js"]
        },
        {
            title: "Hydroponic Automation",
            image: <i className="fas fa-leaf"></i>, // or "/images/hydroponic.png"
            description: "IoT-based automated hydroponic system with real-time monitoring and control of nutrients, pH levels, and lighting conditions.",
            link: "https://github.com/Naahian/hydro_project",
            tags: ["IoT", "Arduino", "Automation"]
        },
        {
            title: "Path Visualizer",
            image: <i className="fas fa-project-diagram"></i>, // or "/images/path-visualizer.png"
            description: "Interactive visualization tool for shortest path algorithms (Dijkstra's, A*) with customizable grids and real-time animation.",
            link: "https://github.com/Naahian/Shortest-Path-Visualizer",
            tags: ["Algorithms", "Pygame", "Python"]
        },
        {
            title: "LFR PID Controller",
            image: <i className="fas fa-car-side"></i>, // or "/images/lfr.png"
            description: "Line Following Robot with PID-controlled motors for precise movement and adaptive speed control using infrared sensors.",
            link: "https://github.com/Naahian/LFR",
            tags: ["Embedded Systems", "Control Systems", "Robotics"]
        }
    ];

    render() {
        return (
            <section id="projects" class="py-5">
                <div class="container">
                    <h2 class="section-title">Featured Projects</h2>
                    <div class="row g-4">
                        {this.projects.map((project) => this.buildCard(project))}
                    </div>
                </div>
            </section>
        );
    }

    buildCard(project) {
        return (
            <div class="col-lg-4 col-md-6">
                <div class="project-card" style={{ backgroundColor: "var(--bg-secondary)" }}>
                    <div class="project-image">
                        {project.image}
                    </div>
                    <div class="project-content">
                        <h5 class="mb-2">{project.title}</h5>
                        <p class="mb-3" style={{ color: "var(--text-tertiary)" }}>{project.description}</p>
                        <div class="mb-3">
                            {project.tags.map((tag) => <span class="project-tag">{tag}</span>)}

                        </div>
                        <a href={project.link} class="btn btn-primary ">
                            <i class="fas fa-external-link-alt me-1"></i>View Project
                        </a>
                    </div>
                </div>
            </div>);
    }
}

export default Projects;