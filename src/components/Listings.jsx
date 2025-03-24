import React from 'react'
import Promoted from './Promoted'
import FAQAccordion from './FAQAccordion'
import Favorite from './Favorite'
import Link from 'next/link'

function Listings() {
  return (
    <>
      <section className="brdcrumb">
    <div className="container">
        <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Listings</li>
        </ul>
    </div>
</section>
    {/* <!-- third section --> */}
   <Promoted />
    {/* <!-- faq section --> */}
    <FAQAccordion />
    {/* <!--  --> */}
   <Favorite />
    </>
  )
} 

export default Listings
