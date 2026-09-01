import React, { Component } from 'react';
import pathFinder from "../assets/path_finder.png"
import leafify from "../assets/leafify.png"
import clean from "../assets/clean.png"
import lfr from "../assets/lfr.jpg"
import hydro from "../assets/hydro.png"
import cashflow from "../assets/cashflow.png"

class Projects extends Component {
    projects = [
     
{
            title: "CashFlow",
            image: <img src={cashflow} alt="app banner" />,
            description: "A local first finance tracker app with smart analytics, recurring transaction, budget allocation and muchmore. All userdata are encrypted and never leaves app.",
            link: "https://github.com/Naahian/CashFlow",
            tags: ["Flutter", "Riverpod", "Hive", "RevenueCat"]
        },
        {
            title: "Leafify",
            image: <img src={leafify} alt="app banner" />,
            description: "All in one AI powered plant companion app with plant guides, shop, garden plant info collection, detection and many more",
            link: "https://github.com/Naahian/Leafify",
            tags: ["Flutter", "Riverpod", "Firebase", "FastAPI","SSLCommerz"]
        },
         {
            title: "Clean Commerce",
            image: <img src={clean} alt="app banner" />,
            description: "Clean Commerce is a regular e-commerce application with a special purpose — demonstrating how Clean Architecture combined with MVVM and SOLID principles creates maintainable, testable, and scalable Flutter apps.",
            link: "https://github.com/Naahian/clean_commerce",
            tags: ["Flutter", "Riverpod", "Supabase","GooglePay"]
        },
        {
            title: "Path Visualizer",
            image: <img src={pathFinder} alt="ui" />,
            description: "Interactive visualization tool for shortest path algorithms (Dijkstra's, A*) with customizable grids and real-time animation.",
            link: "https://github.com/Naahian/Shortest-Path-Visualizer",
            tags: ["Algorithms", "Pygame", "Python"]
        },
           {
            title: "Reborn",
            image: <img src="https://img.itch.zone/aW1nLzI0NTk3ODc1LnBuZw==/original/cvDa9n.png" alt="game logo" />,
            description: "A Hobby Project. 2D RPG platformer game created using godot game engine. A king was revived, now he has to reclaim his kingdom.",
            link: "https://naahian.itch.io/reborn",
            tags: ["Godot", "Game Dev", "RPG", "Platformer"]
        },
      
        {
            title: "Hydroponic Automation",
            image: <img src={hydro} alt="ui" />,
            description: "IoT-based automated hydroponic system with real-time monitoring and control of nutrients, pH levels, and lighting conditions.",
            link: "https://github.com/Naahian/hydro_project",
            tags: ["IoT", "Arduino", "Control Systems"]
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
