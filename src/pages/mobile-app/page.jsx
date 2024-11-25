import React from "react";
import "./page.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FeatureImages from "../../components/feature-image/page";
import SubText from "../../components/subText/page";
import FaqAccordion from "../../components/faqAccordion/page";
import TripPlanner from "../../components/tripPlanner/page";
import { Link } from "react-router-dom";

export default function MobileApp() {
  return (
    <>
      <Header />

      <section className="mobile-app-section">
        <div className="container">
          <div className="row align-items-center overflow-hidden">
            <div
              className="col-sm-12 col-md-12 col-lg-12"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <h1>
                ChargIQ: The Ultimate App for All{" "}
                <span className="d-block">Your EV Charging Needs</span>
              </h1>
              <p>
                Stay Powered Anywhere, Anytime – Simplify EV Charging with
                India’s Leading Chargepoint Aggregator
              </p>
              <a href="#" className="primary-btn">
                Download App Now{" "}
                <img src="../../assets/images/arrow.svg" alt="" />
              </a>
            </div>
            {/* <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                src="../../assets/images/mobie-app-mockup.png"
                alt=""
                width="100%"
                data-aos="fade-left"
                data-aos-duration="1500"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* <TripPlanner /> */}

      <section className="trip-planner-section">
        <div className="container">
          <div className="row align-items-center overflow-hidden">
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="position-relative">
                <img
                  src="../../assets/images/mobile-mockup-side-1.png"
                  alt="mock-up"
                  className="mockup-1"
                />
                <img
                  src="../../assets/images/mobile-mockup-new.png"
                  alt="mock-up"
                  className="mockup-2"
                />
                <img
                  src="../../assets/images/mobile-mockup-side-2.png"
                  alt="mock-up"
                  className="mockup-3"
                />
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2>
                Travelling Outstation via your EV?{" "}
                <span className="primary-color">
                  — But worried about range anxiety?
                </span>
              </h2>
              <p>
                Don’t let uncertainty stop you! ChargIQ's Artificial
                Intelligence-backed Trip Planner ensures your journey is smooth
                and stress-free.
              </p>
              <ul>
                <li>Locate EV chargers along your route</li>
                <li>Explore charger amenities</li>
                <li>Customize stops based on your preferences</li>
              </ul>
              <p>
                Say goodbye to range anxiety and hello to carefree travel with
                ChargIQ!
              </p>
              <Link href="/contact-us" className="primary-btn">
                Plan Your Trip Now with ChargIQ!
              </Link>
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
