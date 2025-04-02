import React from 'react'
import Image from 'next/image';
import hori_add from "../images/hori_add.jpeg";
// import halfbannner from "../images/halfbanner.webp";
import Link from 'next/link';
// import FAQAccordion from './FAQAccordion';

function ProfileDetails() {
  return (
    <>
<div>
  <section className="brdcrumb">
    <div className="container">
      <ul className="mb-0">
        <li><Link href="/" title="Home">Home</Link></li>
        <li>Details Page</li>
      </ul>
    </div>
  </section>
  {/*  */}
  <section className="pt-4 pb-2"> 
    <div className="container">
      <div className="row">
        <div className="col-xl-6 my-2">
          <img src="./halfbannner" className="img-fluid advertisement_border" width={730} height={110} />
        </div>
        <div className="col-xl-6 my-2">
          <img src="./halfbannner" className="img-fluid advertisement_border" width={730} height={110} />
        </div>
        <div className="col-xl-12 mb-4">
          <Image src={hori_add} className="img-fluid advertisement_border" width={1920} height={150} />
        </div>
        <div className="col-xl-9"> 
          <div className="d-flex gap-2">
            <div className="detailsimage">
              <img src="images/altcoin.webp" />
            </div>
            <div className="detailscontent">
              <div className="d-flex gap-2 align-items-center mb-2">
                <h2 className="mb-0"> Light Chain</h2>
                <button type="button" className="btn btn-light  position-relative border py-1 me-3">
                  <i className="fa-brands fa-telegram" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <button type="button" className="btn btn-light  position-relative border py-1">
                  <i className="fa-brands fa-twitter" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </div>
              <span className="badge rounded-pill bg-warning text-dark p-2">Presale Live</span>
              <span className="badge rounded-pill bg-warning text-dark p-2">Hardcap 9000</span>
              <span className="badge rounded-pill bg-warning text-dark p-2">Audit</span>
              <span className="badge rounded-pill bg-warning text-dark p-2">LCAI</span>
              <div className="d-flex gap-2">
                <div className="alert alert-secondary p-2 mt-2" role="alert"> Total ETH: <strong> $2,012,500</strong> </div>
                <div className="alert alert-secondary p-2 mt-2" role="alert"> Date: <strong> 18 Jan 2022 - 23 Aug 2024</strong> </div>
              </div>
            </div>
            <div className="text-end">
              <a className="btn btn-main primary-btn small  btn-second_main text-end">Visit Website</a>
            </div>
          </div>
          <div className="contentblock">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.lit anim id est laborum.<br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          {/* add section */}
          {/* end */}
        </div>
        <div className="col-xl-3">
          <img src="images/add_verticle.webp" className="img-fluid advertisement_border" />
        </div>
      </div>
    </div>
  </section>
  {/* faq section */}
  <section className="pt-2">
    {/* <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="advertisementimage mb-3">
            <img src="images/hori_add.webp" className="img-fluid advertisement_border" />
          </div>
        </div>
        <div className="col-xl-8">
          <div className="section-title text-center">
            <h5 className="fw-bold h4">Frequently Asked Questions</h5>
            <p>Have questions? We have answers!</p>
          </div>
          <div className="accordion-container">
            <div className="accordion-item">
              <button className="accordion-header">
                What are crypto presales? <span className="icon">+</span>
              </button>
              <div className="accordion-content">
                <p>Crypto presales, also known as Initial Coin Offerings (ICOs), token presales, or early-stage token sales, offer investors a chance to purchase a cryptocurrency's tokens before a public launch. These early investment opportunities, often available at a lower price, aim to fund project development and marketing efforts. They are pivotal for both project teams, seeking capital to bring their visions to life, and for investors, looking for potential high returns from the ground floor of innovative blockchain projects.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">
                How do crypto presales work? <span className="icon">+</span>
              </button>
              <div className="accordion-content">
                <p>Answer to question 2...</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">
                How to find crypto presales?<span className="icon">+</span>
              </button>
              <div className="accordion-content">
                <p>Answer to question 3...</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">
                Are crypto presales worth it?<span className="icon">+</span>
              </button>
              <div className="accordion-content">
                <p>Answer to question 3...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="contact_block text-center">
            <div className="iconbox mb-4">
              <img src="images/contact-us.png" width={75} height={75} />
            </div>
            <div className="contact_faq">
              <h5>You have different questions?</h5>
              <p>Our team will answer all your questions. we ensure a quick response.</p>
              <Link href="/" className="btn-main primary-btn shadow">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <FAQAccordion /> */}
  </section>
  <section className="tablesection pt-4">
    <div className="container mb-4">
      <div className="row">
        <div className="col-xl-12">
          <div className="table_block">
            <div className="table_top main_flex">
              <h6 className="h4 fw-semibold mb-0">Promoted</h6>
              <Link href="/" className="btn btn-link text-presale">Your coin here? Contact us!</Link>
            </div>
            <div className="table_main">
              <div className="table-responsive">
                <table className="table table-bg table-striped">
                  <thead>
                    <tr><th>#</th>
                      <th>Coin</th>
                      <th>Name</th>
                      <th>Badges</th>
                      <th> Market Cap</th>
                      <th> Price</th>
                      <th> Change 24h</th>
                      <th> Launch</th>
                      <th> Total Boosts</th>
                    </tr></thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><img src="images/altcoin.webp" width={30} height={30} /></td>
                      <td>LCAI</td>
                      <td><span className="badge rounded-pill bg-warning text-dark">Warning</span></td>
                      <td>Presale</td>
                      <td>-</td>
                      <td><span>Hardcap 9000</span></td>
                      <td> In 3 months</td>
                      <td>
                        <div className="main_flex_Gap">
                          <span> In 3 months</span>
                          <button className="btn-main primary-btn small px-4 btn-second_main">Boost</button>
                          <i className="fa-regular fa-star" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img src="images/altcoin.webp" width={30} height={30} /></td>
                      <td>LCAI</td>
                      <td><span className="badge rounded-pill bg-warning text-dark">Warning</span></td>
                      <td>Presale</td>
                      <td>-</td>
                      <td><span>Hardcap 9000</span></td>
                      <td> In 3 months</td>
                      <td>
                        <div className="main_flex_Gap">
                          <span> In 3 months</span>
                          <button className="btn-main primary-btn small px-4 btn-second_main">Boost</button>
                          <i className="fa-regular fa-star" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img src="images/altcoin.webp" width={30} height={30} /></td>
                      <td>LCAI</td>
                      <td><span className="badge rounded-pill bg-warning text-dark">Warning</span></td>
                      <td>Presale</td>
                      <td>-</td>
                      <td><span>Hardcap 9000</span></td>
                      <td> In 3 months</td>
                      <td>
                        <div className="main_flex_Gap">
                          <span> In 3 months</span>
                          <button className="btn-main primary-btn small px-4 btn-second_main">Boost</button>
                          <i className="fa-regular fa-star" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img src="images/altcoin.webp" width={30} height={30} /></td>
                      <td>LCAI</td>
                      <td><span className="badge rounded-pill bg-warning text-dark">Warning</span></td>
                      <td>Presale</td>
                      <td>-</td>
                      <td><span>Hardcap 9000</span></td>
                      <td> In 3 months</td>
                      <td>
                        <div className="main_flex_Gap">
                          <span> In 3 months</span>
                          <button className="btn-main primary-btn small px-4 btn-second_main">Boost</button>
                          <i className="fa-regular fa-star" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default ProfileDetails
