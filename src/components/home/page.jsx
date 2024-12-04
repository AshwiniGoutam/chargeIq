import React, { useEffect } from "react";
import Header from "../header/header";
import "./page.css";
import AboutAccordion from "../about-accordion/page";
import SubText from "../subText/page";
import Services from "../services/page";
import Pricing from "../pricing/page";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBarSection from "../progressBar/page";
import TestimonialSlider from "../TestimonialSlider/page";
import FaqAccordion from "../faqAccordion/page";
import Footer from "../footer/footer";
import CounterSection from "../counter/page";
import ExploreSolutions from "../explore-solutions/page";
import FeatureImages from "../feature-image/page";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <Header home/>

      <section className="home-banner-section" id="home">
        <div className="container">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            ChargIQ | EV &{" "}
            <span>
              <span>EV Networks</span>
              <span>EV Owners</span>
              <span>EV Connect</span>
              <span>EV Journeys</span>
            </span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="2000">
            Connected Charging Solutions for EV Networks, EV Fleets Owners, and
            EV Users
            {/* <span className="d-block">
              {" "}
              Our Mission: Driving India Towards Greener Mobility by Uniting the
              EV Charging Ecosystem
            </span> */}
          </p>
          {/* <h4>Discover   |   Charge   |   Pay</h4> */}

          <div data-aos="fade-up" data-aos-duration="3000">
            <h4>Download the app now</h4>

            <div className="download-btns">
              <a href="#">
                <img src="../../assets/images/apple.svg" alt="apple" />
              </a>
              <span>|</span>
              <a href="#">
                <img src="../../assets/images/playstore.png" alt="playStore" />
              </a>
            </div>
          </div>
          {/* <a
            href="#"
            className="primary-btn"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Explore Solutions leading to Solutions module{" "}
            <img src="../../assets/images/arrow.svg" alt="" />
          </a> */}
        </div>
      </section>

      <section className="featured-section" id="features">
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

      <section className="explore-solutions" id="explore-solutions">
        <div className="container">
          <SubText text="Explore Solutions" />
          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <ExploreSolutions />
          </div>
        </div>
      </section>

      <section className="who-we-are-section">
        <div className="container">
          <div className="row align-items-center row-gap-4">
            <div
              className="col-sm-12 col-md-6- col-lg-6"
              data-aos="fade-up"
              data-aos-duration="3000"
            >

              {/* <SubText text="Who We Are" /> */}
              <div className="logo-div">
                <img src="../assets/images/logo.png" alt="logo" width="60" />
                <h4>ChargIQ</h4>
              </div>
              <h2>
                One App for All Your EV{" "}
                <span className="d-block">Charging Needs</span>
              </h2>
              <p>
                Join thousands of EV owners from top brands who trust{" "}
                <span className="d-block">
                  ChargIQ to power their journeys.
                </span>
              </p>
              <a href="#" className="primary-btn">
                Download ChargIQ Now
                <img src="../../assets/images/arrow.svg" alt="arrow" />
              </a>
            </div>
            <div className="col-sm-12 col-md-6- col-lg-6">
              <CounterSection />
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
