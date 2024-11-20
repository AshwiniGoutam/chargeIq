import React, { useEffect, useState } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactModal from "../contactModal/page";

export default function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Set the duration of the animation (optional)
      once: true, // Run the animation only once (optional)
    });
  }, []);

  return (
    <>
      <ContactModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleClose={handleClose}
      />
      <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <div data-aos="fade-down">
          <img src="../assets/images/logo.png" alt="logo" width="140" />
        </div>

        <ul data-aos="fade-down">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#explore-solutions">Explore Solutions</a>
          </li>
        </ul>

        <button className="primary-btn border-0" onClick={() => handleShow()} data-aos="fade-down">
          Contact Us <img src="../../assets/images/arrow.svg" alt="" />
        </button>
      </header>
    </>
  );
}
