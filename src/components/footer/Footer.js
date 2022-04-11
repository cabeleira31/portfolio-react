import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>João Pedro</h1>

                <p>São Borja<i className='fa fa-map-marker map' aria-hidden="true"></i></p>
            </div>
            <div className='footer-contact'>
                <h3>Entre em contato:</h3>
                <div className='footer-phone'>
                    <h4>Telefone:</h4>
                    <p>(55)98402-8802</p>
                </div>
                <div className='footer-email'>
                    <h4>Email:</h4>
                    <p>jpcabeleira31@gmail.com</p>
                </div>
            </div>
            <div className='footer-sns'>
                <div className='desgin-by'>
                    Design by João Pedro
                </div>
                <div className='sns-links'>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-p-cabeleira-a90b28109/" target="_blank" rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5555984028802&text=Hello%20João%2C%20How%20are%20you%3F%20Just%20got%20your%20number%20from%20your%20portfolio!!" target="_blank" rel='noreferrer'>
                        <i className='fab fa-whatsapp whatsapp'></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
