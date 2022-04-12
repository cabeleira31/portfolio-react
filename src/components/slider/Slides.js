import React from "react";
import projeto1 from "../../media/projeto1.png"
import projeto2 from "../../media/projeto2.png"
import "./Slider.css";

const slidesInfo = [
    {
        src: projeto1,
        alt: "Portfolio",
        desc: "Portfólio",
        url: "https://portfolio-joao-react.web.app/",
    },
    {
        src: projeto2,
        alt: "Formulario",
        desc: "Formulario",
        url: "https://formulario-react-fca18.web.app/",
    }

]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <a href={slide.url}>
            <img src={slide.src} alt={slide.alt} />
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;