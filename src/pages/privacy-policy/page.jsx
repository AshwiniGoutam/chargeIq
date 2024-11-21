import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./page.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Header ShowHeader />
      <section className="privacy-policy-section">
        <div className="container">
          <div className="row">
            <h1>Privacy Policy </h1>

            <div className="content-div">
              <div>
                <p>Last Updated: 20th Nov’24</p>
                <p>
                  At ChargIQ, your privacy is important to us. This policy
                  explains how we collect, use, and protect your personal
                  information.
                </p>
              </div>
              <div>
                <h4>1. Information We Collect</h4>
                <p>We collect the following types of information:</p>
                <ul>
                  <li>
                    Personal Information: Name, email address, phone number,
                    billing details, and other account registration details.
                  </li>
                  <li>
                    Device Information: IP address, browser type, device
                    identifiers.
                  </li>
                  <li>
                    Usage Data: Information on how you interact with the website
                    and app, such as pages visited, session duration, etc.
                  </li>
                </ul>
              </div>

              <div>
                <h4>2. How We Use Your Information</h4>
                <p>Your information is used to:</p>
                <ul>
                  <li>
                    Provide and manage services, including EV charger bookings
                    and payments.
                  </li>
                  <li>
                    Improve the performance and functionality of our platform.
                  </li>
                  <li>
                    Communicate important updates, promotional offers, or
                    technical notices.
                  </li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>

              <div>
                <h4>3. Data Sharing</h4>
                <p>We may share your data with:</p>
                <ul>
                  <li>Payment processors: To facilitate transactions.</li>
                  <li>
                    Service partners: For operating and maintaining EV chargers.
                  </li>
                  <li>
                    Authorities: If required by law or in response to valid
                    legal requests.
                  </li>
                  <li>
                    Analytics providers: To analyze usage trends (data is
                    anonymized where possible).
                  </li>
                </ul>
              </div>

              <div>
                <h4>4. Data Security </h4>
                <p>
                  We implement advanced security measures to protect your data
                  from unauthorized access, alteration, or misuse. However, no
                  system is 100% secure, and we cannot guarantee complete
                  security.
                </p>
              </div>

              <div>
                <h4>5. Your Rights </h4>
                <p>
                  Depending on your location, you may have the following rights:
                </p>
                <ul>
                  <li>Access, modify, or delete your data.</li>
                  <li>
                    Service partners: For operating and maintaining EV chargers.
                  </li>
                  <li>Opt-out of marketing communications.</li>
                  <li>Restrict or object to data processing.</li>
                </ul>
                <p>
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:support@chargiq.in.">support@chargiq.in.</a>{" "}
                </p>
              </div>

              <div>
                <h4>6. Data Retention</h4>
                <p>
                  We retain your data as long as necessary to provide services
                  and comply with legal obligations.
                </p>
              </div>

              <div>
                <h4>7. Changes to the Policy</h4>
                <p>
                  We may update this policy periodically. The updated policy
                  will be posted on our website, and significant changes will be
                  communicated via email.
                </p>
              </div>

              <div>
                <h4>8. Contact Us</h4>
                <p>
                  For any questions regarding this Privacy Policy, you can
                  contact us at:
                </p>

                <ul>
                  <li>
                    Email:{" "}
                    <a href="mailto:support@chargiq.in">support@chargiq.in</a>{" "}
                    or{" "}
                    <a href="mailto:support@parallaxiq.com">
                      support@parallaxiq.com
                    </a>
                  </li>

                  <li>
                    Phone: <a href="tel:+91 7303993102">+91 7303993102</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
