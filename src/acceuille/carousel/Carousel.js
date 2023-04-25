import React, { useState } from 'react'
import './style.css'
const Carousel = () => {
  const images = [
    { id: 1, url: './club.jpg' },
    { id: 2, url: './image-removebg-preview.png' },
    { id: 3, url: './image-removebg-preview.png' },
  ];
  
 
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = images[currentIndex];
  
    const goToPrevious = () => {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('./Logo_ENICarthage.jpg')} style={{height:"350px"}} class="d-block w-100 img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('./1429cf689eee322f0b3f3a6733edfc42981e8f7b.jpg')}  style={{height:"350px"}} class="d-block w-100 img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('./images.jpg')} style={{height:"350px"}} class="d-block w-100 img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




    
  )
}

export default Carousel