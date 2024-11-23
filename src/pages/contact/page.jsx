/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./page.css";
import Header from "../../components/header/header";
import SubText from "../../components/subText/page";
import FaqAccordion from "../../components/faqAccordion/page";
import FeatureImages from "../../components/feature-image/page";
import Footer from "../../components/footer/footer";

export default function Contact() {
  return (
    <>
      <Header ShowHeader />
      <section className="contact-section">
        <div className="container">
          <div className="row row-gap-4">
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="contact-us-image-div">
                <img src="../../assets/images/contact-img.jpg" alt="img" />

                <div className="email-section">
                  <div className="email-bg">
                    <img src="../../assets/images/email-icon.png" alt="" />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:inquiries@parallaxiq.com">
                      inquiries@parallaxiq.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="contact-us-div">
                <div className="heading-section">
                  {" "}
                  <h1>Contact Us</h1>
                  <p>
                    Have questions or need assistance? Reach out to us today!
                  </p>
                </div>

                <form action="#">
                  <div className="d-flex gap-4">
                    <div className="w-100">
                      <label htmlFor="name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first name"
                        requried
                      />
                    </div>
                    <div className="w-100">
                      <label htmlFor="name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last name"
                        requried
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="name">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="john@email.com"
                      requried
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Message</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="message"
                      rows="4"
                      requried
                    />
                  </div>

                  <div className="d-flex justify-content-end">
                    <button type="submit" className="primary-btn border-0">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section bg-white" id="features">
        <div className="container">
          <SubText
            text="Features"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <h2 data-aos="fade-up" data-aos-duration="1000">
            ChargIQ: Your Ultimate EV{" "}
            <span className="d-block">Charging Solution</span>
          </h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            Stay Powered Anywhere, Anytime – Simplify EV Charging with India’s
            Leading Chargepoint Aggregator
          </p>

          <div className="row align-items-center overflow-hidden row-gap-4">
            <div
              className="col-sm-12 col-md-6 col-lg-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="feature-div">
                <img src="../../assets/images/feature-icon1.png" alt="" />
                <h4>Easily Find and Access Chargepoints</h4>
                <p>
                  Discover nearby chargepoints, with roaming access and vehicle
                  connector filters for both two-wheelers and four-wheelers.
                </p>
              </div>
              <div className="feature-div">
                <img src="../../assets/images/feature-icon3.png" alt="" />
                <h4>Secure Payments and Effortless Charging </h4>
                <p>
                  Pay securely via UPI, cards, or ChargIQ Wallet, track
                  sessions, and access chargepoints instantly with QR code
                  scanning.
                </p>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* <div>
                <img
                  src="../../assets/images/car-charging-img.png"
                  alt=""
                  width="100%"
                />
              </div> */}
              <FeatureImages />
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-3"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="feature-div">
                <img src="../../assets/images/feature-icon2.png" alt="" />
                <h4>AI-Optimized Trip Planner </h4>
                <p>
                  Get AI-driven charging stop suggestions to save time, cost,
                  and reduce range anxiety.
                </p>
              </div>
              <div className="feature-div">
                <img src="../../assets/images/feature-icon4.png" alt="" />
                <h4>Customizable Charging Settings</h4>
                <p>
                  Set goals by percentage, duration, or amount, and tailor trip
                  planning with vehicle specs for a smarter, stress-free EV
                  experience. Download now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <SubText text="Faqs" />
          <h2 data-aos="fade-up" data-aos-duration="3000">
            FAQs for ChargIQ App
          </h2>
          <div className="row">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
