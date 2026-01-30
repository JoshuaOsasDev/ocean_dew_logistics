"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import SlideCard from "./slideCard";
import { sliderCardData } from "@/lib/data";
import { sliderCardPropType } from "@/types/types";

function Carousel() {
  const [curentIndex, setCurentIndex] = useState(0);

  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    dots: false,
    arrows: false,
  };
  return (
    <div className="">
      <Slider {...settings}>
        {sliderCardData.map((data: sliderCardPropType) => {
          return <SlideCard key={data.id} {...data} />;
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
