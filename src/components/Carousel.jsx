import React ,{useState}from 'react'
import './style.css'
import {images} from '../assets/images/carouselData'
import './Carousel.css'
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from "react-icons/fa";

 const Carousel = () => {
  const[currImg,setCurrImg]=useState(1);
  return (
    <div className='carousel'>
      <div
        className='carouselInner'
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className='left'
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
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
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <FaArrowRight style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel