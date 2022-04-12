import React from 'react'
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
    return (
        <div className='carousel-container'>
            <div className='carousel-title'>
                <h2>Meus projetos</h2>
            </div>

            <Carousel
                plugins={['arrows']}
                slidesPerPage={3}
                infinite
                animationspeed={200}
                centered
                arrows={true}
                offset={50}
                itemWidth={400}
                slides={Slides}
                breakpoints={{
                    960: {
                        slidesPerPage: 1,
                        itemWidth: 250,
                        arrows: false,
                    }
                }}
            />

        </div>
    )
}

export default Slider
