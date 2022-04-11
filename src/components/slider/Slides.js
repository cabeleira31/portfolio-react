import React from "react";
import aboutimg from "../../media/about.JPG"
import "./Slider.css";

const slidesInfo = [
    {
        src: aboutimg,
        alt: "Project 1",
        desc: "Project 1"
    },
    {
        src: aboutimg,
        alt: "Project 2",
        desc: "Project 2",
    },
    {
        src: aboutimg,
        alt: "Project 3",
        desc: "Project 3"
    }
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;