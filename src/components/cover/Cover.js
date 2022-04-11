import React from 'react';
import "./Cover.css";
import cover from "../../media/cover.mp4"

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={cover} autoPlay loop muted />
            <h1>João Pedro Cabeleira</h1>
            <p>Desenvolvedor</p>
        </div>
    );
};

export default Cover;