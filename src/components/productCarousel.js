import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "../images/prev.png";
import next from "../images/next.png";
import youtube from "../images/youtube.png"
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <img className="prev1" src={prev} alt="prev" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <img className="next1" src={next} alt="next" />
    </div>
  );
};

const ProductCarousel = ({ info }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {info?.map((data, index) => {
          return <div key={index} className="carousel-item-container">
            <img src={data.img} className="product-image" alt={data.alt} />
            <div className="youtube-hover">
              <img src={youtube} className="youtube-image" alt={`youtube-image${index}`} />
            </div>
          </div>
})}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
