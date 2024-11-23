import React from "react";
import "./page.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SubText from "../../components/subText/page";

export default function CsmsPlatform() {
  return (
    <>
      <Header ShowHeader/>
      <section className="csms-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <SubText text="Effortless Charger Management for Every Need" />
              <h1>ChargIQ Charging Station Management System (CSMS)</h1>
              <p>
                ChargIQ CSMS is an intelligent, cloud-based platform designed to
                simplify the management and growth of your EV charging network.
                Whether you're managing a single charger or an extensive
                network, ChargIQ empowers you with the tools you need to
                optimize operations, enhance customer experiences, and scale
                effortlessly.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <img src="../../assets/images/csms-img.jpeg" alt="csms" width='100%' />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
