import React from 'react'
import Promoted from './Promoted'
import FAQAccordion from './FAQAccordion'
import Favorite from './Favorite'

function Listings() {
  return (
    <>
      <section className="brdcrumb">
    <div className="container">
        <ul className="mb-0">
            <li><a href="index" title="Home">Home</a></li>
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
