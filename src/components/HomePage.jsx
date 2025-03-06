'use client'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import altcoinImage from "../images/altcoin.webp";
import vactorbg from "../images/vector-row-bg.webp"
import PresaleFilters from "./PresaleFilters";
import contactusimg from "../images/contact-us.png";
import FAQAccordion from "./FAQAccordion";
import Favorite from "./Favorite";
import Promoted from "./Promoted";
import Coin from "./Coin";

function HomePage() {
  // Responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

   // Custom arrows for navigation
   const CustomLeftArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full"
    >
      {"<"}
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full"
    >
      {">"}
    </button>
  );

  // Carousel items data
  const carouselItems = [
    { name: 'Luai', icon: altcoinImage },
    { name: 'Rise', icon: altcoinImage },
    { name: 'Joge', icon: altcoinImage },
    { name: 'Rent', icon: altcoinImage },
    { name: 'TLD', icon: altcoinImage },
    { name: 'Solx', icon: altcoinImage }
  ];

  return (
    <>
    <section className="coin_bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title">
              <h2 className="h4">Boost Your Business to New Heights</h2>
            </div>
          </div>

          <div className="w-full">
          <Carousel 
              responsive={responsive}
              infinite={true}          // Enables continuous looping
              autoPlay={true}          // Auto-play enabled
              autoPlaySpeed={2000}     // Change slide every 2 seconds
              keyBoardControl={true}   // Allow keyboard navigation
              customTransition="transform 500ms ease-in-out"
              transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile"]} // Hide arrows on smaller screens
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {carouselItems.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="cat_button text-center">
                    <a href="" title={item.name} className="block">
                      <div className="bg_Cat flex justify-center items-center mb-2">
                        <Image
                          src={item.icon}
                          loading="lazy"
                          width={40}
                          height={40}
                          alt={`${item.name} Icon`}
                          className="mx-auto"
                        />
                      </div>
                      {item.name}
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
                {/* <div className="owl-slider">
                    <div id="coinslider" className="owl-carousel">
                        <div className="item">
                            <div className="cat_button">
                                <a href="" title="Bitcoin">
                                    <div className="bg_Cat"><img src={altcoinImage} loading="lazy" width="40" height="40" alt="Bitcoin Icon" /></div>
                                    Luai
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="cat_button">
                                <a href="" title="Bitcoin">
                                    <div className="bg_Cat"><img src={altcoinImage} loading="lazy" width="40" height="40" alt="Bitcoin Icon" /></div>
                                    Rise
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="cat_button">
                                <a href="" title="Bitcoin">
                                    <div className="bg_Cat"><img src={altcoinImage} loading="lazy" width="40" height="40" alt="Bitcoin Icon" /></div>
                                    Joge
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="cat_button">
                                <a href="" title="Bitcoin">
                                    <div className="bg_Cat"><img src={altcoinImage} loading="lazy" width="40" height="40" alt="Bitcoin Icon" /></div>
                                    Rent
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="cat_button">
                                <a href="" title="Bitcoin">
                                    <div className="bg_Cat"><img src={altcoinImage} loading="lazy" width="40" height="40" alt="Bitcoin Icon" /></div>
                                    TLD
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="cat_button">
                                <a href="" title="Bitcoin">
                                    <div className="bg_Cat"><img src={altcoinImage} loading="lazy" width="40" height="40" alt="Bitcoin Icon" /></div>
                                    Solx
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            
    {/* <!-- end --> */}
    {/* <!-- second section --> */}
    <section className="presalenew my-3">
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    <div className="full_presaletable">
                        <div className="main_flex topheader">
                            <h5 className="mb-0 fw-bold">Top 3 Presale News</h5>
                            <a href="" className="btn btn-link text-dark">Show All</a>
                        </div>
                        <div className="block_Table p-2">
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">1</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">2</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">3</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">4</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">5</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="full_presaletable">
                        <div className="main_flex topheader">
                            <h5 className="mb-0 fw-bold">Highlighted</h5>
                            <a href="" className="btn btn-link text-dark">Your Coin Here</a>
                        </div>
                        <div className="block_Table p-2">
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">1</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">2</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">3</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">4</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">5</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="full_presaletable">
                        <div className="main_flex topheader">
                            <h5 className="mb-0 fw-bold">Trending Presales</h5>
                            <a href="" className="btn btn-link text-dark">View More</a>
                        </div>
                        <div className="block_Table p-2">
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">1</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">2</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">3</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">4</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                            <div className="main_flex mb-2">
                                <h6><span className="border_circle">5</span> goodcrypto</h6>
                                <button className="btn-main primary-btn small px-4 btn-second_main">See All</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end --> */}
    {/* <!-- third section --> */}
    <Promoted />
    <PresaleFilters />
   <Coin />
    <FAQAccordion />
    {/* <!-- faq section --> */}
    
    {/* <!--  --> */}
    <Favorite />
    
   </>
  )
}

export default HomePage
