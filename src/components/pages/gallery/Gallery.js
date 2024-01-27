import React, { useState } from "react";
import "./gallery.css";
import { Filter } from "../../util/Filter";

import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery1 from "../../../assets/images/gallery/gallery2.jpg";

var data = require("../../../config/gallery");

export const Gallery = () => {
  const [items, setItems] = useState(data);
  const category = [...new Set(data.galleries.map((value) => value.category))];
  const [filter, setFilter] = useState("All");

  const filterItem = (currentCategory) => {
    const newItem = data.filter((newVal) => {
      return newVal.category === currentCategory;
      // comparing category for displaying data
    });
    setItems(newItem);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Gallery</h2>
          <p>Check our previous events memorable scenes</p>
        </header>
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-12 d-flex justify-content-center">
            {/* <Filter /> */}
            {/* filter */}
            <ul id="gallery-flters">
              <li
                data-filter="*"
                className={filter === "All" && "filter-active"}
                onClick={() => setFilter("All")}>
                All
              </li>
              <li
                data-filter=".filter-app"
                className={filter === "Social" && "filter-active"}
                onClick={() => setFilter("Social")}>
                Social
              </li>
              <li
                data-filter=".filter-card"
                className={filter === "Cultural" && "filter-active"}
                onClick={() => setFilter("Cultural")}>
                Cultural
              </li>
              <li
                data-filter=".filter-web"
                className={filter === "Sports" && "filter-active"}
                onClick={() => setFilter("Sports")}>
                Sports
              </li>
            </ul>
            {/* filter */}
          </div>
        </div>

        <div
          className="row gy-4 gallery-container"
          data-aos="fade-up"
          data-aos-delay={200}>
          {items.galleries.map((gallery, index) => {
            return (
              (filter === gallery.category || filter === "All") && (
                <div
                  className="col-lg-4 col-md-6 gallery-item filter-app"
                  key={index}>
                  <div className="gallery-wrap">
                    {/* {console.log(filter)} */}
                    <img
                      src={gallery.path}
                      className="img-fluid"
                      alt="gallery"
                    />
                    <div className="gallery-info">
                      <h4>{gallery.title}</h4>
                      <p>{gallery.title}</p>
                      <div className="gallery-links">
                        <a
                          href={gallery.path}
                          data-gallery="galleryGallery"
                          className="portfokio-lightbox"
                          title="App 1">
                          <i className="fa fa-plus" />
                        </a>
                        {/* <a href="gallery-details.html" title="More Details">
                          <i className="fa fa-link" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};
