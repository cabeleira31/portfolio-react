import React from 'react';
import "./About.css";
import aboutimg from "../../media/about.JPG";

const About = () => {
    return (
        <div className="about-container">
            <div className='about-description'>
                <h3>Sobre mim:</h3>
                <p>Me chamo João Pedro, sou apaixonado por desenvolvimento
                    e por resolver problemas. A cobrança e novos desafios são
                    o que me motivam a ir mais longe.</p>
                <h4>Nome:</h4>
                <p>João Pedro Parcianello Cabeleira</p>
                <h4>Idade:</h4>
                <p>29 anos</p>
                <h4>Nacionalidade:</h4>
                <p>Brasileiro</p>
                <h4>Idiomas:</h4>
                <p>Português, Inglês e Espanhol.</p>
                <h4>Localização:</h4>
                <p>São Borja - RS</p>
            </div>
            <div className='about-img'>
                <img src={aboutimg} alt="about" />
            </div>
        </div>
    )
}

export default About
