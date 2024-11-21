import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../privacy-policy/page.css";

export default function TermsCondition() {
  return (
    <>
      <Header ShowHeader />
      <section className="privacy-policy-section">
        <div className="container">
          <div className="row">
            <h1>Terms of Service</h1>

            <div className="content-div">
              <div>
                <p>Last Updated: 20th Nov’24</p>

                <h4>Welcome to ChargIQ</h4>
                <p>
                  These Terms of Service ("Terms") constitute a legally binding
                  agreement ("Agreement") between you and ChargIQ, operated by
                  Parallax IQ Solutions (“we,” “us,” or “our”). By accessing or
                  using our website, app, and services, you agree to comply with
                  and be bound by these Terms. If you do not agree to these
                  Terms, you may not use the ChargIQ platform.
                </p>
              </div>

              <div>
                <h4>Contact Information:</h4>
                <p>For inquiries or support, reach us at:</p>
                <ul>
                  <li>
                    Email:{" "}
                    <a href="mailto:support@chargiq.in">support@chargiq.in</a>{" "}
                    or{" "}
                    <a href="mailto:support@parallaxiq.com">
                      support@parallaxiq.com
                    </a>
                  </li>
                  <li>Phone: +91 7303993102</li>
                </ul>
              </div>

              <div>
                <h4>1. Scope of Services</h4>
                <p>
                  ChargIQ offers a platform to manage EV networks, connect EV
                  users, and support fleets with real-time data and booking
                  services for EV chargers. Services include:
                </p>
                <ul>
                  <li>Accessing EV charging locations.</li>
                  <li>Managing fleets and user accounts.</li>
                  <li>
                    Enabling payment for EV charging services via integrated
                    payment gateways.
                  </li>
                  <li>
                    Additional analytics and fleet-management tools (if
                    applicable).
                  </li>
                </ul>
              </div>

              <div>
                <h4>2. Account Responsibilities</h4>
                <p>
                  To access certain features, users must create an account. You
                  agree to:
                </p>
                <ul>
                  <li>Provide accurate, complete, and updated information.</li>
                  <li>Maintain the confidentiality of login credentials.</li>
                  <li>
                    Take responsibility for all activities under your account.
                  </li>
                </ul>
                <p>
                  ChargIQ is not liable for unauthorized access to your account
                  due to your negligence. Any disputes regarding charges made
                  through your account are your responsibility.
                </p>
              </div>

              <div>
                <h4>3. Payment and Refund Policy</h4>
                <p>
                  Payments are facilitated via Paytm and are subject to their
                  terms.
                  <span className="d-block">
                    Refunds may be requested for failed or incomplete charging
                    sessions within 7 days of the transaction.
                  </span>
                </p>
                
                <h4>Eligibility for Refunds:</h4>
                <ul>
                  <li>Errors in charging sessions.</li>
                  <li>Service not delivered as promised.</li>
                  <li>Other exceptional circumstances.</li>
                </ul>
              </div>

              <div>
                <h4>Refund Process:</h4>
                <p>
                  Contact us at{" "}
                  <a href="mailto:support@chargiq.in">support@chargiq.in</a>{" "}
                  with details of the issue. Approved refunds will be processed
                  within 9 business days.
                </p>
              </div>

              <div>
                <h4>4. Acceptable Use</h4>
                <p>You agree not to:</p>
                <ul>
                  <li>Breach any laws or regulations.</li>
                  <li>
                    Use any automated means to extract data from the platform.
                  </li>
                  <li>
                    Harm or interfere with the platform’s functionality,
                    security, or integrity.
                  </li>
                  <li>Misrepresent or misuse the services.</li>
                </ul>
              </div>

              <div>
                <h4>5. Intellectual Property</h4>
                <p>
                  All content, trademarks, and technology used on the platform
                  are owned by Pixelcrews Solutions or its licensors. You may
                  not reproduce, modify, or distribute any of these without
                  prior permission.
                </p>
              </div>

              <div>
                <h4>6. Limitation of Liability</h4>
                <p>
                  ChargIQ provides services "as is" without warranties of any
                  kind. We are not liable for:
                </p>
                <ul>
                  <li>Service interruptions or inaccuracies.</li>
                  <li>
                    Loss of data, revenue, or goodwill arising from the
                    platform's use.
                  </li>
                </ul>
              </div>

              <div>
                <h4>7. Dispute Resolution</h4>
                <p>
                  All disputes shall be resolved via arbitration under the
                  Arbitration and Conciliation Act, 1996 (India). Courts in
                  India shall have exclusive jurisdiction.
                </p>
              </div>

              <div>
                <h4>8. Modification of Terms</h4>
                <p>
                  We reserve the right to update these Terms. Continued use of
                  our services signifies your agreement to the revised Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
