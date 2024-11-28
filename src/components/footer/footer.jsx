import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row row-gap-4 justify-content-between w-100">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="logo-div">
                <img src="../assets/images/logo.png" alt="logo" width="60" />
                <h4>ChargIQ</h4>
              </div>
              <p>
                Your all-in-one app for finding, accessing, and managing EV
                charging effortlessly.{" "}
              </p>

              <div className="footer-download-btns">
                <a href="#">
                  <img src="../../assets/images/apple.svg" alt="apple" />
                </a>
                <span>|</span>
                <a href="#">
                  <img
                    src="../../assets/images/playstore.png"
                    alt="playStore"
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-4">
              <h4 className="footer-heading">Navigation</h4>

              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <Link to="/mobile-app">Mobile App</Link>
                </li>
                <li>
                  <Link to="/csms-platform">CSMS Platform</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <h4 className="footer-heading">Contact Information</h4>

              <div className="address-div">
                <p>Address:</p>
                <span>
                  C-5, 80 Feet Road, Kiran Path, Shanthi Nagar,Mansarovar,
                  Jaipur, Rajasthan 302019
                </span>
              </div>

              <div className="email-div">
                <p>Email:</p>
                <span>
                  <a href="mailto:inquiries@parallaxiq.com">
                    inquiries@parallaxiq.com
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="row privacy-policy-row mt-2">
            <ul className="d-flex flex-row">
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright-section">
        {/* <p>© Pixelcrews</p> */}
        <a href="https://parallaxiq.com/" target="_blank">
          Copyright @ 2024 © Pixelcrews All rights reserved
        </a>
      </div>
    </>
  );
}
