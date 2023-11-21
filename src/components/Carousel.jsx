import React from 'react'
import './style.css'
import {images} from '../assets/images/carouselData'
 const Carousel = () => {
  return (
    <div className='carousel'>
      <div className='carousel-items'>
        <img src={images[1].img} className='carousel-image' />
      </div>
    </div>
  );
}

export default Carousel