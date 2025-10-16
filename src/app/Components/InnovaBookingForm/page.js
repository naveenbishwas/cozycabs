import React, { useEffect, useState } from "react";
import "./booking.css";

const InnovaBookingForm = () => {
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formatedDate = today.toISOString().split("T")[0];
    setMinDate(formatedDate);
  });
  return (
    <div>
      <section id="booking" className="innova-booking-section">
        <div className="innova-booking-header">
          <h2>Book Your Toyota Innova</h2>
          <p>
            Fill in the details below and we'll get back with the best quote
          </p>
        </div>
        <form className="innova-booking-form">
          <div className="innova-form-grid">
            <div>
              <label>Pickup Location</label>
              <input type="text" placeholder="Enter pickup location" />
            </div>
            <div>
              <label>Drop Location</label>
              <input type="text" placeholder="Enter drop location" />
            </div>
          </div>
          <div className="innova-form-grid">
            <div>
              <label>Pickup Date</label>
              <input type="date" min={minDate} />
            </div>
            <div>
              <label>Pickup Time</label>
              <input type="time" />
            </div>
          </div>
          <div className="innova-form-grid">
            <div>
              <label>Return Date</label>
              <input type="date" min={minDate} />
            </div>
            <div>
              <label>Return Time</label>
              <input type="time" />
            </div>
          </div>
          <div className="innova-form-grid">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 9999999999" />
            </div>
            <div>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label>Special Requirements</label>
              <textarea placeholder="Any special requirements..." />
            </div>
          </div>

          <div className="innova-cta-buttons">
            <button type="submit" className="innova-btn-primary">
              Get Instant Quote
            </button>
            <a href="tel:+919999999999" className="innova-btn-outline">
              📞 Call Now
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default InnovaBookingForm;
