// 'use client'

import React from 'react';
import Image from 'next/image';
import altcoinImage from "../images/altcoin.webp";
import horiImage from "../images/hori_add.jpeg";
import PresaleFilters from "./PresaleFilters";
import FAQAccordion from "./FAQAccordion";
import Favorite from "./Favorite";
import Promoted from "./Promoted";
import Coin from "./Coin";
import Link from 'next/link';
import ImageUploader from './ImageUploader';

function HomePage() {

    return ( 
    <> 
     <section className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-8 border-end border-secondary'>
            <div className='topsliderview row'>
              <div className='mainimage col-xl-12 mb-2'>
              <Image 
  src={horiImage} 
  alt='topbanner' 
  className='img-fluid rounded-3 banner-setup' 

/>
              </div>
              <div className='col-xl-6 mb-2'><Image src={horiImage} alt='topbanner' className='img-fluid rounded-3' /></div>
              <div className='col-xl-6 mb-2'><Image src={horiImage} alt='topbanner' className='img-fluid rounded-3' /></div>


            {/* <MultiSlider sliders={sliderData} />  */}
            </div>
            <div className='row'>
              <div className='col-xl-6'>
              <div className="full_presaletable">
                        <div className="main_flex topheader">
                            <h5 className="mb-0 fw-bold">New Coins</h5>
                            <Link href="/listings" className="btn btn-link text-dark">View More</Link>
                        </div>
                        <div className="block_Table p-2">
                            <div className="main_flex mb-2">
                            {/* <CoinTracker coin="bitcoin" /> */}
                                {/* <Link href="/profile_details" className='text_customization'><h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20"/></span> goodcrypto</h6></Link>
                                <span>Coin Ticker </span>
                                <span>1 hour ago</span> */}
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>1 hour ago</span>
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>1 hour ago</span>
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>1 hour ago</span>
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>1 hour ago</span>
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>1 hour ago</span>
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>1 hour ago</span>
                            </div>
                            
                        </div>
                    </div>
              </div>
              <div className='col-xl-6'>
              <div className="full_presaletable">
                        <div className="main_flex topheader">
                            <h5 className="mb-0 fw-bold">Trending Presales</h5>
                            <Link href="/listings" className="btn btn-link text-dark">View More</Link>
                        </div>
                        <div className="block_Table p-2">
                        <div className="main_flex mb-2">
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>Promoted</span>
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>Promoted</span>
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>Not Promoted</span>
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'><h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>Promoted</span>
                            </div>
                            
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>Promoted</span>
                            </div>
                            <div className="main_flex mb-2">
                            <Link href="/profile_details" className='text_customization'> <h6 className="mb-0"><span className="border_circle"><Image src={altcoinImage} width="20" height="20" alt='coin Image'/></span> goodcrypto</h6></Link>
                           {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                                <span>Promoted</span>
                            </div>
                        </div>
                    </div>
              </div>

            </div>
          </div>
          <div className='col-xl-4'>
            <div className='boxcoin p-3 rounded-3 h-100'>
          <div className="section-title d-flex justify-content-between">
              <h2 className="h4 mb-4">Best Presale to Buy</h2>
              <div className=''>
              <Link href="/listings" className="btn btn-link text-dark font-weight-bold">View More</Link>
              </div>
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
    <ImageUploader />
    
   </>
  )
}

export default HomePage

