import React, { useState, useEffect } from 'react';
import './style.css';
import { images } from '../assets/images/carouselData';
import './Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrImg((prevImg) => (prevImg + 1) % images.length);
    }, 5000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className='carousel'>
      <div
        className='carouselInner'
        style={{ backgroundImage: `url(${images[currImg].img})` , transition: 'background-image 3s ease-in-out',}}
      >
        <div
          className='left'
          onClick={() => {
            setCurrImg(
              (prevImg) => (prevImg - 1 + images.length) % images.length
            );
          }}
        >
          <FaArrowLeft style={{ fontSize: 30 }} />
        </div>
        <div className='center'>
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>
        <div
          className='right'
          onClick={() => {
            setCurrImg((prevImg) => (prevImg + 1) % images.length);
          }}
        >
          <FaArrowRight style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
