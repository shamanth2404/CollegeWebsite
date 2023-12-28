import React from "react";
import './carousel.css';
import img1 from './assets/bmsce-img-1.jpg';
import img2 from './assets/bmsce-img-2.jpg';
import img3 from './assets/bmsce-img-3.jpg';
import img4 from './assets/bmsce-img-4.png';

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide my-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img4} className="d-block mx-auto"  />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-75 mx-auto"/>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-75 mx-auto"/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
