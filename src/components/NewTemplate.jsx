import React from 'react';
// import "../styles/changes.module.css";
import Image from 'next/image';
import altcoinImage from "../images/altcoin.webp";

function NewTemplate() {
  return (
    <div>
       {/* <header>
        <div class="container header-container">
            <div class="logo">
                <img src="logo.png" alt="CryptoGabbar Logo" />
                <span>CRYPTO Gabbar</span>
            </div>
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search coins..." />
            </div>
            <div class="header-actions">
                <button class="primary-btn">Submit Project</button>
                <div class="menu-toggle">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </div>
    </header> */}

    <main>
        <section class="services1 container1 mb-2">
            <h2>Core Services</h2>
            <div class="service-features1">
                <div class="feature1">
                    <i class="fas fa-headset"></i>
                    <span>24/7 technical support</span>
                </div>
                <div class="feature1">
                    <i class="fas fa-sync-alt"></i>
                    <span>Unlimited project updates</span>
                </div>
                <div class="feature1">
                    <i class="fas fa-chart-line"></i>
                    <span>Real-time market data</span>
                </div>
                <div class="feature1">
                    <i class="fas fa-bullhorn"></i>
                    <span>Global investor exposure</span>
                </div>
            </div>
        </section>

        <section class="project-listing1 container1">
            <div class="project-card1">
                <div class="project-icon1">
                    <i class="fas fa-rocket"></i>
                </div>
                <div class="project-details1">
                    <h3>Launch Your Project</h3>
                    <p>Start by adding your crypto project to CryptoRadar's database.</p>
                    <div class="price-tag1">FREE</div>
                    <button class="btn-main primary-btn me-2 action-btn1">Submit Now</button>
                </div>
            </div>

            <div class="platform-stats1">
                <h3>Why CryptoRadar is Trusted</h3>
                <div class="stats-grid1">
                    <div class="stat-item1">
                        <i class="fas fa-users"></i>
                        <div class="stat-value1">2.3M+</div>
                        <div class="stat-label1">Monthly Visitors</div>
                    </div>
                    <div class="stat-item1">
                        <i class="fas fa-list"></i>
                        <div class="stat-value1">5000+</div>
                        <div class="stat-label1">Projects Listed</div>
                    </div>
                    <div class="stat-item1">
                        <i class="fas fa-eye"></i>
                        <div class="stat-value1">450K+</div>
                        <div class="stat-label1">Daily Page Views</div>
                    </div>
                    <div class="stat-item1">
                        <i class="fas fa-dollar-sign"></i>
                        <div class="stat-value1">18.7M+</div>
                        <div class="stat-label1">Market Volume</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="promotion-options1 container1 mt-2">
            <h2>Marketing Solutions</h2>
            <div class="promotion-cards1">
                <div class="promo-card1">
                    <div class="promo-icon1">
                        <i class="fas fa-ad"></i>
                    </div>
                    <h3>Standard Banner</h3>
                    <p>Your banners are displayed on category pages with medium traffic. Limited positions available.</p>
                    <div class="promo-specs1">
                        <div class="spec1">Desktop: 820×120</div>
                        <div class="spec1">Mobile: 380×100</div>
                    </div>
                    <div class="promo-price1">$175 / per day</div>
                    <button class="btn-main primary-btn me-2 action-btn1">Reserve Spot</button>
                </div>

                <div class="promo-card1 featured1">
                    <div class="promo-icon1">
                        <i class="fas fa-crown"></i>
                    </div>
                    <h3>Premium Placement</h3>
                    <p>Full-width banner on all high-traffic pages. Exclusive position with maximum visibility.</p>
                    <div class="promo-specs1">
                        <div class="spec1">Desktop: 1280×180</div>
                        <div class="spec1">Mobile: 640×160</div>
                    </div>
                    <div class="promo-price1">$650 / per day</div>
                    <button class="btn-main primary-btn me-2 action-btn1">Reserve Spot</button>
                </div>

                <div class="promo-card1">
                    <div class="promo-icon1">
                        <i class="fas fa-star"></i>
                    </div>
                    <h3>Featured Listing</h3>
                    <p>Your project highlighted in the trending section on our homepage and search results.</p>
                    <div class="promo-specs1">
                        <div class="spec1">Priority Ranking</div>
                        <div class="spec1">Custom Badge</div>
                    </div>
                    <div class="promo-price1">$350 / per day</div>
                    <button class="btn-main primary-btn me-2 action-btn1">Reserve Spot</button>
                </div>
            </div>
        </section>

        <section class="discount-section1 container1 mt-2">
            <h2>Volume Discounts</h2>
            <div class="discount-tiers1">
                <div class="discount-tier1">
                    <div class="discount-value1">20%</div>
                    <div class="discount-period1">5 DAYS+</div>
                </div>
                <div class="discount-tier1">
                    <div class="discount-value1">35%</div>
                    <div class="discount-period1">10 DAYS+</div>
                </div>
                <div class="discount-tier1">
                    <div class="discount-value1">50%</div>
                    <div class="discount-period1">20 DAYS+</div>
                </div>
            </div>
            <button class="primary-btn1 wide1">Book Your Campaign</button>
        </section>

        <section class="success-projects1 container1">
            <h2>Projects We've Helped Launch</h2>
            <div class="project-showcase1">
                <div class="showcase-item1">
                    <Image src={altcoinImage} alt="LunarCoin" />
                    <div class="project-name1">LUNAR</div>
                    <div class="project-category1">DeFi Platform</div>
                </div>
                <div class="showcase-item1">
                    <Image src={altcoinImage} alt="NexusChain" />
                    <div class="project-name1">NEXUS</div>
                    <div class="project-category1">Smart Chain</div>
                </div>
                <div class="showcase-item1">
                    <Image src={altcoinImage} alt="QuantumPaw" />
                    <div class="project-name1">QPAW</div>
                    <div class="project-category1">Meme Token</div>
                </div>
                <div class="showcase-item1">
                    <Image src={altcoinImage} alt="Skynet" />
                    <div class="project-name1">SKYNET</div>
                    <div class="project-category1">AI Protocol</div>
                </div>
                <div class="showcase-item1">
                    <Image src={altcoinImage} alt="MetaVerse" />
                    <div class="project-name1">META</div>
                    <div class="project-category1">Metaverse</div>
                </div>
            </div>
        </section>

        <section class="premium-services1 container1 mb-2">
            <h2>Premium Services</h2>
            <div class="service-cards1">
                <div class="service-card1">
                    <div class="service-icon1">
                        <i class="fas fa-bell"></i>
                    </div>
                    <h3>Alert System</h3>
                    <p>We send custom push notifications to our 75k+ subscribers across all devices. Each alert drives 300-500 clicks.</p>
                    <div class="service-price1">$250 / per campaign</div>
                    <button class="secondary-btn1"><i class="fas fa-paper-plane"></i> Request Service</button>
                </div>

                <div class="service-card1">
                    <div class="service-icon1">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3>AMA Session</h3>
                    <p>Host a live AMA in our Telegram community. Includes pinned post and custom announcement to all members.</p>
                    <div class="service-price1">5 BNB</div>
                    <button class="secondary-btn1"><i class="fas fa-info-circle"></i> Get Details</button>
                </div>

                <div class="service-card1">
                    <div class="service-icon1">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Verification Badge</h3>
                    <p>Gain investor trust with our verification process. Includes team KYC and project validation certificate.</p>
                    <div class="service-price1">$400+</div>
                    <button class="secondary-btn1"><i class="fas fa-check-circle"></i> Apply Now</button>
                </div>
            </div>
        </section>
    </main>

    {/* <footer>
        <div class="container">
            <div class="footer-top">
                <div class="footer-logo">
                    <img src="logo.png" alt="CryptoRadar Logo" />
                    <span>CRYPTO Gabbar</span>
                </div>
                <div class="footer-links">
                    <a href="#">Coins</a>
                    <a href="#">New Listings</a>
                    <a href="#">Submit Project</a>
                    <a href="#">Services</a>
                    <a href="#">Advertise</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact Us</a>
                </div>
                <div class="footer-social">
                    <a href="#"><i class="fab fa-telegram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-discord"></i></a>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="copyright">© 2025 Crypto Gabbar - All Rights Reserved</div>
                <div class="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Cookie Policy</a>
                </div>
                <div class="dmca">
                    <img src="dmca.png" alt="DMCA Protected" />
                </div>
            </div>
        </div>
    </footer> */}
    </div>
  )
}

export default NewTemplate
