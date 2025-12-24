import React, { Component } from 'react';
import pathFinder from "../assets/path_finder.png"
import leafify from "../assets/leafify.png"
import lfr from "../assets/lfr.jpg"
import hydro from "../assets/hydro.png"

class Projects extends Component {
    projects = [
        {
            title: "Reborn",
            image: <img src="https://img.itch.zone/aW1nLzI0NTk3ODc1LnBuZw==/original/cvDa9n.png" alt="game logo" />,
            description: "A Hobby Project. 2D RPG platformer game created using godot game engine. A king was revived, now he has to reclaim his kingdom.",
            link: "https://naahian.itch.io/reborn",
            tags: ["Godot", "Game Dev", "RPG", "Platformer"]
        },

        {
            title: "Leafify",
            image: <img src={leafify} alt="app banner" />,
            description: "All in one AI powered plant companion app with plant guides, shop, garden plant info collection, detection and many more",
            link: "https://github.com/Naahian/Leafify",
            tags: ["Flutter", "Riverpod", "Firebase", "FastAPI"]
        },
        {
            title: "Path Visualizer",
            image: <img src={pathFinder} alt="ui" />,
            description: "Interactive visualization tool for shortest path algorithms (Dijkstra's, A*) with customizable grids and real-time animation.",
            link: "https://github.com/Naahian/Shortest-Path-Visualizer",
            tags: ["Algorithms", "Pygame", "Python"]
        },
        {
            title: "BuildBuddy",
            image: <i className="fas fa-robot"></i>,
            description: "AI-assisted eCommerce platform specifically designed for makers and DIY enthusiasts, featuring personalized recommendations and project planning tools.",
            link: "https://github.com/Naahian/buildbuddy_frontend",
            tags: ["Web", "React", "Flask.js"]
        },
        {
            title: "Hydroponic Automation",
            image: <img src={hydro} alt="ui" />,
            description: "IoT-based automated hydroponic system with real-time monitoring and control of nutrients, pH levels, and lighting conditions.",
            link: "https://github.com/Naahian/hydro_project",
            tags: ["IoT", "Arduino", "Automation"]
        },

        {
            title: "LFR PID Controller",
            image: <img src={lfr} alt="ui" />
            ,
            description: "Line Following Robot with PID-controlled motors for precise movement and adaptive speed control using infrared sensors.",
            link: "https://github.com/Naahian/LFR",
            tags: ["Embedded Systems", "Control Systems", "Robotics"]
        },

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