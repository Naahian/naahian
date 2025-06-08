import React, { Component } from 'react';
import "./code.css";

class Code extends Component {
    skills = [
        "Mobile App",
        "IoT & Robotics",
        "UI/UX",
        "Web App",
    ]

    render() {
        return (
            <div class="code-container">

                <div class="code-header">
                    <div class="code-dot dot-red"></div>
                    <div class="code-dot dot-yellow"></div>
                    <div class="code-dot dot-green"></div>
                </div>
                <div id="code-output" className='code-output'>
                    <span style={{ color: '#64748b' }}># Building innovative solutions</span>{'\n'}
                    <span style={{ color: '#c792ea' }}>class</span> <span style={{ color: '#82aaff' }}>Developer</span>:{'\n'}
                    {'    '}<span style={{ color: '#c792ea' }}>def</span> <span style={{ color: '#ffcb6b' }}>__init__</span>(<span style={{ color: '#f07178' }}>self</span>):{'\n'}
                    {'        '}<span style={{ color: '#f07178' }}>self</span><span style={{ color: '#89ddff' }}>.</span>skills <span style={{ color: '#89ddff' }}>=</span> <span style={{ color: '#eeffff' }}>[
                        {'\n'}
                        {this.generateSkills()}
                        {'        '}]</span>{'\n'}
                    {'        '}<span style={{ color: '#f07178' }}>self</span><span style={{ color: '#89ddff' }}>.</span>passion <span style={{ color: '#89ddff' }}>=</span> <span style={{ color: '#f78c6c' }}>100</span>
                </div>

            </div>);
    }

    generateSkills() {
        return this.skills.map((item, index) =>
            <span>
                {'            '}<span style={{ color: '#c3e88d' }}>"{item}"</span><span style={{ color: '#eeffff' }}>,</span>{'\n'}
            </span>
        );
    }
}


export default Code;
