import React from "react";
import "./page.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function ExploreSolutions() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="For EV Owners">
        <div className="row">
          <div className="col-sm-6">
            <div className="tabs-content-div">
              <h4>Stay Powered, Stay Confident</h4>
              <p>
                Don’t let a low battery disrupt your journey. ChargIQ takes the
                frustration out of finding chargers by locating options nearby
                that match your plug type, tariff, and preferences.
              </p>
            </div>
            <div className="tabs-content-div mt-4 border-0">
              <h4>Plan with Ease </h4>
              <p>
                Plan with Ease Whether it’s a daily commute or a long road trip,
                ChargIQ’s AI Driven Route Planner simplifies charging for your
                EV. With over thousands of users already enjoying stress-free
                long-distance travel, ChargIQ creates an optimized charging
                itinerary tailored to save you both time and money.
              </p>
              <p>
                Charge smarter, travel farther—experience the ChargIQ
                difference!
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src="../../assets/images/tabs-image-1.jpeg"
              alt="image"
              className="w-100"
            />
          </div>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Charging Point Operators">
        <div className="row">
          <div className="col-sm-6">
            <div className="tabs-content-div">
              <h4>Supercharge Your Charging Business with ChargeConnect</h4>
              <p className="mb-0">
                Charge smarter, not harder. With ChargIQ’s CPO Dashbard,
                managing your EV charging network is seamless—whether you
                operate a handful of locations or hundreds. From deployment to
                real-time metrics, we handle the complexities so you can focus
                on success.
              </p>
            </div>
            <div className="tabs-content-div mt-4 border-0 pb-0">
              <h4>Grow Together</h4>
              <p>
                At ChargIQ, we empower businesses with intuitive software
                designed for growth. Whether you’re starting fresh or scaling
                up, trust Evy to manage your software needs while you build your
                network.
              </p>

              <p>Let’s drive the future of EV charging, together!</p>

              <p>
                Electric fleets are redefining cost-effective and sustainable
                operations, and ChargIQ’s software stack makes the transition
                seamless.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src="../../assets/images/tabs-image-2.png"
              alt="image"
              className="w-100"
            />
          </div>
        </div>
      </Tab>
      <Tab eventKey="contact" title="For EV Fleet Management">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="tabs-content-div border-0">
              <h4>Powered by Geofleet</h4>
              <p>
                Our sister company, Geofleet, takes your EV fleet to the next
                level with:
              </p>

              <ul>
                <li>
                  <b>End-to-end visibility:</b> Monitor battery health, charging
                  status, and vehicle locations in real-time through IoT
                  sensors.
                </li>
                <li>
                  <b>AI-driven efficiency:</b> Plan first and last-mile
                  deliveries with precision, considering 10+ constraints and
                  customer/fleet preferences.
                </li>
                <li>
                  <b>Enhanced automation:</b> Streamline operations and maximize
                  fleet productivity effortlessly.
                </li>
              </ul>

              <p>
                Together, ChargIQ and <a href="geofleet.in">Geofleet</a> provide the ultimate solution for
                powering and managing your electric fleet with unmatched
                efficiency and control.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src="../../assets/images/tabs-image-3.jpg"
              alt="image"
              className="w-100"
            />
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}
