import React, { useState } from "react";

export const Filter = () => {
  const [filter, setFilter] = useState("All");
  return (
    <ul id="portfolio-flters">
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
  );
};
