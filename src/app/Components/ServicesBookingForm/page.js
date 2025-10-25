"use client";

import React, { useState } from "react";
import "./ServiceBookingForm.css";

const ServiceBookingForm = () => {
  const [selectedService, setSelectedService] = useState("");
  const [vehicleOptions, setVehicleOptions] = useState([]);

  const serviceToVehicles = {
    Premium: [
      "Toyota Fortuner",
      "Toyota Innova Crysta",
      "Toyota Innova Hycross",
    ],
    Luxury: [
      "Audi A6",
      "Audi Q7",
      "BMW 5 Series",
      "Mercedes GLS",
      "Mercedes-Benz E Class",
    ],
    Economy: ["Honda City", "Maruti Ciaz", "Maruti Swift Dzire"],
    "Bus & Coach": [
      "45 Seater Volvo",
      "Mercedes Sprinter",
      "Toyota Commuter",
      "Toyota Vellfire",
      "Toyota Ventury (V Class)",
    ],
  };

  const handleServiceChange = (e) => {
    const service = e.target.value;
    setSelectedService(service);
    setVehicleOptions(serviceToVehicles[service] || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const travellers = form.travellers.value.trim();
    const city = form.city.value.trim();

    // Basic field validations
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cityRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
      alert("Name must contain only alphabets.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (isNaN(travellers) || travellers <= 0) {
      alert("Number of travellers must be a valid number greater than 0.");
      return;
    }

    if (!cityRegex.test(city)) {
      alert("City name must contain only alphabets.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
    setSelectedService("");
    setVehicleOptions([]);
  };

  return (
    <section className="quote-section section-container" id="quote-section">
      <div className="quote-info">
        <h2>
          Request a <span>Custom Quote</span>
        </h2>
        <p>
          Tell us about your employee transport requirements and we'll provide a
          tailored solution with competitive pricing.
        </p>
        <ul className="benefits-list">
          <li>Free consultation and route assessment</li>
          <li>Customized pricing based on your needs</li>
          <li>Flexible contracts with no hidden fees</li>
          <li>24/7 support and real-time tracking</li>
        </ul>
        <button className="tag-btn">Get Started Today</button>
      </div>

      <div className="quote-form">
        <h3>Get Your Quote</h3>
        <p>
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email ID"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              maxLength="10"
              required
            />

            {/* Service Type Dropdown */}
            <select
              required
              onChange={handleServiceChange}
              value={selectedService}
              name="serviceType"
            >
              <option value="">Select Service Type</option>
              <option value="Premium">Premium</option>
              <option value="Luxury">Luxury</option>
              <option value="Economy">Economy</option>
              <option value="Bus & Coach">Bus & Coach</option>
            </select>

            {/* Vehicle Type Dropdown */}
            <select
              required
              name="vehicleType"
              disabled={!vehicleOptions.length}
            >
              <option value="">
                {vehicleOptions.length
                  ? "Select Vehicle Type"
                  : "Select Service First"}
              </option>
              {vehicleOptions.map((vehicle, index) => (
                <option key={index} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select>

            <input
              type="number"
              name="travellers"
              placeholder="No. of Travellers"
              required
              min="1"
            />
            <input
              type="text"
              name="city"
              placeholder="Enter City Name"
              required
            />
            <input type="date" name="date" placeholder="dd/mm/yyyy" required />

            <textarea
              name="notes"
              placeholder="Any specific requirement / itinerary"
              rows="4"
            />

            <button type="submit" className="primary-btn">
              Request Quote →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ServiceBookingForm;
