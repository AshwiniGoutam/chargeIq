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
      <Header mobile />

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
          <div className="row row-gap-4 align-items-center overflow-hidden overflow-hidden">
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src="../../assets/images/mobile-mockup-new.png"
                alt="mock-up"
                // className="mockup-2"
              />
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

      <section className="mobile-app-feature" id="features">
        <div className="container">
          <div className="row row-gap-4 align-items-center overflow-hidden">
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div>
                <h2>Easily Find and Access Chargepoints</h2>
                <ul>
                  <li>
                    Nearby Discoverability: ocate chargepoints within close
                    proximity using a map-based interface or list view.
                  </li>
                  <li>
                    Roaming Access: Seamlessly charge at multiple networks of
                    chargers without the need for separate apps or
                    subscriptions.
                  </li>
                  <li>
                    Connector Type Filters: Filter chargepoints based on
                    connector types compatible with your EV, whether for
                    two-wheelers or four-wheelers.
                  </li>
                  <li>
                    Availability Status: See real-time availability of
                    chargepoints to avoid wasted trips.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src="../../assets/images/mobile-app-feature-1.png"
                alt="feature-1"
                width="100%"
              />
            </div>
          </div>

          <div className="row row-gap-4 align-items-center overflow-hidden">
            <div className="col-sm-12 col-md-6 col-lg-6"  data-aos="fade-right"
              data-aos-duration="1000">
              <img
                src="../../assets/images/mobile-app-feature-3.png"
                alt="feature-1"
                width="100%"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"  data-aos="fade-left"
              data-aos-duration="1000">
              <div>
                <h2>AI-Optimized Trip Planner </h2>
                <ul>
                  <li>
                    Charging Stop Suggestions: Get recommendations for the most
                    efficient charging stops en route, considering your EV's
                    battery capacity, distance, and charger availability.
                  </li>
                  <li>
                    Time and Cost Savings: Optimize your travel to minimize
                    stops and reduce charging costs.
                  </li>
                  <li>
                    Range Anxiety Reduction: Plan trips with confidence, knowing
                    the AI has considered all aspects to keep your EV powered.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row row-gap-4 align-items-center overflow-hidden">
            <div className="col-sm-12 col-md-6 col-lg-6"  data-aos="fade-right"
              data-aos-duration="1000">
              <div>
                <h2>Secure Payments and Effortless Charging</h2>
                <ul>
                  <li>
                    Multiple Payment Options: Pay using UPI, credit/debit cards,
                    or the built-in ChargIQ Wallet for added convenience.
                  </li>
                  <li>
                    Instant Access via QR Code: Scan a QR code at the
                    chargepoint to start charging without delays.
                  </li>
                  <li>
                    Session Tracking: Monitor your charging session in
                    real-time, including energy consumption and cost.
                  </li>
                  <li>
                    Billing Transparency: Receive detailed invoices post-session
                    to track expenses.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"  data-aos="fade-left"
              data-aos-duration="1000">
              <img
                src="../../assets/images/mobile-app-feature-2.png"
                alt="feature-1"
                width="100%"
              />
            </div>
          </div>

          <div className="row row-gap-4 align-items-center overflow-hidden">
            <div className="col-sm-12 col-md-6 col-lg-6"  data-aos="fade-right"
              data-aos-duration="1000">
              <img
                src="../../assets/images/mobile-app-feature-5.jpg"
                alt="feature-1"
                width="100%"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"  data-aos="fade-left"
              data-aos-duration="1000">
              <div>
                <h2>Check-ins and Reviews</h2>
                <ul>
                  <li>
                    Community Engagement: Leave reviews and ratings for
                    chargepoints based on your experience.
                  </li>
                  <li>
                    Check-in Features: Notify others of charger availability and
                    share real-time updates about functionality or issues.
                  </li>
                  <li>
                    Trustworthy Feedback: Use community reviews to identify
                    reliable chargepoints for worry-free charging.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row row-gap-4 align-items-center overflow-hidden">
            <div className="col-sm-12 col-md-6 col-lg-6"  data-aos="fade-right"
              data-aos-duration="1000">
              <div>
                <h2>Customizable Charging Settings</h2>
                <ul>
                  <li>
                    Charging Goals: Choose specific goals, such as charging up
                    to a certain percentage, a set duration, or a specific
                    amount of energy.
                  </li>
                  <li>
                    Personalized Trip Planning: Tailor your routes by adding
                    your vehicle's specifications, such as range, efficiency,
                    and battery size.
                  </li>
                  <li>
                    Convenience and Flexibility: Make charging smarter and
                    hassle-free by customizing preferences for every journey.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"  data-aos="fade-left"
              data-aos-duration="1000">
              <img
                src="../../assets/images/mobile-app-feature-4.png"
                alt="feature-1"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section bg-white">
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
