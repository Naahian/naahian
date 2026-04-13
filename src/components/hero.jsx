import React, { Component } from 'react';
import Code from './code';

class Hero extends Component {

    quick_info = [
        { num: '5+', label: 'Years coding' },
        { num: '6+', label: 'Projects built' },
        { num: '4', label: 'Tech domains' },
    ];

    description = "                A Computer Science undergraduate who loves to research, create              innovative solutions through technology. Passionate about building              the future, one line of code at a time.";

    render() {
        return (
            <section className="hero-section d-flex align-items-center">
                {/* Background effects */}
                <div className="hero-grid-bg"></div>

                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="row align-items-center">

                        {/* ── Left col ── */}
                        <div className="col-lg-6 mb-5 mb-lg-0 text-start">

                            <div className="hero-greeting mb-3">
                                <div className="hero-greeting-line"></div>
                                <span className="hero-greeting-text">Hello, world</span>
                            </div>

                            <h1 className="hero-name mb-3">
                                Abdullah Al<br />
                                <span className="text-gradient">Nahian</span>
                            </h1>

                            <p className="hero-tagline mb-4">
                                {this.description}
                            </p>

                            <div className="hero-tags mb-4">
                                {['Mobile App', 'IoT & Robotics', 'UI / UX', 'Web App'].map(tag => (
                                    <span key={tag} className="hero-tag">{tag}</span>
                                ))}
                            </div>

                            <div className="d-flex gap-3 flex-wrap">
                                <a className="btn btn-primary btn-hero px-4" href="#projects">
                                    View My Work
                                </a>
                                <a className="btn btn-ghost-hero px-4" href="#contact">
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* ── Right col ── */}
                        <div className="col-lg-6 ps-lg-5">
                            <Code />
                            <div className="hero-stats mt-3">
                                {this.quick_info.map(s => (
                                    <div key={s.label} className="hero-stat-card">
                                        <div className="hero-stat-num text-gradient">{s.num}</div>
                                        <div className="hero-stat-lbl">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;