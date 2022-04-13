import React from 'react';
import "./About.css";
import aboutimg from "../../media/about.JPG";

const About = () => {
    return (
        <div className="about-container">
            <div className='about-description'>
                <h3>Sobre mim:</h3>
                <p>Me chamo João Pedro, sou apaixonado por desenvolvimento
                    e por resolver problemas. Metas e novos desafios são
                    o que me motivam a ir mais longe.</p>
                <h4>Nome:</h4>
                <p>João Pedro Parcianello Cabeleira</p>
                <h4>Idade:</h4>
                <p>29 anos</p>
            </div>
            <div className='about-img'>
                <img src={aboutimg} alt="about" />
            </div>
        </div>
    )
}

export default About
