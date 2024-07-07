import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="../../src/assets/images/crs-12.jpg" alt="" />
        <h3 className="owl-name">Blue Nomad</h3>
        <p className="owl-text">Mamie Barnett</p>
      </div>
      <div>
        <img src="../../src/assets/images/crs-13.jpg" alt="" />
        <h3> </h3>
      </div>
      <div>
        <img src="../../src/assets/images/crs-14.jpg" alt="" />
        <h3> </h3>
      </div>
      <div>
        <img src="../../src/assets/images/crs-15.jpg" alt="" />
        <h3> </h3>
      </div>
      <div>
        <img src="../../src/assets/images/crs-16.jpg" alt="" />
        <h3> </h3>
      </div>

      <div>
        <img src="../../src/assets/images/crs-17.jpg" alt="" />
        <h3> </h3>
      </div>
    </Slider>
  );
}
