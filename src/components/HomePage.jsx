// 'use client'

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import altcoinImage from "../images/altcoin.webp";
import horiImage from "../images/hori_add.jpeg";
import vactorbg from "../images/vector-row-bg.webp"
import PresaleFilters from "./PresaleFilters";
import contactusimg from "../images/contact-us.png";
import FAQAccordion from "./FAQAccordion";
import Favorite from "./Favorite";
import Promoted from "./Promoted";
import Coin from "./Coin";
import MultiSlider from "./MultiSlider";
import tradegraph from '../images/tradegraph.webp'
// import CoinTracker from './CoinTracker'
import Link from 'next/link';
// import OwlCarousel from "react-owl-carousel";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

function HomePage() {

  const sliderOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

    // Sample data for multiple sliders
    const sliderData = [
      {
        title: "Featured Products",
        slides: [
          {
            image: horiImage,
            alt: "Product 1",
            caption: "Premium Headphones",
            description: "Noise cancelling with exceptional sound quality"
          },
          {
            image: horiImage, 
            alt: "Product 2",
            caption: "Wireless Earbuds",
            description: "Long battery life with crystal clear audio"
          },
          {
            image: horiImage,
            alt: "Product 3",
            caption: "Smart Watch",
            description: "Track your fitness and stay connected"
          }
        ]
      },
     
    ];
  // Responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
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
     <section className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-8 border-end border-secondary'>
            <div className='topsliderview row'>
              <div className='mainimage col-xl-12 mb-2'>
                <Image src={horiImage} alt='topbanner' className='img-fluid rounded-3' />
              </div>
              <div className='col-xl-6 mb-2'><Image src={horiImage} alt='topbanner' className='img-fluid rounded-3' /></div>
              <div className='col-xl-6 mb-2'><Image src={horiImage} alt='topbanner' className='img-fluid rounded-3' /></div>


            {/* <MultiSlider sliders={sliderData} />  */}
            </div>
            <div className='row'>
              <div className='col-xl-6'>
              <div class="full_presaletable">
                        <div class="main_flex topheader">
                            <h5 class="mb-0 fw-bold">New Coins</h5>
                            <Link href="/listings" class="btn btn-link text-dark">View More</Link>
                        </div>
                        <div class="block_Table p-2">
                            <div class="main_flex mb-2">
                            {/* <CoinTracker coin="bitcoin" /> */}
                                {/* <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>Coin Ticker </span>
                                <span>1 hour ago</span> */}
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>1 hour ago</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>1 hour ago</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>1 hour ago</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>1 hour ago</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>1 hour ago</span>
                            </div>
                        </div>
                    </div>
              </div>
              <div className='col-xl-6'>
              <div class="full_presaletable">
                        <div class="main_flex topheader">
                            <h5 class="mb-0 fw-bold">Trending Presales</h5>
                            <Link href="/listings" class="btn btn-link text-dark">View More</Link>
                        </div>
                        <div class="block_Table p-2">
                        <div class="main_flex mb-2">
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>Promoted</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>Promoted</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>Not Promoted</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>Promoted</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                            <Image src={tradegraph} alt='tradegraph' height={20} width={50} />
                                <span>Promoted</span>
                            </div>
                        </div>
                    </div>
              </div>

            </div>
          </div>
          <div className='col-xl-4'>
            <div className='boxcoin p-3 rounded-3 h-100'>
          <div className="section-title">
              <h2 className="h4 mb-4">Best Presale to Buy</h2>
            </div>
            <div className='coinsblock'>
              <ul>
                <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                      <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                      <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                      <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                      <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                      <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                      <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                      <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                      <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                      <li><div className="bg_Cat flex justify-center items-center rounded-3">
                        <Image
                          src={altcoinImage}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`alt Icon`}
                          className="mx-auto"
                        />   Project Name
                      </div></li>
                     

              </ul>
              <div className='d-flex justify-content-center my-1'>
              <Link href="/listings"><button className="btn-main primary-btn small px-4 btn-second_main">View More Coins</button></Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
     </section>

    <section className="coin_bg d-none">
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
                    <Link href="/" title={item.name} className="block">
                      <div className="bg_Cat flex justify-center items-center">
                        <Image
                          src={item.icon}
                          loading="lazy"
                          width={38}
                          height={38}
                          alt={`${item.name} Icon`}
                          className="mx-auto"
                        />
                      </div>
                      {item.name}
                    </Link>
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
    <section class="presalenew my-3 d-none">
        <div class="container">
            <div class="row">
                <div class="col-xl-4">
                    <div class="full_presaletable">
                        <div class="main_flex topheader">
                            <h5 class="mb-0 fw-bold">New Coins</h5>
                            <Link href="/listings" class="btn btn-link text-dark">View More</Link>
                        </div>
                        <div class="block_Table p-2">
                            <div class="main_flex mb-2">
                                <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>1 hour ago</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>1 hour ago</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>1 hour ago</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>1 hour ago</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>1 hour ago</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-4">
                    <div class="full_presaletable">
                        <div class="main_flex topheader">
                            <h5 class="mb-0 fw-bold">Trending Presales</h5>
                            <Link href="/listings" class="btn btn-link text-dark">View More</Link>
                        </div>
                        <div class="block_Table p-2">
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>Promoted</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>Promoted</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>Not Promoted</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>Promoted</span>
                            </div>
                            <div class="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 class="mb-0"><span class="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>Promoted</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="col-xl-4 rightslider">
                      <div class="owl-slider">
                    <div id="sliderhome" class="owl-carousel">
                        <div class="item">
                            <div class="blogimage">
                            <img src="http://192.168.1.7/crypto-presale/images/blog.webp" class="w-100 h-auto"/>
                            </div>
                        </div>
                        <div class="item">
                           <div class="blogimage">
                            <img src="http://192.168.1.7/crypto-presale/images/blog.webp" class="w-100 h-auto"/>
                            </div>
                        </div>
                        <div class="item">
                           <div class="blogimage">
                            <img src="http://192.168.1.7/crypto-presale/images/blog.webp" class="w-100 h-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
                </div> */}
                 {/* <div className="col-xl-4 rightslider">
      <OwlCarousel className="owl-theme" {...sliderOptions}>
        <div className="item">
          <div className="blogimage">
            <Image
              src="http://192.168.1.7/crypto-presale/images/blog.webp"
              alt="Blog Image"
              width={500}
              height={300}
              className="w-100 h-auto"
            />
          </div>
        </div>

        <div className="item">
          <div className="blogimage">
            <Image
              src="http://192.168.1.7/crypto-presale/images/blog.webp"
              alt="Blog Image"
              width={500}
              height={300}
              className="w-100 h-auto"
            />
          </div>
        </div>

        <div className="item">
          <div className="blogimage">
            <Image
              src="http://192.168.1.7/crypto-presale/images/blog.webp"
              alt="Blog Image"
              width={500}
              height={300}
              className="w-100 h-auto"
            />
          </div>
        </div>
      </OwlCarousel>
    </div> */}
      <div className="col-xl-4 rightslider">
     
      <MultiSlider sliders={sliderData} />
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

