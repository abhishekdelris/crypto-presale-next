// import React from 'react'
// import Image from 'next/image';
// import phoneImage from "../images/phone.png";
// import emailImage from "../images/email.png";
// import mapsImage from "../images/maps.png";
// import Link from 'next/link';

// function ContactUs() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const formData = {
//       name: 'Jane Doe',
//       email: 'jane@example.com',
//       inquiry_type: 'Partnership',
//       mobile: '9876543210',
//       message: 'I would like to partner...',
//       subject: 'Business Proposal',
//     };
  
//     try {
//       const res = await fetch('/api/contact-us', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await res.json();
//       console.log('Contact saved:', data);
//     } catch (err) {
//       console.error('Submission failed:', err);
//     }
//   };
  
//   return (
//     <>
//       <div>
//   <section className="brdcrumb">
//     <div className="container">
//       <ul className="mb-0">
//         <li><Link href="/" title="Home">Home</Link></li>
//         <li>Contact Us</li>
//       </ul>
//     </div>
//   </section>
//   {/* contact section */}
//   <section className="contact_block_new py-4">
//     <div className="container">
//       <div className="row"> 
//         <div className="col-xl-6">
//           <h1>Get in <span>touch</span> with us</h1>
//           <p>We'd love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.</p>
//           <div className="contact-info-box">
//             {/* Info Box 1 Start */}
//             <div className="info-box-1 wow fadeInUp">
//               {/* Contact Info Item Start */}
//               <div className="contact-info-item">
//                 {/* Icon Box Start */}
//                 <div className="icon-box">
//                   <Image src={phoneImage} alt />
//                 </div>
//                 {/* Icon Box End */}
//                 {/* Contact Item Content Start */}
//                 <div className="contact-item-content">
//                   <h3>phone number</h3>
//                   <p>+91-9876543210</p>
//                 </div>
//                 {/* Contact Item Content End */}
//               </div>
//               {/* Contact Info Item End */}
//               {/* Contact Info Item Start */}
//               <div className="contact-info-item">
//                 {/* Icon Box Start */}
//                 <div className="icon-box">
//                   <Image src={emailImage} alt />
//                 </div>
//                 {/* Icon Box End */}
//                 {/* Contact Item Content Start */}
//                 <div className="contact-item-content">
//                   <h3>email address</h3>
//                   <p>abc@example.com</p>
//                 </div>
//                 {/* Contact Item Content End */}
//               </div>
//               {/* Contact Info Item End */}
//             </div>
//             {/* Info Box 1 End */}
//             {/* Info Box 2 Start */}
//             <div className="info-box-2 wow fadeInUp">
//               {/* Contact Info Item Start */}
//               <div className="contact-info-item">
//                 {/* Icon Box Start */}
//                 <div className="icon-box">
//                   <Image src={mapsImage} alt />
//                 </div>
//                 {/* Icon Box End */}
//                 {/* Contact Item Content Start */}
//                 <div className="contact-item-content">
//                   <h3>Address</h3>
//                   <p>123 Creative Lane London, SW1A 1AA United Kingdom</p>
//                 </div>
//                 {/* Contact Item Content End */}
//               </div>
//               {/* Contact Info Item End */}
//             </div>
//             {/* Info Box 1 End */}
//           </div>
//         </div>
//         <div className="col-xl-6">
//           <div className="contact-us-form">
//             <div className="row">
//               <div className="col-xl-6 mb-4">
//                 <input type="text" className="form-control" placeholder="First Name" name />
//               </div>
//               <div className="col-xl-6 mb-4">
//                 <input type="text" className="form-control" placeholder="Last Name" name />
//               </div>
//               <div className="col-xl-12 mb-4">
//                 <input type="text" className="form-control" placeholder="Mobile No" name />
//               </div>
//               <div className="col-xl-12 mb-4">
//                 <input type="text" className="form-control" placeholder="Email Address" name />
//               </div>
//               <div className="col-xl-12 mb-4">
//                 <textarea className="form-control" rows={4} placeholder="Messages" defaultValue={""} />
//               </div>
//               <div className="col-xl-12">
//                 <Link href="/" className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main">Submit</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* end */}
// </div>

//     </>
//   )
// }

// export default ContactUs


'use client';

import React, { useState } from 'react'; 
import Image from 'next/image';
import phoneImage from "../images/phone.png";
import emailImage from "../images/email.png";
import mapsImage from "../images/maps.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    subject: '',
    inquiry_type: 'General',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact_us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        // alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
          subject: '',
          inquiry_type: 'General',
        });
      } else {
        alert('Error sending message');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      toast.success("Something went wrong");
      // alert('Something went wrong');
    }
  };

  return (
    <>
      <div>
        <section className="brdcrumb">
          <div className="container">
            <ul className="mb-0">
              <li><Link href="/">Home</Link></li>
              <li>Contact Us</li>
            </ul>
          </div>
        </section>

        <section className="contact_block_new py-4">
            <ToastContainer />  
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <h1>Get in <span>touch</span> with us</h1>
                <p>We'd love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.</p>
                <div className="contact-info-box">
                  <div className="info-box-1 wow fadeInUp">
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <Image src={phoneImage} alt="Phone" />
                      </div>
                      <div className="contact-item-content">
                        <h3>Phone Number</h3>
                        <p>+91-9876543210</p>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <Image src={emailImage} alt="Email" />
                      </div>
                      <div className="contact-item-content">
                        <h3>Email Address</h3>
                        <p>abc@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="info-box-2 wow fadeInUp">
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <Image src={mapsImage} alt="Map" />
                      </div>
                      <div className="contact-item-content">
                        <h3>Address</h3>
                        <p>123 Creative Lane London, SW1A 1AA United Kingdom</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <form className="contact-us-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-xl-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-12 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile No"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-12 mb-4">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-xl-12 mb-4">
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Messages"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-xl-12">
                      <button
                        type="submit"
                        className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
