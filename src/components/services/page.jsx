import React from 'react';
import './page.css';
import ServiceArrow from '../ServiceArrow';

export default function Services() {

    let data = [
        {
            image: "../../assets/images/services-icon-1.png",
            heading: "Image Comprehensive Charging Solutions",
            text: "Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus…"
        },
        {
            image: "../../assets/images/services-icon-2.png",
            heading: "Home Charging Installations",
            text: "Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus…"
        },
        {
            image: "../../assets/images/services-icon-3.png",
            heading: "Public Charging Infrastructure",
            text: "Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus…"
        },
        {
            image: "../../assets/images/services-icon-4.png",
            heading: "Fast and Efficient Charging",
            text: "Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus…"
        },
        {
            image: "../../assets/images/services-icon-5.png",
            heading: "24/7 Customer Support",
            text: "Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus…"
        },
        {
            image: "../../assets/images/services-icon-6.png",
            heading: "Smart Charging Features",
            text: "Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus…"
        }
    ]

    return (
        data && data?.map((item, index) => {
            return (
                <div className="col-sm-4" key={index} data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className='card'>
                        <img src={item?.image} alt="service-icon" />
                        <div>
                            <h4>{item?.heading}</h4>
                            <p>{item?.text}</p>
                        </div>
                        <a href="#">Learn More
                            {/* <img src="../../assets/images/service-arrow.svg" alt="arrow" /> */}
                            <ServiceArrow />
                        </a>
                    </div>
                </div>
            )
        })
    )
}
