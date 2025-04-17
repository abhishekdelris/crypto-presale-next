// 'use client'
import { revalidateTag } from "next/cache";
import React from "react";
import Image from "next/image";
import altcoinImage from "../images/altcoin.webp";
import horiImage from "../images/hori_add.jpeg";
import FAQAccordion from "./FAQAccordion";
import Favorite from "./Favorite";
import Promoted from "./Promoted";
import Coin from "./Coin";
import Link from "next/link";



async function fetchHighlightedData() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/highlighted?page=1&limit=12",
      {
        //&type=ongoing
        // next: { revalidate: 5, tags: ['featuredData'] }, // ISR with tag
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching ICO data:", error);
    return { data: [] }; // Return empty data in case of error
  }
}

async function fetchTrendingData() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/trending_presale?page=1&limit=6",
      {
        //&type=ongoing
        // next: { revalidate: 5, tags: ['featuredData'] }, // ISR with tag
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching ICO data:", error);
    return { data: [] }; // Return empty data in case of error
  }
}

async function fetchFaqData() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/faqs?page=2&limit=4",
      {
        //&type=ongoing
        // next: { revalidate: 5, tags: ['featuredData'] }, // ISR with tag
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching ICO data:", error);
    return { data: [] }; // Return empty data in case of error
  }
}
async function fetchCOINData() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        "/api/crypto-icos-icoanoucement?skip=0&limit=15",
      {
        //&type=ongoing
        // next: { revalidate: 5, tags: ['featuredData'] }, // ISR with tag
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching ICO data:", error);
    return { data: [] }; // Return empty data in case of error
  }
}

async function fetchTopCoinData() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        "/api/crypto-icos-icoanoucement?skip=0&limit=6&type=upcoming",
      {
        //&type=ongoing
        // next: { revalidate: 5, tags: ['featuredData'] }, // ISR with tag
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching ICO data:", error);
    return { data: [] }; // Return empty data in case of error
  }
}
// This is a Server Component that fetches data
async function fetchFeturedData() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/featured?skip=0&limit=5",
      {
        //&type=ongoing
        next: { revalidate: 5, tags: ["featuredData"] } // ISR with tag
      } 
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    const datainfor = await response.json();

    return datainfor;
  } catch (error) {
    console.error("Error fetching ICO data:", error);
    return { data: [] }; // Return empty data in case of error
  }
}

export default async function HomePage() {
  const feturedData = await fetchFeturedData();
  const CoinData = await fetchCOINData();
  const topCoinData = await fetchTopCoinData();
  const faqData = await fetchFaqData();
  const trendingData = await fetchTrendingData();
  const highlightedData = await fetchHighlightedData();
  // console.log("CoinData.......",faqData);

  const tradeData = trendingData.trending || [];
  const highlightData = highlightedData.trending || [];
  const sortedData = topCoinData.data.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB - dateA; // Descending order - newest first
  });

  // Format the time difference between now and created_at
  const getTimeAgo = (timestamp) => {
    if (!timestamp) return "Unknown time";

    const now = new Date();
    const created = new Date(timestamp);
    const diffInMs = now - created;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
    } else if (diffInMinutes < 24 * 60) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInMinutes / (60 * 24));
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  };

  function formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2).replace(/\.00$/, "") + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(2).replace(/\.00$/, "") + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(2).replace(/\.00$/, "") + "K";
    return num?.toString() || "N/A";
  }
  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 border-end border-secondary">
              <div className="topsliderview row">
                <div className="mainimage col-xl-12 mb-2">
                  <Image
                    src={horiImage}
                    alt="topbanner"
                    className="img-fluid rounded-3 banner-setup"
                  />
                </div>
                <div className="col-xl-6 mb-2">
                  <Image
                    src={horiImage}
                    alt="topbanner"
                    className="img-fluid rounded-3"
                  />
                </div>
                <div className="col-xl-6 mb-2">
                  <Image
                    src={horiImage}
                    alt="topbanner"
                    className="img-fluid rounded-3"
                  />
                </div>

                {/* <MultiSlider sliders={sliderData} />  */}
              </div>
              <div className="row">
                <div className="col-xl-6">
                  <div className="full_presaletable">
                    <div className="main_flex topheader">
                      <h5 className="mb-0 fw-bold">New Coins</h5>
                      <Link href="/presale" className="btn btn-link text-dark">
                        View More
                      </Link>
                    </div>
                    <div className="block_Table p-2">
                      {sortedData.map((coin, index) => (
                        <div className="main_flex mb-2" key={coin.id || index}>
                          <Link
                            href={`/crypto-ico-details/${coin.slug}`}
                            className="text_customization"
                          >
                            <h6 className="mb-0">
                              <span className="border_circle">
                                <Image
                                  src={
                                    coin.image
                                      ? coin.image.startsWith(
                                          "https://d3iuzwoiyg9qa8.cloudfront.net/"
                                        )
                                        ? coin.image
                                        : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${coin.image}`
                                      : altcoinImage
                                  }
                                  alt={coin.img_alt_title || "ICO Project"}
                                  width={32}
                                  height={32}
                                  className="project-icon me-2"
                                />
                              </span>
                              {coin.name || coin.ticker || "goodcrypto"}
                            </h6>
                          </Link>
                          <span>{getTimeAgo(coin.created_at)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="full_presaletable">
                    <div className="main_flex topheader">
                      <h5 className="mb-0 fw-bold">Trending Presales</h5>
                      <Link
                        href="/trending_presales"
                        className="btn btn-link text-dark"
                      >
                        View More
                      </Link>
                    </div>
                    <div className="block_Table p-2">
                      {tradeData.map((data, index) => (
                        <div className="main_flex mb-2" key={data.id || index}>
                          <Link
                            href={`/crypto-ico-details/${data.slug}`}
                            className="text_customization"
                          >
                            <h6 className="mb-0">
                              <span className="border_circle">
                                <Image
                                  src={
                                    data.image
                                      ? data.image.startsWith(
                                          "https://d3iuzwoiyg9qa8.cloudfront.net/"
                                        )
                                        ? data.image
                                        : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${data.image}`
                                      : altcoinImage
                                  }
                                  alt={data.img_alt_title || "ICO Project"}
                                  width={32}
                                  height={32}
                                  className="project-icon me-2"
                                />
                              </span>{" "}
                              {data.name}
                            </h6>
                          </Link>
                          {/* <Image src={tradegraph} alt='tradegraph' height={20} width={50} /> */}
                          <span>
                            {data.is_promoted === 1
                              ? "Promoted"
                              : formatNumber(data.total_coin)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="boxcoin p-3 rounded-3 h-100">
                <div className="section-title d-flex justify-content-between">
                  <h2 className="h4 mb-4">Best Presale to Buy</h2>
                  <div className="">
                    <Link
                      href="/best-presale-to-buy"
                      className="btn btn-link text-dark font-weight-bold"
                    >
                      View More
                    </Link>
                  </div>
                </div>
                <div className="coinsblock">
                  <ul>
                    {highlightData.map((coin, index) => (
                      <li key={coin.id || index}>
                        <div className="bg_Cat  rounded-3">
                          <div className="">
                          <Link
                            href={`/crypto-ico-details/${coin.slug}`}
                            className="text_customization"
                          >
                            <div className="row p-2">
                              <div className="col-4 ">
                                <Image
                                  src={
                                    coin.image
                                      ? coin.image.startsWith(
                                          "https://d3iuzwoiyg9qa8.cloudfront.net/"
                                        )
                                        ? coin.image
                                        : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${coin.image}` 
                                      : altcoinImage
                                  }
                                  alt={coin.img_alt_title || "ICO Project"}
                                  width={38}
                                  height={38}
                                  className="mx-auto rounded-circle flex justify-center items-center"
                                />
                              </div>

                              <div className="col-8 ">
                                <label className="flex justify-center items-center">
                                  {coin.name}
                                  {/* {coin.name.split(" ").slice(0, 2).join(" ") + (coin.name.split(" ").length > 2 ? "..." : "")} */}
                                </label>
                              </div>
                            </div>
                          </Link>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end --> */}
      {/* <!-- third section --> */}
      <Promoted feturedData={feturedData} />
      <div className="container">
        <div className="section-title">
          <h5 className="h4 fw-semibold">Best Crypto Presales 2024</h5>
          <p>
            Looking for the best and newest crypto presales and ICOs to invest
            in? You're in the right place at Cryptopresale.net. We list the most
            exciting upcoming and active crypto presales of 2024. Our presales
            overview gives you all the key details. Whether you're new to crypto
            or a seasoned investor, Cryptopresale is your go-to for the top
            presale opportunities.
          </p>
        </div> 
      </div>

     
      <Coin CoinData={CoinData} /> 
      <FAQAccordion faqData={faqData} />
      {/* <!-- faq section --> */}

      {/* <!--  --> */}
      <Favorite />
      {/* <ImageUploader /> */}
    </>
  );
}
