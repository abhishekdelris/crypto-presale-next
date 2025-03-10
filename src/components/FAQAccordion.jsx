//change for new navbar 


'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import contactusimg from '../images/contact-us.png'; // Adjust path as needed.
// import '../styles/FAQAccordion.module.css';

const FAQAccordion = () => {
  // State to track which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // FAQ Data Array
  const faqData = [
    {
      question: "What are crypto presales?",
      answer: "Crypto presales, also known as Initial Coin Offerings (ICOs), token presales, or early-stage token sales, offer investors a chance to purchase a cryptocurrency's tokens before a public launch. These early investment opportunities, often available at a lower price, aim to fund project development and marketing efforts. They are pivotal for both project teams, seeking capital to bring their visions to life, and for investors, looking for potential high returns from the ground floor of innovative blockchain projects."
    },
    {
      question: "How do crypto presales work?",
      answer: "Crypto presales typically involve a project team creating a detailed whitepaper outlining their blockchain concept, technology, and token economics. Investors can purchase tokens at a discounted rate during a specified period before the public launch. The process usually includes steps like token allocation, pricing strategy, minimum and maximum investment limits, and a clear roadmap for token utility and project development."
    },
    {
      question: "Are crypto presales worth it?",
      answer: "Crypto presales can be potentially lucrative but come with significant risks. Pros include early access to innovative projects, potential for high returns, and supporting emerging blockchain technologies. Cons involve high volatility, potential for scams, and the risk of project failure. Investors should conduct thorough research, understand the project's fundamentals, team background, and have a high-risk tolerance."
    }
  ];

  // Toggle Accordion
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="section-title text-center">
              <h5 className="fw-bold h4">Frequently Asked Questions</h5>
              <p>Have questions? We have answers!</p>
            </div>
            
            <div className="accordion-container">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className={`accordion-item ${openAccordion === index ? 'active' : ''}`}
                >
                  <button 
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openAccordion === index}
                  >
                    {faq.question} 
                    <span className="icon">
                      {openAccordion === index ? '-' : '+'}
                    </span>
                  </button>
                  
                  {openAccordion === index && (
                    <div 
                      className="accordion-content"
                      aria-hidden={openAccordion !== index}
                    >
                      <p className=''>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-xl-4">
            <div className="contact_block text-center">
              <div className="iconbox mb-4">
                <Image 
                  src={contactusimg} 
                  alt='Contact Us' 
                  height={75} 
                  width={75} 
                /> 
              </div>
              <div className="contact_faq">
                <h5>You have different questions?</h5>
                <p>Our team will answer all your questions. We ensure a quick response.</p>
                <a href="/contactus" className="btn-main primary-btn shadow">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
