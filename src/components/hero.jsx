import React, { Component } from 'react';
import Code from './code';

class Hero extends Component {
    render() {
        return (
            <section className="hero-section d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0 text-start">
                            <h3 className="mb-4" style={{ color: "var(--text-tertiary)" }}>Hi, I'm</h3>
                            <h1 className="display-2 fw-bold mb-3" style={{ fontFamily: "Tahoma" }}>
                                Abdullah Al <span className="text-gradient">Nahian</span>
                            </h1>
                            <p className="lead mb-4" style={{ color: "var(--text-secondary)" }}>
                                A Computer Science undergraduate who loves to research, create innovative solutions through technology. Passionate about building the future, one line of code at a time.
                            </p>
                            <div className="d-flex gap-3">
                                <a className="btn btn-primary btn-lg px-4" href='#projects'>
                                    View My Work
                                </a>
                            </div>
                        </div>
                        {/* Illustration */}
                        <div className="ps-5 col-md-6">
                            <Code />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;