import React, { Component } from 'react';


class Skills extends Component {

    skills = [
        {
            category: "Frontend Development",
            icon: "fa-solid fa-layer-group",
            items: [
                { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter", percentage: 85 },
                { name: "Provider", icon: "https://cdn.simpleicons.org/dart", percentage: 75 },
                { name: "Riverpod", icon: "https://riverpod.dev/img/logo.svg", percentage: 65 },
                { name: "React", icon: "https://cdn.simpleicons.org/react", percentage: 35 },
                { name: "Bootstrap5", icon: "https://cdn.simpleicons.org/bootstrap", percentage: 35 },
            ],
        },
        {
            category: "Backend Development",
            icon: "fa-solid fa-server",
            items: [
                { name: "Flask", icon: "https://cdn.simpleicons.org/flask", percentage: 40 },
                { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi", percentage: 85 },
                { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql", percentage: 70 },
                { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite", percentage: 40 },
                { name: "Docker", icon: "https://cdn.simpleicons.org/docker", percentage: 30 },

            ],
        },
        {
            category: "IoT & Robotics",
            icon: "fa-solid fa-microchip",
            items: [
                { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino", percentage: 90 },
                { name: "ESP", icon: "https://cdn.simpleicons.org/espressif", percentage: 85 },
                { name: "Raspberry Pi", icon: "https://cdn.simpleicons.org/raspberrypi", percentage: 70 },
                { name: "Control System", icon: "https://img.icons8.com/?size=100&id=15163&format=png&color=000000", percentage: 60 },
                { name: "RTOS", icon: "https://img.icons8.com/?size=100&id=tU0pohYbgHJW&format=png&color=000000", percentage: 30 },
                { name: "ROS2", icon: "https://cdn.simpleicons.org/ros", percentage: 25 },
                { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch", percentage: 25 },
            ],
        },
        {
            category: "Tools & Others",
            icon: "fa-solid fa-tools",
            items: [
                { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/firebase-plain.svg", percentage: 60 },
                { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase", percentage: 60 },
                { name: "Postman", icon: "https://cdn.simpleicons.org/postman", percentage: 70 },
                { name: "figma", icon: "https://cdn.simpleicons.org/figma", percentage: 50 },
                { name: "FreeCad", icon: "https://cdn.simpleicons.org/freecad", percentage: 50 },

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
                        {this._buildSkillCards()}
                    </div>
                </div>
            </section>
        );
    }

    _buildSkillCards() {
        return this.skills.map((cat) => (
            <div key={cat.category} className="col-lg-4 col-md-6">
                <div className="skill-card">
                    <div className="skill-icon">
                        <i className={cat.icon}></i>
                    </div>
                    <h4 style={{ color: "var(--text-secondary)" }}>{cat.category}</h4>
                    <div style={{ "height": "2rem" }}></div>
                    <div className="skill-items-list">
                        {this._buildSkills(cat)}
                    </div>
                </div>
            </div>
        ));
    }

    _buildSkills(cat) {
        return cat.items.map((item) => (
            <div key={item.name} className="skill-item">
                <div className="skill-item-header">
                    <span>
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="badge-icon" />
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
        ));
    }

    buildOtherSkills() {
        return (
            <div style={{ paddingBottom: "2rem", color: "#aaa" }}>
                Making scalable apps with {this.other_skills.map((item) => (
                    <span key={item} style={{ margin: "0.2rem", background: "#00000055", padding: "0.2rem 0.5rem", borderRadius: "1rem" }}>
                        {item}
                    </span>
                ))} in mind.
            </div>
        );
    }
}

export default Skills;