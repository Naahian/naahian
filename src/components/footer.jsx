import React, { Component } from 'react';

class PortfolioFooter extends Component {
    render() {
        return (
            <footer className="text-white pt-5" style={{ background: "var(--bg-secondary)" }}>
                <div id='contact'>
                    <div className="container row">
                        {/* Contact Information */}
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase border-bottom border-primary pb-2 d-inline-block">
                                Contact Me
                            </h5>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-2">
                                    <i className="bi bi-envelope me-2 text-primary"></i>
                                    hello@example.com
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-geo-alt me-2 text-primary"></i>
                                    San Francisco, CA
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-4' ></div>
                        {/* Social Media */}
                        <div className="col-md-4 mb-4 ">
                            <h5 className="text-uppercase border-bottom border-primary pb-2 d-inline-block">
                                Follow Me
                            </h5>
                            <div className="mt-3 social-icons">
                                <a href="https://github.com/Naahian" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github fs-4"></i>
                                </a>
                                <a href="www.linkedin.com/in/abdullah-al-nahian-3286841b1" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin fs-4"></i>
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="row py-3 px-5 border-top border-secondary" >
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-0">
                                &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <a href="#privacy" className="text-white text-decoration-none me-3">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-white text-decoration-none">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer >
        );
    }
}

export default PortfolioFooter;