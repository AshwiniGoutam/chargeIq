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
            Powering Seamless EV Journeys
          </h1>
          <p data-aos="fade-up" data-aos-duration="2000">
            Connected Charging Solutions for EV Networks, EV Fleets Owners, and
            EV Users
            <span className="d-block">
              {" "}
              Our Mission: Driving India Towards Greener Mobility by Uniting the
              EV Charging Ecosystem
            </span>
          </p>
          {/* <h4>Discover   |   Charge   |   Pay</h4> */}
          <a
            href="#"
            className="primary-btn"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Learn more <img src="../../assets/images/arrow.svg" alt="" />
          </a>
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
                src="../../assets/images/about-img.jpg"
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
              <SubText text="About Us" />
              <h2>We Provide Best Car Charging Experiences.</h2>
              <p>
                Experience the ultimate in convenience and reliability with our
                top-tier car charging solutions. We offer fast, efficient, and
                eco-friendly charging to keep you on the road with peace of
                mind. Trust us for the best charging experience, anytime and
                anywhere.
              </p>
              <AboutAccordion />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <div
            className="d-flex align-items-center justify-content-between flex-wrap"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div>
              <SubText text="Our Services" />
              <h2>ChargIQ: The Ultimate App for <span className="d-block">All Your EV Charging Needs</span></h2>
              <p>
                Stay Powered Anywhere, Anytime – Simplify EV Charging with
                India’s Leading Chargepoint Aggregator
              </p>
            </div>

            <a href="#" className="primary-color">
              See All{" "}
              <img
                src="../../assets/images/service-arrow.svg"
                alt="arrow"
                style={{ width: "30px" }}
              />
            </a>
          </div>
          <div className="row row-gap-4">
            <Services />
          </div>
        </div>
      </section>

      <section className="explore-solutions">
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
              <h2>One App for All Your EV Charging Needs</h2>
              <p>
                Join thousands of EV owners from top brands who trust ChargIQ to
                power their journeys.
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

      <section className="featured-section">
        <div className="container">
          <SubText
            text="Our Features"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Key Features of Energox <span className="d-block">EV Charging</span>{" "}
          </h2>

          <div className="row align-items-center overflow-hidden">
            <div
              className="col-sm-12 col-md-6 col-lg-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="feature-div">
                <img src="../../assets/images/feature-icon1.png" alt="" />
                <h4>High Quality</h4>
                <p>
                  Duis aute irure dolor in repren in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="feature-div">
                <img src="../../assets/images/feature-icon3.png" alt="" />
                <h4>Global Compatibility</h4>
                <p>
                  Duis aute irure dolor in repren in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <img
                  src="../../assets/images/car-charging-img.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-3"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="feature-div">
                <img src="../../assets/images/feature-icon2.png" alt="" />
                <h4>Easy Process </h4>
                <p>
                  Duis aute irure dolor in repren in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="feature-div">
                <img src="../../assets/images/feature-icon4.png" alt="" />
                <h4>User-Friendly</h4>
                <p>
                  Duis aute irure dolor in repren in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
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

      <section className="why-choose-us-section">
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
      </section>

      <section className="testimonial-section" id="testimonials">
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
