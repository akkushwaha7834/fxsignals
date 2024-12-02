import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../assets/images/mac.jpg';
import slide2 from '../assets/images/mac2.jpg';
import slide3 from '../assets/images/mac3.jpg';

function Home() {
  const items = [
    {
      img: slide1, // Use imported images instead of strings
      title: 'Best Collection',
      subtitle: 'Best Collection',
    },
    {
      img: slide2,
      title: 'Best Collection',
      subtitle: 'Best Collection',
    },
    {
      img: slide3,
      title: 'Best Collection',
      subtitle: 'Best Collection',
    },
    {
      img: slide1, // Reusing images from carousel for the grid
      title: 'Best Collection',
      subtitle: 'Best Collection',
    },
  ];

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
              <h2 className="fw-bold text-white">Lorem Ipsum</h2>
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
              <h2 className="fw-bold text-white">Lorem Ipsum</h2>
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
              <h2 className="fw-bold text-white">Lorem Ipsum</h2>
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

      {/* Image Grid Section */}
      <div className="container mt-5">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-md-6 col-sm-6 mb-4">
              <div className="grid-item">
                <img src={item.img} alt={item.title} className="grid-img img-fluid" />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
