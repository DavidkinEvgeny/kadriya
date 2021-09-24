import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import './index.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function MySlider({imagArray}) {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const addSliders = () => {
    setNav1(slider1)
    setNav2(slider2)
  }
  useEffect(() => {
    addSliders()
  }, [])
  let slider1
  let slider2
  const settings1 = {
    verticalSwiping: true,
    vertical: true
  }
  const settings = {
    slidesToShow: 10,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
        slidesToShow: 8,
        swipeToSlide: true,
        focusOnSelect: true
        }
      },
      {
        breakpoint: 769,
        settings: {
        slidesToShow: 5,
        swipeToSlide: true,
        focusOnSelect: true
        }
      },
      {
        breakpoint: 481,
        settings: {
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true
        }
      },
    ]
  }
  return (
    <div className='MySlider'>
      <Slider 
        asNavFor={nav2}
        ref={slider => (slider1 = slider)}
        {...settings1}
      >
        {imagArray.map((img, index) => {
          return(
            <div className='MySlider__item' key={index}>
              <img src={img} alt='asd' className='MySlider__imgMax' />
            </div>
          )
        })}
      </Slider>
      <Slider 
        asNavFor={nav1}
        ref={slider => (slider2 = slider)}
        // slidesToShow={10}
        // swipeToSlide={true}
        // focusOnSelect={true}
        {...settings}
      >
        {imagArray.map((img, index) => {
          return(
            <div className='MySlider__item' key={index}>
              <img src={img} alt='asd' className='MySlider__img' />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
