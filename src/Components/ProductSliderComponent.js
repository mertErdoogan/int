import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating, RatingView } from 'react-simple-star-rating'

export default function ProductSliderComponent() {

    const [rating, setRating] = useState(3.5);

    const handleRating = (rate) => {
        setRating(rate);
    }

    const settings = {
        dots: true,
        draggable: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        customPadding: 30
    };

    const items = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="product-slider-root">
            <div className="product-slider-wrapper safe-area">
                <div className="product-slider-container">
                    <h2>Yakınınızdaki Ürünler</h2>
                    <p className="sub-desc">Seçtiğiniz Konum İstanbul</p>
                    <div className="slider-block">
                        <Slider {...settings}>
                            {
                                items && items.map((item, index) => <div>
                                    <div className="slider-item">
                                        <div className="img-block">
                                            <img src="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" alt="1234" />
                                            <div className="button-block">
                                                <input className="custom-input" type="checkbox" />
                                                <div className="fav-item">+</div>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <div className="time-item">
                                                <p>$11 / Hafta</p>
                                            </div>
                                            <div className="title-item">
                                                <h2>Vento Sofa Bed</h2>
                                                <p className="sub-text">Furniture</p>
                                                <Rating size={20} ratingValue={rating}></Rating>
                                            </div>
                                            <div className="deposit-item">
                                                <h2>Depozito Miktarı</h2>
                                                <p className="price">50$</p>
                                            </div>
                                            <p className="fuse-protected"> <i>+</i> Sigorta Korumalı</p>
                                            <div className="author-item">
                                                <div className="img-item">
                                                    <img src="https://ficquotes.com/images/characters/boromir-the-fellowship-of-the-ring-2001.jpg" alt="asdf" />
                                                </div>
                                                <div className="title-block">
                                                    <p className="title">Reklamı Gönderen</p>
                                                    <p>Faruk Güngör</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
