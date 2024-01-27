import React from "react";
import "./upcoming.css";

export const Upcoming = () => {
  return (
    <section id="upcoming" className="upcoming">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Upcoming Events</h2>
          <p>What we are going to host</p>
        </header>
        <div
          className="upcoming-slider swiper"
          data-aos="fade-up"
          data-aos-delay={200}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="upcoming-item">
                <div className="stars">
                  <i className="fa fa-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/upcoming/upcoming-1.jpg"
                    className="upcoming-img"
                    alt="events"
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
            </div>
            {/* End upcoming item */}
            <div className="swiper-slide">
              <div className="upcoming-item">
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/upcoming/upcoming-2.jpg"
                    className="upcoming-img"
                    alt="events"
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
            </div>
            {/* End upcoming item */}
            <div className="swiper-slide">
              <div className="upcoming-item">
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/upcoming/upcoming-3.jpg"
                    className="upcoming-img"
                    alt="events"
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
            </div>
            {/* End upcoming item */}
            <div className="swiper-slide">
              <div className="upcoming-item">
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/upcoming/upcoming-4.jpg"
                    className="upcoming-img"
                    alt="events"
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>
            </div>
            {/* End upcoming item */}
            <div className="swiper-slide">
              <div className="upcoming-item">
                <div className="stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <p>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/upcoming/upcoming-5.jpg"
                    className="upcoming-img"
                    alt="events"
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
            {/* End upcoming item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
};
