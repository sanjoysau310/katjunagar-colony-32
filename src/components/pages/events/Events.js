import React from "react";
import "./events.css";
import { Link } from "react-router-dom";

export const Events = () => {
  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Our events</h2>
          <p>Have a look at the events</p>
        </header>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="box">
              {/* <img
                src="assets/img/events-1.png"
                className="img-fluid"
                alt="events"
              /> */}
              <h3>Past Events</h3>
              <p>We successfully completed our previous events</p>
              <p>This feature will be added soon......</p>
            </div>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay={400}>
            <div className="box">
              {/* <img
                src="assets/img/events-2.png"
                className="img-fluid"
                alt="events"
              /> */}
              <h3>Upcoming Events</h3>
              <p>Upcoming events coming soon....</p>
              <Link
                to="/upcomingEvents"
                className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Click here</span>
                <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay={600}>
            <div className="box">
              {/* <img
                src="assets/img/events-3.png"
                className="img-fluid"
                alt="events"
              /> */}
              <h3>Gallery</h3>
              <p>Find our memorible events here</p>
              <Link
                to="/gallery"
                className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Click here</span>
                <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
