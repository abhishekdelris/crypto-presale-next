import Link from 'next/link'
import React from 'react'

function UpdateRequest() {
  return (
    <>
      <div>
  <section className="brdcrumb">
    <div className="container">
      <ul className="mb-0">
        <li><Link href="/" title="Home">Home</Link></li>
        <li>Update Request</li>
      </ul>
    </div>
  </section>
  <section className="py-4 loginform">
    <div className="container">
      <div className="row"> 
        <div className="col-lg-6 offset-lg-3">
          <div className="contact-us-form">
            <div className="row">
              <div className="col-xl-12 text-center">
                <h5 className="h3 fw-bold mb-0">Update Coin Information</h5>
                <p>To update coin information fill out the form below. Update requets will be processed within 24 hours. You will be notified via email.</p>
              </div>
              <div className="col-xl-12">
                <h5 className="fw-bold mb-0">Step 1. Select the listing</h5>
                <p className="mb-0">Please select the CoinSniper listing you want to update.</p>
                <select className="form-control mb-3">
                  <option>Search for your crypto presale project</option>
                </select>
              </div>
              <div className="col-xl-12">
                <h5 className="fw-bold mb-0">Step 2. Select Field(s)</h5>
                <p className="mb-0">Please select the field(s) you want to update. You can add multiple fields.</p>
                <select className="form-control mb-3">
                  <option>Select Field</option>
                </select>
              </div>
              <div className="col-xl-12">
                <h5 className="fw-bold mb-0">Step 3. Add comment (optional)</h5>
                <p className="mb-0">Add a comment or additional information for the Coinsniper team.</p>
                <textarea className="form-control" rows={3} placeholder="Add comment" defaultValue={""} />
                <div className="checkbox my-2"><input type="checkbox" /> I agree to the Terms and Conditions*</div>
                <Link href="/" className="btn-main primary-btn btn-second_main shadow">Submit Update Request</Link>
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

export default UpdateRequest
