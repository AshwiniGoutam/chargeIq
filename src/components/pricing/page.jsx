import React from 'react'
import './page.css'
import RightSvg from '../RightSvg'

export default function Pricing() {
    return (
        <>
            <div className='col-sm-12 col-md-6 col-lg-4'>
                <div className="card">
                    <div>
                        <h4>Standard</h4>
                        <p>Reiciendis voluptatibus maiores conseruatur perferendis.</p>
                    </div>

                    <h4 className='pricing'><sup>$</sup>
                        <span>29</span>
                        /month</h4>

                    <ul>
                        <li><RightSvg /> Affordable subscription.</li>
                        <li><RightSvg />Standard charging stations.</li>
                        <li><RightSvg />Limited charging for regular use.</li>
                        <li><RightSvg />Additional perks or benefits.</li>
                    </ul>

                    <a href="#" className='primary-btn text-white'>Get Started</a>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-4'>
                <div className="card">
                    <div>
                        <h4>Premium</h4>
                        <p>Reiciendis voluptatibus maiores conseruatur perferendis.</p>
                    </div>

                    <h4 className='pricing'><sup>$</sup>
                        <span>58</span>
                        /month</h4>

                    <ul>
                        <li><RightSvg /> Affordable subscription.</li>
                        <li><RightSvg />Standard charging stations.</li>
                        <li><RightSvg />Limited charging for regular use.</li>
                        <li><RightSvg />Additional perks or benefits.</li>
                    </ul>

                    <a href="#" className='primary-btn text-white'>Get Started</a>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-4'>
                <div className="card">
                    <div>
                        <h4>Business</h4>
                        <p>Reiciendis voluptatibus maiores conseruatur perferendis.</p>
                    </div>

                    <h4 className='pricing'><sup>$</sup>
                        <span>67</span>
                        /month</h4>

                    <ul>
                        <li><RightSvg /> Affordable subscription.</li>
                        <li><RightSvg />Standard charging stations.</li>
                        <li><RightSvg />Limited charging for regular use.</li>
                        <li><RightSvg />Additional perks or benefits.</li>
                    </ul>

                    <a href="#" className='primary-btn text-white'>Get Started</a>
                </div>
            </div>
        </>
    )
}
