import React from 'react'
import Image from 'next/image';
import altcoinImage from "../images/altcoin.webp";
import vactorbg from "../images/vector-row-bg.webp"
import PresaleFilters from "./PresaleFilters";

function Promoted() {
  return (
 
          <section className="tablesection pt-4">
        <div className="container mb-4">
            <div className="row">
                <div className="col-xl-12">
                    <div className="table_block">
                        <div className="table_top main_flex">
                            <h6 className="h4 fw-semibold mb-0">Promoted</h6>
                            <a href="" className="btn btn-link text-presale">Your coin here? Contact us!</a>
                        </div>
                        <div className="table_main">
                            <div className="table-responsive">
                                <table className="table table-bg table-striped">
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Coin</th>
                                        <th>Name</th>
                                        <th>Badges</th>
                                        <th> Market Cap</th>
                                        <th> Price</th>
                                        <th> Change 24h</th>
                                        <th> Launch</th>
                                        <th> Total Boosts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><Image src={altcoinImage} alt='coins' height={30} width={30} /> </td>
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
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td><Image src={altcoinImage} alt='coins' height={30} width={30} /></td>
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
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td><Image src={altcoinImage} alt='coins' height={30} width={30} /></td>
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
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td><Image src={altcoinImage} alt='coins' height={30} width={30} /></td>
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
                                                    <i className="fa-regular fa-star"></i>
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
        <Image src={vactorbg} alt='vector' className='centertable' />
        {/* <img src="../images/vector-row-bg.webp" className="centertable" /> */}
      
     
    </section>
   
  )
}

export default Promoted
