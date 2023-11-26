import React, { useState, useEffect } from 'react';
import './style.css';
// import { images } from '../assets/images/carouselData';
import {images} from '../assets/images/carouselData'
import './Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Carousel = ({autoSlide=false,autoSlideInterval=3000}) => {
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrImg((prevImg) => (prevImg + 1) % images.length);
    }, 5000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

// useEffect(()=>{
// if(!autoSlide)return 
// const slideInterval(setInterval() => {
  
// }, interval);
// },[])
  return (
    <div className='carousel'>
      <div
        className='carouselInner'
        style={{
          backgroundImage: `url(${images[currImg].img})`,
          // transition: 'background-image 3s ease-in-out',
           transition: 'background-image 3s ease-in-out, opacity 1s ease-in-out, transform 0.5s ease-in-out'
          // transform:`translate(-${currImg*100}%)`
        }}
        
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
