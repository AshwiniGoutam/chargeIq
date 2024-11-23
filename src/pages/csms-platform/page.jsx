import React from "react";
import "./page.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SubText from "../../components/subText/page";
import { Link } from "react-router-dom";

export default function CsmsPlatform() {
  const FeaturedData = [
    {
      icon: "../../assets/images/csms-feature-icon-1.png",
      heading: "Flexible for Every Use Case",
      text: "ChargIQ is designed to serve diverse needs:",
      points: [
        { text: "Commercial Charging Networks" },
        { text: "Workplaces" },
        { text: "Residential Properties" },
        { text: "Fleet Management" },
      ],
    },
    {
      icon: "../../assets/images/csms-feature-icon-2.png",
      heading: "Seamless Charger Integration",
      text: "Setting up your charge points has never been easier.",
      points: [
        { text: "Connect any OCPP-compliant charger" },
        { text: "Integrate unlimited charge points" },
        { text: "Enjoy constant technical support" },
      ],
    },
    {
      icon: "../../assets/images/csms-feature-icon-3.png",
      heading: "Automated Revenue Management",
      text: "Maximize profitability with streamlined settlements.",
      points: [
        { text: "Automated payouts for all stakeholders" },
        { text: "Transparent, secure financial processes" },
        { text: "Track previous and upcoming settlements with ease" },
      ],
    },
    {
      icon: "../../assets/images/csms-feature-icon-4.png",
      heading: "Operational Insights at Your Fingertips",
      text: "Stay in control and monitor your network in real-time.",
      points: [
        { text: "Remote start, stop, and control all chargers" },
        { text: "Automated network performance reports" },
        {
          text: "Lightning-fast updates on charging sessions, revenue, and user activity",
        },
      ],
    },
    {
      icon: "../../assets/images/csms-feature-icon-5.png",
      heading: "Feature-Rich for Customers",
      text: "Deliver the best charging experience to your customers.",
      points: [
        { text: "Real-time station availability and dynamic updates" },
        { text: "Simple publishing of charge points for public use" },
        { text: "Embedded roaming services for wider access" },
      ],
    },
  ];

  const ToolsData = [
    {
      icon: "../../assets/images/tools-icon-1.png",
      heading: "Advanced Dashboard",
      text: "Gain instant visibility into the performance of your network.",
    },
    {
      icon: "../../assets/images/tools-icon-2.png",
      heading: "Variable Pricing Engine",
      text: "Customize tariffs based on demand or time of day.",
    },
    {
      icon: "../../assets/images/tools-icon-3.png",
      heading: "User Management",
      text: "Control user access, schedules, and pricing for private and public charging.",
    },
    {
      icon: "../../assets/images/tools-icon-4.png",
      heading: "Automatic Firmware Upgrades",
      text: "Seamlessly update charger firmware to ensure optimal performance and security.",
    },
    {
      icon: "../../assets/images/tools-icon-5.png",
      heading: "Proactive Fault Monitoring",
      text: "Minimize downtime with self-healing algorithms for fault detection and resolution.",
    },
    {
      icon: "../../assets/images/tools-icon-6.png",
      heading: "Data-Driven Analytics",
      text: "Dive deep into operations and customer behavior for strategic decision-making.",
    },
    {
      icon: "../../assets/images/tools-icon-7.png",
      heading: "Customizable Reports",
      text: "Tailor network reports to show the insights you care about most.",
    },
    {
      icon: "../../assets/images/tools-icon-8.png",
      heading: "Admin Hierarchy",
      text: "Assign roles and responsibilities within your team for efficient management.",
    },
    {
      icon: "../../assets/images/tools-icon-9.png",
      heading: "24/7 Support",
      text: "Get expert assistance through email, tickets, and toll-free support.",
    },
  ];

  return (
    <>
      <Header />
      <section className="csms-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-sm-12 col-md-12 col-lg-12"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <h1>Effortlessly Manage your Charging Stations</h1>
              <p className="mt-2">
                ChargIQ CSMS is an intelligent, cloud-based platform designed to
                simplify the management and growth of your EV charging network.
                <span className="d-block">
                  Whether you're managing a single charger or an extensive
                  network, ChargIQ empowers you with the tools you need to
                  optimize operations,
                </span>{" "}
                enhance customer experiences, and scale effortlessly.
              </p>

              <Link to="/contact-us" className="primary-btn mx-auto mt-4">
                Lets Connect{" "}
                <img src="../../assets/images/arrow.svg" alt=""></img>
              </Link>
            </div>
            {/* <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                src="../../assets/images/csms-img.png"
                alt="csms"
                width="100%"
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-duration="1500">
            Why Choose ChargIQ CSMS?
          </h2>
          <div className="row row-gap-4">
            {FeaturedData &&
              FeaturedData?.map((item, index) => {
                return (
                  <div
                    className="col-sm-12 col-md-4 col-lg-4"
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <div className="card">
                      <img src={item?.icon} alt="icon" />
                      <div>
                        <h4>{item?.heading}</h4>
                        <p>{item?.text}</p>
                      </div>
                      <ul>
                        {item?.points?.map((i, o) => {
                          return <li key={o}>{i?.text}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="csms-feature-section">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-duration="1500">
            Comprehensive Tools for Charger Management
          </h2>
          <p data-aos="fade-up" data-aos-duration="1500">
            ChargIQ CSMS offers a powerful suite of tools to fit your needs.
          </p>
          <div className="row row-gap-4">
            {ToolsData &&
              ToolsData?.map((item, index) => {
                return (
                  <div
                    className="col-sm-12 col-md-4 col-lg-4"
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <div className="card">
                      <img src={item?.icon} alt="icon" />
                      <h4>{item?.heading}</h4>
                      <p>{item?.text}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="security-section">
        <div className="container">
          <div className="row align-items-center overflow-hidden">
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Enhanced Control & Security</h2>
              <ul>
                <li>
                  <b>Access Management</b>: Define who can use your chargers and
                  when.
                </li>
                <li>
                  <b>Connector-Level Control</b>: Adjust configurations for
                  individual ports as needed.
                </li>
                <li>
                  <b>RFID Integration</b>: Enable secure, seamless payment and
                  authentication.
                </li>
              </ul>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                // src="../../assets/images/security-img.jpg"
                src="../../assets/images/csms-img.png"
                alt="security-img"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="use-case-section">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-duration="1500">
            Tailored Solutions for Every Use Case
          </h2>
          <div className="row">
            <div
              className="col-sm-12 col-md-3 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card">
                <img
                  src="../../assets/images/use-case-icon-1.png"
                  alt="icons"
                />
                <div>
                  <h4>Commercial Charging Networks</h4>
                  <p>
                    Launch or expand your network with ChargIQ’s powerful tools.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-3 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card">
                <img
                  src="../../assets/images/use-case-icon-2.png"
                  alt="icons"
                />
                <div>
                  <h4>Workplace Charging</h4>
                  <p>
                    Simplify EV charging management at offices for employees and
                    visitors.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-3 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card">
                <img
                  src="../../assets/images/use-case-icon-3.png"
                  alt="icons"
                />
                <div>
                  <h4>Residential Charging</h4>
                  <p>
                    Make EV charging seamless for housing societies and
                    individual residences.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-3 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card">
                <img
                  src="../../assets/images/use-case-icon-4.png"
                  alt="icons"
                />
                <div>
                  <h4>Fleet Management</h4>
                  <p>
                    Optimize Routes for electric fleets with tools for
                    scheduling, session management, and driver access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="network-section">
        <div className="container">
          <div className="row">
            <h2 data-aos="fade-up" data-aos-duration="3000">
              Ready to Power Up Your{" "}
              <span className="d-block">EV Charging Network?</span>
            </h2>
            <p data-aos="fade-up" data-aos-duration="3000">
              With ChargIQ CSMS, managing your chargers is smarter, simpler, and{" "}
              <br />
              scalable. Schedule a Demo Today and experience the future of EV
              charging.
            </p>
            <Link
              to="/contact-us"
              className="primary-btn w-fit"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Lets Connect{" "}
              <img src="../../assets/images/arrow.svg" alt=""></img>
            </Link>
          </div>
        </div>
      </section>

      <section className="whitelabel-solutions-section">
        <div className="container">
          <div className="row align-items-center overflow-hidden">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                src="../../assets/images/whitelabel-solutions-img.jpg"
                alt="images"
                width="100%"
              />
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h2>
                ChargIQ CSMS with{" "}
                <span className="d-block primary-color">
                  White-Labeled EV Solutions
                </span>
              </h2>
              <p>
                Elevate your Charging Network with a Complete White-Labeled
                Ecosystem
              </p>
              <p>
                Expand your EV charging business with a fully integrated,
                white-labeled solution that combines ChargIQ CSMS with a
                custom-branded EV Discovery and Booking App. Deliver a seamless
                and engaging experience to your users, empowering them with
                advanced tools for EV charging convenience and planning.
              </p>
            </div>
          </div>

          <div className="row mt-4 align-items-center overflow-hidden">
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2>Deliver a Unified Charging Experience</h2>
              <p>
                With the white-labeled bundle, you can offer a one-stop solution
                for EV charging, enhancing customer satisfaction while growing
                your network. From advanced trip planning to effortless
                payments, ChargIQ ensures a superior experience for both
                operators and users.
              </p>
              <p>
                <Link to="/contact-us">Contact us today</Link> to learn more
                about our white-labeled solutions and how they can transform
                your EV charging business!
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                src="../../assets/images/charging-exprience.jpg"
                alt="images"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
