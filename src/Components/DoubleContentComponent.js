import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating, RatingView } from 'react-simple-star-rating'

export default function DoubleContentComponent() {

    const settings = {
        dots: true,
        draggable: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const items = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="double-content-root">
            <div className="double-content-wrapper safe-area">
                <div className="double-content-container">
                    <div className="left-block">
                        <div className="content-block">
                            <div className="img-item">
                                <img src="https://uygunakiraladev.komut.team/static/media/company-name.52199d64.svg" alt="asd" />
                            </div>
                            <p className="title-big">1.5 Milyondan fazla mutlu Müşteri</p>
                            <p>Uygunakirala hakkındaki tecrübeleri ile ilgili ne söylediklerini görün.</p>
                        </div>
                    </div>
                    <div className="right-block">
                        <div className="slide-block">
                            <Slider {...settings}>
                                {
                                    items.map(() =>
                                        <div>
                                            <div className="slider-item">
                                                <div className="top-block">
                                                    <p className="title">Mehmet Polat Koçak</p>
                                                    <p>Frontend Developer</p>
                                                </div>
                                                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa unde recusandae sim</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
