import React, { Component } from 'react';

const Info = {
    "contact": ["nahianbusi@gmail.com", "Dhaka, Bangladesh"],
    "links": [{
        "github": "https://github.com/Naahian",
        "linkedin": "https://www.linkedin.com/in/abdullah-al-nahian-3286841b1"

    }]
}


class PortfolioFooter extends Component {

    createLinksComponent() {
        return <div className="mt-3 social-icons">
            {Info.links.flatMap(obj =>
                Object.entries(obj)
                    .filter(([_, url]) => url) // skip empty links
                    .map(([key, url]) => (
                        <a
                            key={key}
                            href={url}
                            className="text-light me-3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={`bi bi-${key} fs-4`}></i>
                        </a>
                    ))
            )}
        </div>;

    }


    render() {


        return (
            <footer className="text-white pt-5" style={{ background: "var(--bg-secondary)" }}>
                <div id='contact'>
                    <div className="container row justify-content-center">
                        {/* Contact Information */}
                        <div className="col-md-7 mb-4 text-start">
                            <h5 className="text-uppercase border-bottom border-primary pb-2 d-inline-block">
                                Contact Me
                            </h5>
                            <ul className="list-unstyled mt-3 ">

                                {/* EMAIL */}
                                <li className="mb-2">
                                    <i className="bi bi-envelope me-2 text-primary"></i>
                                    {Info["contact"][0]}
                                </li>
                                {/* ADDRESS */}
                                <li className="mb-2">
                                    <i className="bi bi-geo-alt me-2 text-primary"></i>
                                    {Info["contact"][1]}
                                </li>
                            </ul>
                        </div>


                        <div className="col-md-3 mb-4 text-start">
                            <h5 className="text-uppercase border-bottom border-primary pb-2 d-inline-block">
                                Follow Me
                            </h5>
                            {this.createLinksComponent()}

                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="py-3 px-5 border-top border-secondary justify-content-center" >
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} <b>My Portfolio</b> made by <b>Abduall Al Nahian</b>. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer >
        );
    }
}

export default PortfolioFooter;