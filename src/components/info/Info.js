import React from 'react';
import "./Info.css";

const Info = () => {
    return (
        <div className="info">
            <h2>Skills</h2>
            <div className='skills-bar'>
                <div className='bar'>
                    <div className='info'>
                        <span>HTML</span>
                    </div>
                    <div className='progress-line html'>
                        <span></span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>CSS</span>
                    </div>
                    <div className='progress-line css'>
                        <span></span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>JavaScript</span>
                    </div>
                    <div className='progress-line javascript'>
                        <span></span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>React</span>
                    </div>
                    <div className='progress-line react'>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
