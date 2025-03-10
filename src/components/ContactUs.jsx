import React from 'react'

function ContactUs() {
  return (
    <>
      <div>
  <section className="brdcrumb">
    <div className="container">
      <ul className="mb-0">
        <li><a href="/" title="Home">Home</a></li>
        <li>Contact Us</li>
      </ul>
    </div>
  </section>
  {/* contact section */}
  <section className="contact_block_new py-4">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <h1>Get in <span>touch</span> with us</h1>
          <p>We'd love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.</p>
          <div className="contact-info-box">
            {/* Info Box 1 Start */}
            <div className="info-box-1 wow fadeInUp">
              {/* Contact Info Item Start */}
              <div className="contact-info-item">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="http://192.168.1.7/crypto-presale/images/phone.png" alt />
                </div>
                {/* Icon Box End */}
                {/* Contact Item Content Start */}
                <div className="contact-item-content">
                  <h3>phone number</h3>
                  <p>+91-9876543210</p>
                </div>
                {/* Contact Item Content End */}
              </div>
              {/* Contact Info Item End */}
              {/* Contact Info Item Start */}
              <div className="contact-info-item">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="http://192.168.1.7/crypto-presale/images/email.png" alt />
                </div>
                {/* Icon Box End */}
                {/* Contact Item Content Start */}
                <div className="contact-item-content">
                  <h3>email address</h3>
                  <p>abc@example.com</p>
                </div>
                {/* Contact Item Content End */}
              </div>
              {/* Contact Info Item End */}
            </div>
            {/* Info Box 1 End */}
            {/* Info Box 2 Start */}
            <div className="info-box-2 wow fadeInUp">
              {/* Contact Info Item Start */}
              <div className="contact-info-item">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="http://192.168.1.7/crypto-presale/images/maps.png" alt />
                </div>
                {/* Icon Box End */}
                {/* Contact Item Content Start */}
                <div className="contact-item-content">
                  <h3>Address</h3>
                  <p>123 Creative Lane London, SW1A 1AA United Kingdom</p>
                </div>
                {/* Contact Item Content End */}
              </div>
              {/* Contact Info Item End */}
            </div>
            {/* Info Box 1 End */}
          </div>
        </div>
        <div className="col-xl-6">
          <div className="contact-us-form">
            <div className="row">
              <div className="col-xl-6 mb-4">
                <input type="text" className="form-control" placeholder="First Name" name />
              </div>
              <div className="col-xl-6 mb-4">
                <input type="text" className="form-control" placeholder="Last Name" name />
              </div>
              <div className="col-xl-12 mb-4">
                <input type="text" className="form-control" placeholder="Mobile No" name />
              </div>
              <div className="col-xl-12 mb-4">
                <input type="text" className="form-control" placeholder="Email Address" name />
              </div>
              <div className="col-xl-12 mb-4">
                <textarea className="form-control" rows={4} placeholder="Messages" defaultValue={""} />
              </div>
              <div className="col-xl-12">
                <a href className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end */}
</div>

    </>
  )
}

export default ContactUs
