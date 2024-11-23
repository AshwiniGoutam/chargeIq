import React, { useEffect, useState } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import HumbergMenu from "../HumbergMenu"; // Assuming this is your hamburger menu component

export default function Header({ ShowHeader }) {
  const [modalShow, setModalShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
      <header
        className={`header ${
          isScrolled || ShowHeader ? "header-scrolled" : ""
        }`}
      >
        <div data-aos="fade-down">
          <Link to="/">
            <img src="../assets/images/logo.png" alt="logo" width="90" />
          </Link>
        </div>

        <ul data-aos="fade-down" className="desktop-menu">
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

        {/* Hamburger Menu */}
        <div className="mobile-menu-icon" onClick={toggleSidebar}>
          <HumbergMenu />
        </div>

        <Link to="/contact-us" className="primary-btn" data-aos="fade-down">
          Contact Us <img src="../../assets/images/arrow.svg" alt="" />
        </Link>
      </header>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <ul>
          <li>
            <a href="#home" onClick={toggleSidebar}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={toggleSidebar}>
              About Us
            </a>
          </li>
          <li>
            <a href="#features" onClick={toggleSidebar}>
              Features
            </a>
          </li>
          <li>
            <a href="#explore-solutions" onClick={toggleSidebar}>
              Explore Solutions
            </a>
          </li>
          <li>
            <Link to="/contact-us" onClick={toggleSidebar}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close sidebar when clicked outside */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
