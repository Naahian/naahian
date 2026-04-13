import React, { Component } from 'react';
import "./experience.css";

class ExperienceSection extends React.Component {
    experiences = [
        {
            current: false,
            logo: "RB",
            title: "Senior Executive",
            company: "Robotics Club of Brac University",
            type: "Full-time",
            date: "Jan 2022 – Jan 2025",
            bullets: [
                "Build and led IoT project Smart Hydroponic Farming",
                "Built LFR for participating in contests",
                "Took robotics workshop classes and mentored newcomers",
                "Helped planning and preparing workshop contents"
            ],
            tags: ["Arduino", "ESP", "Control System", "IoT", "Robotics"],
        },
        {
            current: false,
            logo: "SG",
            title: "Flutter Developer Intern",
            company: "Sugary LLC",
            type: "Part-time",
            date: "Feb 2023 – May 2023",
            bullets: [
                "Learned and applied Clean Architecture.",
                "Helped in making Admin Panel App",
                "Applied RestAPI"
            ],
            tags: ["Flutter", "Clean Architecture", "GetX", "Figma"],
        }
    ];

    render() {
        return (
            <section id="experience" className="py-5">
                <div className="container">
                    <h2 className="section-title">Experience</h2>
                    <div className="section-underline"></div>
                    <div className="exp-timeline">
                        {this._buildCards()}
                    </div>
                </div>
            </section>
        );
    }

    _buildCards() {
        return this.experiences.map(exp => (
            <div key={exp.company} className="exp-item">
                <div className="exp-card">
                    <div className="exp-card-head">
                        <div className="exp-head-left">
                            <div className="exp-logo">{exp.logo}</div>
                            <div>
                                <p className="exp-role">{exp.title}</p>
                                <p className="exp-company">{exp.company}</p>
                            </div>
                        </div>
                        <div className="exp-meta-right">
                            <div className="exp-badges">
                                {exp.current && (
                                    <span className="exp-badge exp-badge-current">● Current</span>
                                )}
                                <span className="exp-badge exp-badge-type">{exp.type}</span>
                            </div>
                            <span className="exp-date">{exp.date}</span>
                        </div>
                    </div>
                    <hr className="exp-divider" />
                    <ul className="exp-bullets">
                        {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                    <div className="exp-tags">
                        {exp.tags.map(tag => (
                            <span key={tag} className="exp-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        ));
    }
}

export default ExperienceSection;