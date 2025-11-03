"use client";
import React from "react";
import "./contact.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const Contact = () => {
  return (
    <>
      <head>
        <title>
          Contact CozyCabz | Get in Touch for Bookings & Partnerships
        </title>
        <meta
          name="description"
          content="Have a question or need a ride? Contact CozyCabz for bookings, corporate travel solutions, or partnerships. Our team is here to assist you 24/7."
        />
      </head>

      <Header />
      {/* ---- Hero Section ---- */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you — let’s start a conversation.</p>
        </div>
      </section>

      {/* ---- Main Contact Section ---- */}
      <section className="contact-wrapper">
        <h2>Let’s Start a Conversation</h2>
        <p className="intro-text">
          Ask how we can help you make your travel easier, safer, and more
          reliable.
        </p>

        <div className="contact-main">
          {/* ---- Left Column ---- */}
          <div className="contact-info">
            <h4>Ask how we can help you:</h4>
            <ul>
              <li>
                <strong>Book your ride with ease</strong>
                <br />
                Request a personalized quote or schedule a call to discuss your
                travel requirements.
              </li>
              <li>
                <strong>Corporate & Event Travel</strong>
                <br />
                Learn how Cozy Cabz helps businesses manage large-scale travel
                efficiently.
              </li>
              <li>
                <strong>Partner with Us</strong>
                <br />
                Collaborate as a travel partner, affiliate, or driver network
                member.
              </li>
            </ul>
          </div>

          {/* ---- Right Column (Form) ---- */}
          <form className="contact-form">
            <p className="note">Please note: all fields are required.</p>
            <div className="form-group">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default Contact;
