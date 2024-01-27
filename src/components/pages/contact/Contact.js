import "./contact.css";

import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <a
                    href="https://maps.app.goo.gl/WJnurEtJyxrjyfN46"
                    className="text-info">
                    <i className="fas fa-location-dot fa-2x" />
                  </a>
                  <h3>Address</h3>
                  <p>
                    Katjunagar
                    <br />
                    Kolkata, WB 700032
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <a href="tel:+919836167970" className="text-info">
                    <i className="fa-solid fa-phone mt-4 fa-2x" />
                  </a>
                  <h3>Call Us</h3>
                  <p>
                    +91-9836167970
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <a
                    href="mailto:musketeerspremierleague@gmail.com"
                    className="text-info">
                    <i className="fa-solid fa-envelope mt-4 fa-2x" />
                  </a>
                  <h3>Email Us</h3>
                  <p>
                    katjunagarcolony32@gmail.com
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="fas fa-clock" />
                  <h3>Open Hours</h3>
                  <p>
                    Monday - Saturday
                    <br />
                    11:00AM - 09:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
