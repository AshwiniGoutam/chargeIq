import React from "react";
import "./page.css";
import ServiceArrow from "../ServiceArrow";

export default function Services() {
  let data = [
    {
      image: "../../assets/images/services-icon-1.png",
      heading: "Find and Access Chargepoints with Ease",
      text: [
        {
          text: "Discover nearby chargepoints for both two-wheelers and four-wheelers.",
        },
        {
          text: "Roaming-enabled access to multiple networks with a single app.",
        },
        { text: "Filter by vehicle connector type for a perfect match." },
      ],
    },
    {
      image: "../../assets/images/services-icon-2.png",
      heading: "Reliable and Real-Time Information",
      text: [
        {
          text: "View live chargepoint availability, verified tariffs, and station details.",
        },
        {
          text: "Dynamic status updates and predictions ensure hassle-free planning.",
        },
        {
          text: "Up-to-date reviews and the ability to check-in at chargepoints",
        },
      ],
    },
    {
      image: "../../assets/images/services-icon-3.png",
      heading: "Secure Payments and Seamless Charging",
      text: [
        {
          text: "Use UPI, debit/credit cards, or ChargIQ Wallet for secure transactions.",
        },
        {
          text: "Monitor charging sessions through the app with notifications when charging completes.",
        },
        { text: "Access chargepoints instantly with QR code scanning." },
      ],
    },
    {
      image: "../../assets/images/services-icon-4.png",
      heading: "AI-Driven Trip Planner",
      text: [
        {
          text: "Plan long-distance trips with optimized charging stops.",
        },
        {
          text: "Input route details like source, destination, and starting SoC for suggestions.",
        },
        {
          text: "Save costs, time, and reduce range anxiety with AI-optimized charging itineraries.",
        },
      ],
    },
    {
      image: "../../assets/images/services-icon-5.png",
      heading: "Customizable Charging Options",
      text: [
        {
          text: "Set charging goals by percentage, duration, or amount.",
        },
        {
          text: "Fine-tune trip planning with variables like battery type and vehicle specifications",
        },
        {
          text: "ChargIQ makes EV ownership simpler, smarter, and stress-free. Download Now to experience the difference! ",
        },
      ],
    },
  ];

  return (
    data &&
    data?.map((item, index) => {
      return (
        <div
          className="col-sm-4"
          key={index}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="card">
            <img src={item?.image} alt="service-icon" />
            <div>
              <h4>{item?.heading}</h4>
              <ul className="p-3 pb-0 m-0">
                {item?.text?.map((items, index) => {
                  return <li>{items?.text}</li>;
                })}
              </ul>
            </div>
            <a href="#">
              Learn More
              {/* <img src="../../assets/images/service-arrow.svg" alt="arrow" /> */}
              <ServiceArrow />
            </a>
          </div>
        </div>
      );
    })
  );
}
