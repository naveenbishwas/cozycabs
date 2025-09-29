"use client";
import React from "react";

const Howrent = () => {
  return (
    <section className="howrent" aria-labelledby="howrent-title">
      <div className="howrent__container">
        <h2 id="howrent-title">Easy Booking Process</h2>
        <p className="howrent__intro">
          Booking your ride with Cozy Cabz is quick, simple, and completely hassle-free. Just follow four easy steps:
        </p>

        <ul className="howrent__list">
          <li className="howrent__item">
            <h3>Contact Our Team</h3>
            <p>Reach out to us or register on our website to start your booking process quickly.</p>
          </li>

          <li className="howrent__item">
            <h3>Share Your Details</h3>
            <p>Provide your pickup & drop points, travel date, time, and trip type (local, outstation, or airport).</p>
          </li>

          <li className="howrent__item">
            <h3>Select Car Model</h3>
            <p>Choose from economy cars, SUVs, premium sedans, or luxury taxis, and get your fare instantly.</p>
          </li>

          <li className="howrent__item">
            <h3>Enjoy a Stress-Free Ride</h3>
            <p>Sit back, unwind, and let our driver handle traffic while you travel in comfort.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Howrent;
