import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "../images/prev.png";
import next from "../images/next.png";
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow1 prev-arrow1" onClick={onClick}>
            <img className="prev1" src={prev} alt="prev" />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow1 next-arrow1" onClick={onClick}>
            <img className="next1" src={next} alt="next" />
        </div>
    );
};

const MobileCarousel = ({ info }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="carousel-container1">
            <Slider {...settings}>
                {info?.map((data, index) => {
                    return <div key={index} className="carousel-item-container1">
                        <div className="carousel-item-child1">        
                            <img src={data.img1} className="product-image1" alt={data.alt} />
                            <div className="overlay1"></div>                    
                        </div>

                        <div className="text-center carousel-item-child2 py-3">
                            <h1 className="mobile-head">{data.heading}</h1>
                            <div className="text-center d-flex justify-content-center row">
                                <p className="mobile-text col-sm-8 col-8">{data.content}</p>
                            </div>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    );
};

export default MobileCarousel;
