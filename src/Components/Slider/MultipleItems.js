import React from "react";
import Slider from "react-slick";
import Row from "../Row/Row";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div>
      <h2>Multiple items</h2>
      <Slider {...settings}>
        <Row/>
      </Slider>
    </div>
  );
}

export default MultipleItems;
