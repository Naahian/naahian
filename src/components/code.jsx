import React, { Component } from 'react';
import "./code.css";

class Code extends Component {
    skills = [
        "Mobile App",
        "IoT & Robotics",
        "UI/UX",
        "Web App",
    ];

    render() {
        return (
            <div className="code-container">

                {/* ── Top bar ── */}
                <div className="code-header">
                    <div className="code-dots">
                        <div className="code-dot dot-red"></div>
                        <div className="code-dot dot-yellow"></div>
                        <div className="code-dot dot-green"></div>
                    </div>
                    <span className="code-filename">developer.py</span>
                    <span className="code-lang">● python</span>
                </div>

                {/* ── Code body ── */}
                <div className="code-body">
                    <pre className="code-output">
                        <span className="comment"># Building innovative solutions{'\n'}</span>
                        <span className="keyword">class </span>
                        <span className="class">Developer</span>
                        <span className="punctuation">:{'\n'}</span>

                        {'    '}
                        <span className="keyword">def </span>
                        <span className="function">__init__</span>
                        <span className="punctuation">(</span>
                        <span className="self">self</span>
                        <span className="punctuation">):{'\n'}</span>

                        {'        '}
                        <span className="self">self</span>
                        <span className="operator">.</span>
                        <span className="punctuation">name </span>
                        <span className="operator">= </span>
                        <span className="string">"Abdullah Al Nahian"</span>
                        <span className="punctuation">{'\n'}</span>

                        {'        '}
                        <span className="self">self</span>
                        <span className="operator">.</span>
                        <span className="punctuation">role </span>
                        <span className="operator">= </span>
                        <span className="string">"CS Undergraduate"</span>
                        <span className="punctuation">{'\n'}</span>

                        {'        '}
                        <span className="self">self</span>
                        <span className="operator">.</span>
                        <span className="punctuation">skills </span>
                        <span className="operator">= </span>
                        <span className="punctuation">[{'\n'}</span>

                        {this._buildSkills()}

                        {'        '}
                        <span className="punctuation">]{'\n'}</span>

                        {'        '}
                        <span className="self">self</span>
                        <span className="operator">.</span>
                        <span className="punctuation">passion </span>
                        <span className="operator">= </span>
                        <span className="number">100</span>
                        <span className="punctuation">{'\n'}</span>

                        {'        '}
                        <span className="self">self</span>
                        <span className="operator">.</span>
                        <span className="punctuation">open_to_work </span>
                        <span className="operator">= </span>
                        <span className="keyword">True</span>
                        <span className="code-cursor"></span>
                    </pre>
                </div>

            </div>
        );
    }

    _buildSkills() {
        return this.skills.map((item, index) => (
            <span key={index}>
                {'            '}
                <span className="string">"{item}"</span>
                <span className="punctuation">,{'\n'}</span>
            </span>
        ));
    }
}

export default Code;