import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-between w-100">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <img src="../assets/images/logo.png" alt="logo" width='140' />
                        </div>
                        <p>Tristirue nulla aliquet enim tortor at auctor urna massa enim nec dui nunc mattis enim ut tellus aute irure repreaen …</p>

                        <div className='phone-section'>
                            <img src="../../assets/images/phone-icon.png" alt="phone-icon" className='phone-icon' />
                            <div>
                                <h4>+012 (345) 6789</h4>
                                <p>Got Questions? Call us 24/7</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h4 className='footer-heading'>Working Hours</h4>

                        <ul>
                            <li><span>Monday – Saturday</span>12:00 pm – 14:45 pm</li>
                            <li><span>Sunday – Thursday</span>17.30 pm – 00.00 am</li>
                            <li><span>Friday – Saturday</span>17.30 pm – 00.00 am</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2">
                        <h4 className='footer-heading'>Navigation</h4>

                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2">
                        <h4 className='footer-heading'>Contact Us</h4>
                        
                        <div className='address-div'>
                            <p>Address:</p>
                            <span>121 King Street Melbourne, 3000, Australia</span>
                        </div>

                        <div className='email-div'>
                            <p>Email:</p>
                            <span>info@energox.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
