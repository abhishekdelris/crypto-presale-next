import React from 'react'

function BlogDetails() {
  return (
    <> 
<div>
  {/* Main Content */}
  <div className="container my-4">
    <div className="row"> 
      {/* Main Article */}
      <div className="col-lg-8">
        <div className="article-header">
          <h1 className="article-title">Why is Crypto Up Today?</h1>
          <div className="article-meta">
            <span>By John Crypto</span> | <span>Published: March 15, 2025</span> | <span>5 min read</span>
          </div>
        </div>
        <div className="article-content">
          <h2>Crypto News: Why is Crypto Going Up, BTC Trading Toward a New ATH?</h2>
          <p>The crypto market is experiencing a significant uptick today, with Bitcoin (BTC) leading the charge. The market cap of cryptocurrencies has increased by over 4% in the past 24 hours, with Bitcoin crossing the $80,000 mark for the first time in history.</p>
          <p>This sudden surge can be attributed to several factors. Firstly, there's been a noticeable increase in institutional adoption, with major financial institutions announcing new crypto-related products. Secondly, the ongoing discussion about Bitcoin ETFs has created a positive sentiment in the market.</p>
          <p>Investors are showing renewed interest in digital assets, with trading volumes across major exchanges hitting monthly highs. The Fear and Greed Index, which measures market sentiment, has moved from "Fear" to "Greed" territory for the first time in weeks.</p>
          <h3>Bitcoin's Price Movement Today</h3>
          <p>Bitcoin has surged by approximately 5.6% in the last 24 hours, reaching a high of $83,750. This price action has broken through several key resistance levels, indicating a strong bullish trend. Technical analysts are now eyeing the $85,000 mark as the next significant resistance level.</p>
          <div className="chart-container">
            <h4>Bitcoin Price Chart (BTC/USD)</h4>
            <img src="/api/placeholder/700/300" alt="Bitcoin Price Chart" className="img-fluid" />
            <div className="d-flex justify-content-between mt-2">
              <small>Source: CryptoCharts</small>
              <div>
                <i className="fas fa-share-alt me-2" />
                <i className="far fa-heart me-2" />
                <i className="far fa-comment" />
              </div>
            </div>
          </div>
          <h3>Market Heatmap Shows Green Across the Board</h3>
          <p>The cryptocurrency market heatmap shows a predominantly green landscape, with most major coins posting significant gains. This broad-based rally suggests that the current uptrend is not isolated to Bitcoin but is affecting the entire crypto ecosystem.</p>
          <div className="heatmap-card">
            <h4>Cryptocurrency Market Heatmap</h4>
            <p>The last 24h adds over $85 TRILLION of market cap and virtually pushes all coins into the green day of gains.</p>
            <img src="/api/placeholder/700/400" alt="Crypto Market Heatmap" className="heatmap-img" />
            <div className="d-flex justify-content-between mt-2">
              <small>Source: CryptoHeatMap</small>
              <div>
                <i className="fas fa-share-alt me-2" />
                <i className="far fa-heart me-2" />
                <i className="far fa-comment" />
              </div>
            </div>
          </div>
          <h3>What's Driving This Crypto Surge?</h3>
          <p>Several factors are contributing to the current crypto market rally:</p>
          <ul>
            <li><strong>Institutional Adoption:</strong> Major financial institutions are increasingly integrating cryptocurrencies into their services.</li>
            <li><strong>Regulatory Clarity:</strong> Recent developments in regulatory frameworks have provided more certainty for investors.</li>
            <li><strong>Technical Breakout:</strong> Bitcoin breaking through key resistance levels has triggered algorithmic buying.</li>
            <li><strong>Positive Market Sentiment:</strong> The Fear and Greed Index shows a shift towards optimism.</li>
          </ul>
          <h3>Expert Opinions</h3>
          <p>Industry experts are cautiously optimistic about this rally. "This could be the beginning of a new bull cycle," says Jane Doe, Chief Analyst at Crypto Research Institute. "However, investors should remain vigilant as volatility remains high in the crypto space."</p>
          <div className="chart-container">
            <h4>Bitcoin Historical Comparison</h4>
            <img src="/api/placeholder/700/300" alt="Bitcoin Historical Chart" className="img-fluid" />
            <div className="d-flex justify-content-between mt-2">
              <small>Source: CryptoCharts</small>
              <div>
                <i className="fas fa-share-alt me-2" />
                <i className="far fa-heart me-2" />
                <i className="far fa-comment" />
              </div>
            </div>
          </div>
          <h3>Conclusion</h3>
          <p>The current crypto market surge represents a significant shift in market dynamics. Whether this is the beginning of a sustained bull run or a temporary recovery remains to be seen. Investors should remain cautious and perform thorough research before making investment decisions.</p>
        </div>
        {/* Fear & Greed Index */}
        <div className="fear-greed-container">
          <h3>Fear &amp; Greed Index</h3>
          <div className="gauge">
            <div className="gauge-pointer" />
          </div>
          <div className="text-center">
            <span className="badge bg-warning">Greed: 75</span>
          </div>
          <p className="mt-3">The Fear &amp; Greed Index shows the current market sentiment is in "Greed" territory, indicating positive momentum but also potential overvaluation.</p>
        </div>
        {/* Historical Values */}
        <div className="historical-values">
          <h3>Historical Values</h3>
          <div className="crypto-value">
            <div>
              <img src="/api/placeholder/20/20" alt="Bitcoin" className="crypto-icon" />
              Bitcoin (BTC)
            </div>
            <div className="trend-up">$83,750 <i className="fas fa-arrow-up" /></div>
          </div>
          <div className="crypto-value">
            <div>
              <img src="/api/placeholder/20/20" alt="Ethereum" className="crypto-icon" />
              Ethereum (ETH)
            </div>
            <div className="trend-up">$4,250 <i className="fas fa-arrow-up" /></div>
          </div>
          <div className="crypto-value">
            <div>
              <img src="/api/placeholder/20/20" alt="Cardano" className="crypto-icon" />
              Cardano (ADA)
            </div>
            <div className="trend-up">$0.95 <i className="fas fa-arrow-up" /></div>
          </div>
          <div className="crypto-value">
            <div>
              <img src="/api/placeholder/20/20" alt="Solana" className="crypto-icon" />
              Solana (SOL)
            </div>
            <div className="trend-up">$180 <i className="fas fa-arrow-up" /></div>
          </div>
          <div className="crypto-value">
            <div>
              <img src="/api/placeholder/20/20" alt="Dogecoin" className="crypto-icon" />
              Dogecoin (DOGE)
            </div>
            <div className="trend-up">$0.12 <i className="fas fa-arrow-up" /></div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="col-lg-4">
        {/* Featured Article */}
        <div className="sidebar-card">
          <img src="/api/placeholder/400/200" alt="Featured Article" className="img-fluid" />
          <div className="sidebar-card-body">
            <h5 className="sidebar-card-title">Bitcoin ETF Approval: What It Means for Investors</h5>
            <p className="small">The SEC's approval of Bitcoin ETFs has opened new doors for institutional investors...</p>
            <small className="text-muted">3 hours ago</small>
          </div>
        </div>
        {/* Ad Banner */}
        <div className="ad-banner">
          <img src="/api/placeholder/350/250" alt="Advertisement" className="img-fluid" />
        </div>
        {/* Related Articles */}
        <div className="sidebar-card">
          <div className="sidebar-card-body">
            <h5>Related Articles</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex">
                <img src="/api/placeholder/80/80" alt="Article" className="me-3" />
                <div>
                  <h6 className="mb-1">Ethereum 2.0: The Future of DeFi</h6>
                  <small className="text-muted">5 hours ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <img src="/api/placeholder/80/80" alt="Article" className="me-3" />
                <div>
                  <h6 className="mb-1">Ethereum 2.0: The Future of DeFi</h6>
                  <small className="text-muted">5 hours ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <img src="/api/placeholder/80/80" alt="Article" className="me-3" />
                <div>
                  <h6 className="mb-1">Top 5 Altcoins to Watch This Week</h6>
                  <small className="text-muted">8 hours ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <img src="/api/placeholder/80/80" alt="Article" className="me-3" />
                <div>
                  <h6 className="mb-1">Crypto Regulation: What to Expect in 2025</h6>
                  <small className="text-muted">1 day ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <img src="/api/placeholder/80/80" alt="Article" className="me-3" />
                <div>
                  <h6 className="mb-1">NFT Market Rebounds After Months of Decline</h6>
                  <small className="text-muted">2 days ago</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Top Gainers */}
        <div className="sidebar-card">
          <div className="sidebar-card-body">
            <h5>Top Gainers (24h)</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img src="/api/placeholder/20/20" alt="Coin" className="crypto-icon" />
                Solana (SOL)
              </div>
              <span className="badge bg-success">+18.5%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img src="/api/placeholder/20/20" alt="Coin" className="crypto-icon" />
                Avalanche (AVAX)
              </div>
              <span className="badge bg-success">+15.2%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img src="/api/placeholder/20/20" alt="Coin" className="crypto-icon" />
                Polygon (MATIC)
              </div>
              <span className="badge bg-success">+12.8%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img src="/api/placeholder/20/20" alt="Coin" className="crypto-icon" />
                Chainlink (LINK)
              </div>
              <span className="badge bg-success">+11.5%</span>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="sidebar-card">
          <div className="sidebar-card-body">
            <h5>Stay Updated</h5>
            <p>Subscribe to our newsletter for daily crypto updates.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your email address" />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        {/* Ad Banner */}
        <div className="ad-banner">
          <img src="/api/placeholder/350/250" alt="Advertisement" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
  {/* Trending Section */}
  <div className="container my-4">
    <h3>Trending in Crypto</h3>
    <div className="row">
      <div className="col-md-3 mb-4">
        <div className="card h-100">
          <img src="/api/placeholder/300/200" className="card-img-top" alt="Trending Topic" />
          <div className="card-body">
            <h5 className="card-title">The Rise of NFT Gaming</h5>
            <p className="card-text">How blockchain gaming is revolutionizing the industry...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 2 days ago</small>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="card h-100">
          <img src="/api/placeholder/300/200" className="card-img-top" alt="Trending Topic" />
          <div className="card-body">
            <h5 className="card-title">DeFi Yield Farming Strategies</h5>
            <p className="card-text">Maximizing returns in decentralized finance...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 days ago</small>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="card h-100">
          <img src="/api/placeholder/300/200" className="card-img-top" alt="Trending Topic" />
          <div className="card-body">
            <h5 className="card-title">Blockchain in Supply Chain</h5>
            <p className="card-text">How distributed ledger technology is transforming logistics...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 4 days ago</small>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="card h-100">
          <img src="/api/placeholder/300/200" className="card-img-top" alt="Trending Topic" />
          <div className="card-body">
            <h5 className="card-title">Crypto Tax Guidelines</h5>
            <p className="card-text">What you need to know for the 2025 tax season...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 5 days ago</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
    </>
  )
}

export default BlogDetails
