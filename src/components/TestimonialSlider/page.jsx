import React, { useRef } from 'react';
import './page.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialSlider() {
    const swiperRef = useRef(null);
    return (
        <>
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                // slidesPerView={2.2}
                breakpoints={{
                    640: {
                        slidesPerView: 1,  
                    },
                    768: {
                        slidesPerView: 1.5, 
                    },
                    1024: {
                        slidesPerView: 2.2, 
                    },
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={{
                    prevEl: '.custom-prev', // Custom prev button
                    nextEl: '.custom-next', // Custom next button
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card">

                        <div className="d-flex align-items-center gap-2">
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                        </div>

                        <p>Nostrum exercitationem ullam corporis suscipit laboriosam, nisiaeruo aliuid commodi consenuatur reprehenderit in voluptate velit esse cia incididunt ut labore aet dolore magna.</p>

                        <div className='user-div'>
                            <img src="../../assets/images/testimonial-personimage3.jpg" alt="" />

                            <div>
                                <h5>Zenith Neaulo</h5>
                                <p>Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card">

                        <div className="d-flex align-items-center gap-2">
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                        </div>

                        <p>Nostrum exercitationem ullam corporis suscipit laboriosam, nisiaeruo aliuid commodi consenuatur reprehenderit in voluptate velit esse cia incididunt ut labore aet dolore magna.</p>

                        <div className='user-div'>
                            <img src="../../assets/images/testimonial-personimage3.jpg" alt="" />

                            <div>
                                <h5>Zenith Neaulo</h5>
                                <p>Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card">

                        <div className="d-flex align-items-center gap-2">
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                            <img src="../../assets/images/star.png" alt="star" className='star-img' />
                        </div>

                        <p>Nostrum exercitationem ullam corporis suscipit laboriosam, nisiaeruo aliuid commodi consenuatur reprehenderit in voluptate velit esse cia incididunt ut labore aet dolore magna.</p>

                        <div className='user-div'>
                            <img src="../../assets/images/testimonial-personimage3.jpg" alt="" />

                            <div>
                                <h5>Zenith Neaulo</h5>
                                <p>Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="custom-nav">
                <button className="custom-prev"><img src="../../assets/images/arrow.svg" alt="" /></button>
                <button className="custom-next"><img src="../../assets/images/arrow.svg" alt="" /></button>
            </div>
        </>
    )
}
