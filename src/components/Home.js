import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../assets/images/mac.jpg';
import slide2 from '../assets/images/mac2.jpg';
import slide3 from '../assets/images/mac3.jpg';

function Home() {
  return (
    <div>
      {/* Page Metadata */}
      <Helmet>
        <title>FXSignals - Home</title>
        <meta name="description" content="Explore expert strategies, market updates, and seamless trading experiences with FXSignals." />
      </Helmet>

      {/* Carousel */}
      <div 
        id="carouselExample" 
        className="carousel slide" 
        data-bs-ride="carousel" 
        data-bs-interval="3000" 
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active" data-aos="zoom-in-up">
            <img 
              src={slide1}
              className="d-block w-100 vh-75" 
              alt="Slide 1"
              
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold text-white">Amit Kushwaha</h2>
              <p className="text-light">Discover expert strategies for maximizing your financial potential.</p>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item" data-aos="zoom-in-up"> 
            <img 
              src={slide2}
              className="d-block w-100 vh-75" 
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold text-white">Kiran Maurya</h2>
              <p className="text-light">Stay ahead with cutting-edge trends and market updates.</p>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <img 
              src={slide3}
              className="d-block w-100 vh-75" 
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold text-white">Seamless Trading Experience</h2>
              <p className="text-light">Achieve success with unparalleled tools and expert support.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
