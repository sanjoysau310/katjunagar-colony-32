import React from "react";
import "./plans.css";

export const Plans = () => {
  return (
    <section id="plans" className="plans">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>plans</h2>
          <p>Check our plans</p>
        </header>
        <div className="row gy-4" data-aos="fade-left">
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={100}>
            <div className="box">
              <h3 style={{ color: "#07d5c0" }}>Student Member</h3>
              <div className="price">
                <sup>Rs.</sup>10<span> / month</span>
              </div>
              <img
                src="assets/img/plans-free.png"
                className="img-fluid"
                alt="plans"
              />
              <ul>
                <li className="na">Colony Mebership</li>
                <li className="na">Kali Mandir Membership</li>
                <li className="na">Jagriti Sangha Membership</li>
                <li>Library Membership</li>
              </ul>
              <a href="#" className="btn-buy">
                Become a member Now
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={200}>
            <div className="box">
              <span className="featured">Featured</span>
              <h3 style={{ color: "#65c600" }}>Silver Member</h3>
              <div className="price">
                <sup>Rs.</sup>20<span> / month</span>
              </div>
              <img
                src="assets/img/plans-starter.png"
                className="img-fluid"
                alt="plans"
              />
              <ul>
                <li className="na">Colony Mebership</li>
                <li className="na">Kali Mandir Membership</li>
                <li>Jagriti Sangha Membership</li>
                <li>Library Membership</li>
              </ul>
              <a href="#" className="btn-buy">
                Become a member Now
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={300}>
            <div className="box">
              <h3 style={{ color: "#ff901c" }}>Gold Member</h3>
              <div className="price">
                <sup>Rs.</sup>50<span> / month</span>
              </div>
              <img
                src="assets/img/plans-business.png"
                className="img-fluid"
                alt="plans"
              />
              <ul>
                <li>Colony Mebership</li>
                <li className="na">Kali Mandir Membership</li>
                <li>Jagriti Sangha Membership</li>
                <li>Library Membership</li>
              </ul>
              <a href="#" className="btn-buy">
                Become a member Now
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={400}>
            <div className="box">
              <h3 style={{ color: "#ff0071" }}>Platinum Member</h3>
              <div className="price">
                <sup>Rs.</sup>100<span> / month</span>
              </div>
              <img
                src="assets/img/plans-ultimate.png"
                className="img-fluid"
                alt="plans"
              />
              <ul>
                <li>Colony Mebership</li>
                <li>Kali Mandir Membership</li>
                <li>Jagriti Sangha Membership</li>
                <li>Library Membership</li>
              </ul>
              <a href="#" className="btn-buy">
                Become a member Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
