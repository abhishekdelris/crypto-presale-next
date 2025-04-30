
"use client"
import React, { useState } from 'react';

function EditProfile() {

    const [previewSrc, setPreviewSrc] = useState(null);

  const previewAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <section className="editprofile">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h4 className="fw-bold">Edit Profile</h4>
              <div className="avatar-container">
                <div className="user-avatar">
                  <img
                    id="avatarPreview"
                    src="images_placeholder.png"
                    alt="Profile Avatar"
                    className="avatar-img"
                  />
                  <div
                    className="edit-icon"
                    onclick="document.getElementById('avatarInput').click()"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </div>
                  <input
        type="file"
        accept="image/*"
        onChange={previewAvatar}
      />
      {previewSrc && (
        <img
          src={previewSrc}
          alt="Avatar Preview"
          style={{ maxWidth: '200px', marginTop: '10px', borderRadius: '10px' }}
        />
      )}
                </div>
              </div>
              <div className="form-section">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName" className="required">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                    <div className="help-text">
                      Name Mandatory to complete 100% profile
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="username" className="required">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="Enter user name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender:</label>
                    <div className="gender-options">
                      <div className="radio-group">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          defaultChecked
                        />
                        <label htmlFor="male">Male</label>
                      </div>
                      <div className="radio-group">
                        <input type="radio" id="female" name="gender" />
                        <label htmlFor="female">Female</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <div className="select-wrapper">
                      <select id="country" className="form-control">
                        <option selected disabled>
                          Select Country
                        </option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="in">India</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <div className="select-wrapper">
                      <select id="state" className="form-control">
                        <option selected disabled>
                          Select State
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="mobile" className="required">
                      Verify Mobile Number
                    </label>
                    <div className="inline-group">
                      <input
                        type="text"
                        className="form-control phone-code"
                        defaultValue={+91}
                        readOnly
                      />
                      <input
                        type="text"
                        id="mobile"
                        className="form-control"
                        placeholder="Mobile no."
                      />
                    </div>
                    <div className="help-text">
                      Mobile no. is mandatory to complete 100% profile.
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="otp">Enter OTP</label>
                    <div className="inline-group">
                      <input
                        type="text"
                        id="otp"
                        className="form-control"
                        placeholder="Enter OTP"
                      />
                      <button className="btn btn-primary text-pre">
                        Verify OTP
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="required">
                      Verify Email
                    </label>
                    <div className="inline-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        defaultValue="coingabbaratul@gmail.com"
                      />
                    </div>
                    <div className="help-text">
                      Email ID Mandatory to complete 100% profile.
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob" className="required">
                      Date of Birth
                    </label>
                    <input type="date" id="dob" className="form-control" />
                    <div className="help-text">
                      DOB is mandatory to complete 100% profile.
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincode">Pin Code</label>
                    <input
                      type="text"
                      id="pincode"
                      className="form-control"
                      placeholder="Pin Code"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="referral">Share Referral Code</label>
                    <div className="inline-group">
                      <input
                        type="text"
                        id="referral"
                        className="form-control"
                        defaultValue="GABBARE8DC19EF"
                        readOnly
                      />
                      <button className="copy-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                        </svg>
                      </button>
                      <button className="btn btn-outline text-pre">
                        Share Referral Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-section">
                <h3>
                  Submit Your Social links
                  <span className="badge">i</span>
                </h3>
                <div className="help-text mb-2">
                  Minimum two social media IDs required to complete 100%
                  profile.
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="facebook">
                      Facebook ID <span className="badge">i</span>
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      className="form-control"
                      placeholder="Facebook ID"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="instagram">
                      Instagram ID <span className="badge">i</span>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      className="form-control"
                      placeholder="Instagram ID"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telegram">
                      Telegram ID <span className="badge">i</span>
                    </label>
                    <input
                      type="text"
                      id="telegram"
                      className="form-control"
                      placeholder="Telegram ID"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="twitter">
                      Twitter ID <span className="badge">i</span>
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      className="form-control"
                      placeholder="Twitter ID"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reddit">
                      Reddit ID <span className="badge">i</span>
                    </label>
                    <input
                      type="text"
                      id="reddit"
                      className="form-control"
                      placeholder="Reddit ID"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="linkedin">
                      LinkedIn ID <span className="badge">i</span>
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      className="form-control"
                      placeholder="LinkedIn ID"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="discord">
                      Discord ID <span className="badge">i</span>
                    </label>
                    <input
                      type="text"
                      id="discord"
                      className="form-control"
                      placeholder="Discord ID"
                    />
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="about">About</label>
                  <textarea
                    id="about"
                    className="form-control"
                    placeholder="Bio..."
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="action-btn-container">
                <button className="btn btn-primary">Update Profile</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProfile
