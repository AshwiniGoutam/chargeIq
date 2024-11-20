import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between w-100">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <img src="../assets/images/logo.png" alt="logo" width="140" />
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
                <img src="../../assets/images/playstore.png" alt="playStore" />
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <h4 className="footer-heading">Navigation</h4>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h4 className="footer-heading">Contact Us</h4>

            <div className="address-div">
              <p>Address:</p>
              <span>
                C-5, 80 Feet Road, Kiran Path, Shanthi Nagar,Mansarovar, Jaipur,
                Rajasthan 302019
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
      </div>
    </footer>
  );
}
