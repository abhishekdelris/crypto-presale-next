// components/MultiSlider.jsx
"use client"; // Add this for Next.js App Router (if you're using it)
import { useState, useEffect } from 'react';
import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MultiSlider = ({ sliders }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);
    
    // Initialize Bootstrap carousel
    let Carousel;
    try {
      // Properly import Bootstrap
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
      Carousel = window.bootstrap?.Carousel;
      
      if (Carousel) {
        // Initialize all carousels
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach((carousel) => {
          new Carousel(carousel, { 
            interval: 5000,
            wrap: true
          });
        });
      } else {
        console.warn("Bootstrap Carousel is not available. Make sure bootstrap.bundle.js is loaded properly.");
      }
    } catch (error) {
      console.error("Error initializing Bootstrap carousel:", error);
    }
  }, []);

  // Don't render anything on the server - prevent hydration issues
  if (!isClient) {
    return <div>Loading sliders...</div>;
  }

  return (
    <div className="multi-slider-container">
      {sliders.map((slider, index) => (
        <div key={`slider-${index}`} className="mb-2">
        
          <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
            {/* Indicators */}
            <div className="carousel-indicators">
              {slider.slides.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  type="button"
                  data-bs-target={`#carousel-${index}`}
                  data-bs-slide-to={slideIndex}
                  className={slideIndex === 0 ? "active" : ""}
                  aria-current={slideIndex === 0 ? "true" : "false"}
                  aria-label={`Slide ${slideIndex + 1}`}
                ></button>
              ))}
            </div>
            
            {/* Slides */}
            <div className="carousel-inner">
              {slider.slides.map((slide, slideIndex) => (
                <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}>
                  <Image
                    src={slide.image}
                    className="d-block w-100 rounded-3"
                    height={190}
                    width={416}
                    alt={slide.alt || `Slide ${slideIndex + 1}`}
                  />
                  {/* {(slide.caption || slide.description) && (
                    <div className="carousel-caption d-none d-md-block">
                      {slide.caption && <h5>{slide.caption}</h5>}
                      {slide.description && <p>{slide.description}</p>}
                    </div>
                  )} */}
                </div>
              ))}
            </div>
            
            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiSlider;