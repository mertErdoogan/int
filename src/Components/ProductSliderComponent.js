import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductSliderComponent() {

    const settings = {
        dots: true,
        draggable: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        customPadding: 30
    };

    return (
        <div className="product-slider-root">
            <div className="product-slider-wrapper safe-area">
                <div className="product-slider-container">
                    <h2>Yakınınızdaki Ürünler</h2>
                    <p className="sub-desc">Seçtiğiniz Konum İstanbul</p>
                    <div className="slider-block">
                        <Slider {...settings}>
                            <div>
                                <div className="slider-item">
                                    <div className="img-block">
                                        <img src="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" alt="1234" />
                                        <input className="custom-input" type="checkbox" />
                                        <div className="fav-item">+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="img-block">
                                        <img src="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" alt="1234" />
                                        <input className="custom-input" type="checkbox" />
                                        <div className="fav-item">+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="img-block">
                                        <img src="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" alt="1234" />
                                        <input className="custom-input" type="checkbox" />
                                        <div className="fav-item">+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="img-block">
                                        <img src="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" alt="1234" />
                                        <input className="custom-input" type="checkbox" />
                                        <div className="fav-item">+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="img-block">
                                        <img src="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" alt="1234" />
                                        <input className="custom-input" type="checkbox" />
                                        <div className="fav-item">+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <div className="img-block">
                                        <img src="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" alt="1234" />
                                        <input className="custom-input" type="checkbox" />
                                        <div className="fav-item">+</div>
                                    </div>
                                </div>
                            </div>
                            
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
