import React, { Component } from 'react';

class Skills extends Component {
    frontend = [
        "Flutter",
        "Riverpod",
        "Lottie",
        "React",
        "Bootstrap5",
    ]

    backend = [
        "Flask",
        "FastAPI",
        "MySQL",
        "SQLite",
        "Firebase",
        "Postman",
    ]

    iot = [
        "C++",
        "Arduino",
        "ESP32",
        "Control System",
        "RTOS",
        "Linux",
    ]

    render() {
        return (
            <section id="skills" class="py-5">
                <div class="container">
                    <h2 class="section-title">Skills & Expertise</h2>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6">
                            <div class="skill-card">
                                <div class="skill-icon">
                                    <i class="skill-icon fas bi-columns-gap"></i>
                                </div>
                                <h4 style={{ color: "var(--text-secondary)" }}>Frontend Development</h4>
                                <p class="text-secondary mb-3">Creating cross-platform mobile applications with modern frameworks
                                </p>
                                <div>
                                    {this.frontend.map((item) => <span class="skill-badge">{item}</span>)}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="skill-card">
                                <div class="skill-icon">
                                    <i class="skill-icon fas fa-server"></i>
                                </div>
                                <h4 style={{ color: "var(--text-secondary)" }}>Backend Development</h4>
                                <p class="text-secondary mb-3">Building scalable server-side applications and APIs</p>
                                <div>
                                    {this.backend.map((item) => <span class="skill-badge">{item}</span>)}

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="skill-card">
                                <div class="skill-icon">
                                    <i class="skill-icon fas fa-microchip"></i>
                                </div>
                                <h4 style={{ color: "var(--text-secondary)" }}>IoT & Robotics</h4>
                                <p class="text-secondary mb-3">Developing intelligent systems and embedded solutions</p>
                                <div>
                                    {this.iot.map((item) => <span class="skill-badge">{item}</span>)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;