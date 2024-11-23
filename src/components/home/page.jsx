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
      <Header />

      <section className="home-banner-section" id="home">
        <div className="container">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Powering{" "}
            <span>
              <span>EV Networks</span>
              <span>EV Fleets Owners</span>
              <span>EV Users</span>
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

      <section className="about-us-section" id="about-us">
        <div className="container">
          <div className="row row-gap-4 align-items-center overflow-hidden">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                src="../../assets/images/circle-img.png"
                alt="circle-img"
                data-aos="fade-right"
                data-aos-duration="1500"
              />
              <img
                src="../../assets/images/about-img-2.jpg"
                alt="about-img"
                data-aos="fade-right"
                data-aos-duration="1500"
              />
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <SubText text="About" />
              <h2>Empowering the Future of Electric Mobility</h2>
              <p>
                At ChargIQ, we are redefining the EV charging experience by
                delivering innovative, end-to-end solutions for seamless
                electric journeys. Our platforms combine cutting-edge technology
                with unmatched reliability to power EV users, fleets, and
                networks with confidence.
              </p>

              <p className="">
                Join us in building a smarter, greener future—one charge at a
                time.
              </p>

              <AboutAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="services-section" id="features">
        <div className="container">
          <div
            className="d-flex align-items-center justify-content-between flex-wrap"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div>
              <SubText text="Features" />
              <h2>
                ChargIQ: The Ultimate App for{" "}
                <span className="d-block">All Your EV Charging Needs</span>
              </h2>
              <p>
                Stay Powered Anywhere, Anytime – Simplify EV Charging with
                India’s Leading Chargepoint Aggregator
              </p>
            </div>
          </div>
          <div className="row row-gap-4">
            <Services />
          </div>
        </div>
      </section> */}

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
          <div className="row" data-aos="fade-up" data-aos-duration="3000">
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
              {/* <SubText text="Who We Are" />
              <h2>
                Your Safety is Our{" "}
                <span className="d-block">Top Priority.</span>
              </h2>
              <p>
                Rostrum exercitationem ullam corporis suscipit laboriosam,
                nisiae commodi consenuatur reprehenderit.
              </p>
              <a href="#" className="primary-btn">
                Get Started{" "}
                <img src="../../assets/images/arrow.svg" alt="arrow" />
              </a> */}

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

      {/* <section className="pricing-section">
                <div className="container">
                    <SubText text='Our Pricing' />
                    <h2 data-aos="fade-up"
                        data-aos-duration="3000">
                        Choose From Our Best <span className="d-block">Charging Plans</span>
                    </h2>

                    <div className="row" data-aos="fade-up"
                        data-aos-duration="3000">
                        <Pricing />
                    </div>
                </div>
            </section> */}

      {/* <section className="why-choose-us-section">
        <div className="d-flex align-items-center flex-wrap">
          <div className="half-section"></div>
          <div className="half-section half-content-section">
            <div className="d-flex flex-column justify-content-center h-100">
              <SubText text="Why Choose Us" />
              <h2 data-aos="fade-up" data-aos-duration="1000">
                Embracing <span className="d-block">Sustainable Travel</span>
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Nostrum exercitationem ullam corporis suscipit laboriosam,
                aliuid commodi consenuatur reprehenderit in voluptate velit
                incididunt ut labore aet dolore magna.
              </p>

              <ProgressBarSection />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="testimonial-section" id="testimonials">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <SubText text="Testimonials" />
              <h2 data-aos="fade-up" data-aos-duration="3000">
                What Our Clients <span className="d-block">Say About Us</span>
              </h2>
              <p
                className="description"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Nostrum exercitationem ullam corporis suscipit laboriosam,
                nisiaeruo aliuid commodi consenuatur reprehenderit in voluptate
                velit esse cia incididunt ut labore aet dolore magna.
              </p>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-6"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section> */}

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
