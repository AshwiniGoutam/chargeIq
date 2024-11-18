import React, { useEffect, useState } from 'react';
import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1200, // Set the duration of the animation (optional)
            once: true, // Run the animation only once (optional)
        });
    }, []);
    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`} data-aos="fade-down">
            <div>
                <img src="../assets/images/logo.png" alt="logo" width='140' />
            </div>

            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>

            <a href="#" className='primary-btn'>Contact Us  <img src="../../assets/images/arrow.svg" alt="" /></a>
        </header>
    )
}
