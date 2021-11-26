import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderComponent() {
    const settings = {
        dots: true,
        draggable: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-root">
            <div className="slider-wrapper">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="slick-item">
                            <div className="slider-item safe-area">
                                <div className="img-block">
                                    <img src="https://uygunakiraladev.komut.team/static/media/carousel-example.17671e5f.png" alt="" />
                                </div>
                                <div className="text-block">
                                    <p className="header-text">Furniture</p>
                                    <h1 className="main-text">Work Smarter Save Smarter</h1>
                                    <p className="discount-text">Get %10 off every month</p>
                                    <div className="btn-fll-white">Know more</div>
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="slider-item safe-area">
                                <div className="img-block">
                                    <img src="https://uygunakiraladev.komut.team/static/media/carousel-example.17671e5f.png" alt="" />
                                </div>
                                <div className="text-block">
                                    <p className="header-text">Furniture</p>
                                    <h1 className="main-text">Work Smarter Save Smarter</h1>
                                    <p className="discount-text">Get %10 off every month</p>
                                    <div className="btn-fll-white">Know more</div>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            </div>
        </div >
    )
}
