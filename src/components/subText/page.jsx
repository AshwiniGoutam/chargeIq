import React from "react";
import "./page.css";

export default function SubText({ text }) {
  return (
    <div
      className="subtext-section"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <span>{text}</span>
    </div>
  );
}
