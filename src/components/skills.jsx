import React, { Component } from 'react';
class Skills extends Component {

    skills = [
        {
            category: "Frontend Development",
            icon: "fa-solid fa-layer-group",
            description: "Creating cross-platform mobile applications with modern frameworks",
            items: [
                { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", percentage: 90 },
                { name: "Riverpod", icon: "https://riverpod.dev/img/logo.svg", percentage: 80 },
                { name: "GetX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", percentage: 75 },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 38 },
                { name: "Bootstrap5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", percentage: 35 },
            ],
        },
        {
            category: "Backend Development",
            icon: "fa-solid fa-server",
            description: "Building scalable server-side applications and APIs",
            items: [
                { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", percentage: 40 },
                { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", percentage: 80 },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", percentage: 70 },
                { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", percentage: 40 },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", percentage: 65 },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", percentage: 70 },
                { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", percentage: 65 },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", percentage: 25 },
            ],
        },
        {
            category: "IoT & Robotics",
            icon: "fa-solid fa-microchip",
            description: "Developing intelligent systems and embedded solutions",
            items: [
                { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", percentage: 90 },
                { name: "ESP", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/espressif.svg", percentage: 85 },
                { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", percentage: 70 },
                { name: "Control System", icon: "https://img.icons8.com/?size=100&id=15163&format=png&color=000000", percentage: 60 },
                { name: "RTOS", icon: "https://img.icons8.com/?size=100&id=tU0pohYbgHJW&format=png&color=000000", percentage: 30 },
                { name: "ROS2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg", percentage: 25 },
            ],
        },
    ];

    other_skills = ["Clean Architecture", "MVC", "Feature First"]

    render() {
        return (
            <section id="skills" className="py-5">
                <div className="container">
                    <h2 className="section-title">Skills & Expertise</h2>
                    {this.buildOtherSkills()}
                    <div className="row g-4">
                        {this.skills.map((cat) => (
                            <div key={cat.category} className="col-lg-4 col-md-6">
                                <div className="skill-card">
                                    <div className="skill-icon">
                                        <i className={cat.icon}></i>
                                    </div>
                                    <h4 style={{ color: "var(--text-secondary)" }}>{cat.category}</h4>
                                    <p className="text-secondary mb-3">{cat.description}</p>
                                    <div className="skill-items-list">
                                        {cat.items.map((item) => (
                                            <div key={item.name} className="skill-item">
                                                <div className="skill-item-header">
                                                    <span >
                                                        <img
                                                            src={item.icon}
                                                            alt={item.name}
                                                            className="badge-icon"
                                                        />
                                                        {item.name}
                                                    </span>
                                                    <span className="skill-percentage">{item.percentage}%</span>
                                                </div>
                                                <div className="skill-bar-track">
                                                    <div
                                                        className="skill-bar-fill"
                                                        style={{ "--target-width": `${item.percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    buildOtherSkills() {
        return (
            <div style={{ paddingBottom: "1rem" }}>
                Making scalable apps with {this.other_skills.map((item) => (
                    <span key={item} className='skill-badge'>
                        {item}
                    </span>
                ))} in mind.
            </div>
        );
    }
}

export default Skills;