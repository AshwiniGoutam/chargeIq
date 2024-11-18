import React, { useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './page.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProgressBarSection() {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);
    return (
        <div className='progress-bar-section'>
            <div data-aos="fade-up"
                data-aos-duration="1000">
                <div className='progress-section'>
                    <p>Home Stations</p>
                    <p>85%</p>
                </div>
                <ProgressBar now={85} />
            </div>

            <div data-aos="fade-up"
                data-aos-duration="2000">
                <div className='progress-section'>
                    <p>Commercial Systems</p>
                    <p>70%</p>
                </div>
                <ProgressBar now={70} />
            </div>

            <div data-aos="fade-up"
                data-aos-duration="3000">
                <div className='progress-section'>
                    <p>Public Chargers</p>
                    <p>78%</p>
                </div>
                <ProgressBar now={78} />
            </div>
        </div>
    )
}
