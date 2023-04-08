import React from 'react'
import './style.css'
const Carousel = () => {
  return (
    <div >
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('./image-removebg-preview.png')} class="d-block w-100 img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('./image-removebg-preview.png')} class="d-block w-100 img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('./1429cf689eee322f0b3f3a6733edfc42981e8f7b.jpg')} class="d-block w-100 img" alt="..."/>
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
</div>




    
  )
}

export default Carousel