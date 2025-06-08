import React, { Component } from 'react';

class Background extends Component {
    constructor(props) {
        super(props);
        this.icons = [
            {
                name: 'bi-code-slash',
                color: '#89ddff',
                size: '4rem',
                position: { top: '15%', left: '25%' },
                animation: { floatSpeed: '3s' }
            },
            {
                name: 'bi-phone',
                color: '#c3e88d',
                size: '12rem',
                position: { top: '50%', left: '5%' },
                animation: { floatSpeed: '5s' }
            },
            {
                name: 'bi-cpu',
                color: '#ff9cac',
                size: '6rem',
                position: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
                animation: { floatSpeed: '3.3s' }
            },
            {
                name: 'bi-robot',
                color: '#f78c6c',
                size: '9rem',
                position: { top: '10%', right: '10%' },
                animation: { floatSpeed: '4s' }
            }
        ];
    }

    render() {
        return (
            <div className="background-icons" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: -1,
                pointerEvents: 'none'
            }}>
                {this.icons.map((icon, index) => (
                    <i
                        key={index}
                        className={`bi ${icon.name}`}
                        style={{
                            position: 'absolute',
                            color: icon.color,
                            fontSize: icon.size,
                            opacity: 0.5,
                            textShadow: `0px 10px 50px ${icon.color + "99"}`,
                            ...icon.position,
                            animation: [
                                `float ${icon.animation.floatSpeed} ease-in-out infinite`,
                            ].join(', ')
                        }}
                    />
                ))}

                {/* CSS for animations */}
                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0) rotateZ(8deg)}
                        50% { transform: translateY(-10px)  rotateZ(-8deg)}
                        
                    }
                    
                  
                `}</style>
            </div>
        );
    }
}

export default Background;