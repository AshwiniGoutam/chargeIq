/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./page.css";
import Header from "../../components/header/header";
import SubText from "../../components/subText/page";
import FaqAccordion from "../../components/faqAccordion/page";
import FeatureImages from "../../components/feature-image/page";
import Footer from "../../components/footer/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.first_name.trim()) {
      validationErrors.first_name = "First name is required";
    }
    if (!formData.last_name.trim()) {
      validationErrors.last_name = "Last name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://api.chargiq.in/v1/user/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          message: formData.message,
        }),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert("Form submitted successfully!");
        setFormData({ first_name: "", last_name: "", email: "", message: "" });
      } else {
        const errorResponse = await response.json();
        alert(`Failed to submit the form: ${errorResponse.message || "Unknown error"}`);
      }
    } catch (error) {
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Header ShowHeader contact />
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

                <form onSubmit={handleSubmit}>
                  <div className="d-flex gap-4">
                    <div className="w-100">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        placeholder="First name"
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                      {errors.first_name && (
                        <small className="text-danger">
                          {errors.first_name}
                        </small>
                      )}
                    </div>
                    <div className="w-100">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        placeholder="Last name"
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                      {errors.last_name && (
                        <small className="text-danger">{errors.last_name}</small>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <small className="text-danger">{errors.message}</small>
                    )}
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="primary-btn border-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
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
