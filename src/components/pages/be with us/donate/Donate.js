import React from "react";
import "./donate.css";

export const Donate = () => {
  return (
    <section id="donate" className="donate">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Donate</h2>
          <p>Check if you can help</p>
        </header>
        <div className="row gy-4" data-aos="fade-left">
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={100}>
            <div className="box">
              <h3 style={{ color: "#07d5c0" }}>Basic Donation</h3>
              <div className="price">
                <sup>Rs.</sup>999
              </div>
              {/* <img
                src="assets/img/donate-free.png"
                className="img-fluid"
                alt="plans"
              /> */}
              <ul>
                <li className="na">Donate for Colony Committee</li>
                <li>Donate for Kali Mandir</li>
                <li className="na">Donate for Jagriti Sangha</li>
                <li>Donate for Library</li>
              </ul>
              <a href="#" className="btn-buy">
                Donate Now
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={300}>
            <div className="box">
              <h3 style={{ color: "#ff901c" }}>Intermidiate Donation</h3>
              <div className="price">
                <sup>Rs.</sup>2999
              </div>
              {/* <img
                src="assets/img/donate-business.png"
                className="img-fluid"
                alt="plans"
              /> */}
              <ul>
                <li className="na">Donate for Colony Committee</li>
                <li>Donate for Kali Mandir</li>
                <li>Donate for Jagriti Sangha</li>
                <li>Donate for Library</li>
              </ul>
              <a href="#" className="btn-buy">
                Donate Now
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={400}>
            <div className="box">
              <h3 style={{ color: "#ff0071" }}>Ultimate Donation</h3>
              <div className="price">
                <sup>Rs.</sup>4999
              </div>
              {/* <img
                src="assets/img/donate-ultimate.png"
                className="img-fluid"
                alt="plans"
              /> */}
              <ul>
                <li>Donate for Colony Committee</li>
                <li>Donate for Kali Mandir</li>
                <li>Donate for Jagriti Sangha</li>
                <li>Donate for Library</li>
              </ul>
              <a href="#" className="btn-buy">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
