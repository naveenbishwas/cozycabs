"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import "./fleet.css";
import Image from "next/image";

const faqs = [
  {
    q: "What services are included in the Corporate Program?",
    a: "We cover everything from daily office commutes and airport transfers to outstation rentals, event transportation, and monthly packages. Each account also gets a dedicated manager and customized reporting.",
  },
  {
    q: "Can we get consolidated monthly invoices?",
    a: "Yes. We provide a single monthly invoice with complete trip details, usage summaries, and expense breakdowns to make your finance team's job easier.",
  },
  {
    q: "Do you offer volume or long-term discounts?",
    a: "Absolutely. Companies with high booking volumes or long-term partnerships benefit from tailored pricing plans and flexible payment terms.",
  },
  {
    q: "How does our team manage and track bookings?",
    a: "Bookings can be made via web, app, or WhatsApp. You'll also have an account manager for urgent changes, plus dashboards to track trips and expenses in real time.",
  },
  {
    q: "Are vehicles and drivers reliable and certified?",
    a: "All vehicles are regularly serviced and fully insured. Drivers go through background verification, corporate etiquette training, and follow strict safety and punctuality standards.",
  },
];

const vehicles = [
  {
    name: "Toyota Fortuner",
    img: "/c-travel.jpeg", // replace with your image path
    link: "#",
  },
  {
    name: "Toyota Innova Crysta",
    img: "/luxury-suv.avif", // replace with your image path
    link: "#",
  },
  {
    name: "Toyota Innova Hycross",
    img: "/suv.avif", // replace with your image path
    link: "#",
  },
];

function Feature({ image, title, text }) {
  return (
    <div className="why-card">
      <div className="why-icon">
        <Image src={image} width={0} height={0} unoptimized alt={title}></Image>
      </div>
      <h3 className="why-card-title">{title}</h3>
      <p className="why-card-text">{text}</p>
    </div>
  );
}

const benefits = [
  {
    icon: "❄️",
    title: "Climate Controlled",
    text: "Premium AC systems for comfortable journeys in all weather conditions",
  },
  {
    icon: "📶",
    title: "WiFi Enabled",
    text: "Stay connected with complimentary WiFi in select premium vehicles",
  },
  {
    icon: "🎵",
    title: "Entertainment",
    text: "Premium music systems and entertainment options for your comfort",
  },
  {
    icon: "☕",
    title: "Refreshments",
    text: "Complimentary water bottles and refreshments on request",
  },
  {
    icon: "💼",
    title: "Business Ready",
    text: "Perfect for corporate travel with professional service",
  },
  {
    icon: "❤️",
    title: "Sanitized Fleet",
    text: "Vehicles thoroughly cleaned and sanitized before every trip",
  },
];

const Fleet = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Header />
      <section className="premium-section">
        <div className="premium-content">
          <span className="premium-badge">Premium Fleet Collection</span>
          <h1 className="premium-title">Premium Vehicle Rental Services</h1>
          <p className="premium-subtitle">
            Experience luxury and comfort with our premium fleet of
            well-maintained vehicles. Perfect for business travel, family trips,
            and special occasions.
          </p>

          <div className="premium-buttons">
            <a href="#booking" className="btn-primary">
              Book Now →
            </a>
            <input
              type="text"
              placeholder="Enter Pickup Location"
              className="pickup-input"
            />
          </div>

          <div className="premium-tags">
            <span>🛡️ Verified Drivers</span>
            <span>🎖️ Premium Quality</span>
            <span>⏰ 24/7 Service</span>
          </div>
        </div>

        <div className="premium-image">
          <div className="image-card">
            <span className="image-badge">Most Popular</span>
            <Image
              src="/luxury.png" // change with your image path
              alt="Toyota Innova Crysta"
              width={500}
              height={400}
              className="car-img"
              unoptimized
            />
            <div className="image-text">
              <h3>Toyota Innova Crysta</h3>
              <p>Starting from ₹18/km</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fleet-section">
        <div className="fleet-image">
          <Image
            src="/innova-9.jpg" // replace with your image path
            alt="Toyota Fortuner"
            width={600}
            height={400}
            className="fleet-car-img"
            unoptimized
          />
        </div>

        <div className="fleet-content">
          <h2 className="fleet-title">
            Welcome to ECO Mobility’s <span>Premium Fleet!</span>
          </h2>
          <p className="fleet-text">
            We offer a range of Premium Vehicles that are perfect for group
            travel. Our fleet includes Toyota Innova Hycross, Toyota Innova
            Crysta, and Toyota Fortuner, one of the most popular and comfortable
            luxury vans in India. Our Premium Vehicles are designed to provide
            you with a luxurious and comfortable journey, no matter where you’re
            headed.
          </p>
          <p className="fleet-text">
            It is equipped with plush interiors, comfortable seating, and the
            latest features to ensure that you have a memorable journey. Our
            Premium Vehicles are perfect for a variety of occasions, including
            corporate events, family trips, religious tours, and more.
          </p>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-text">
          <h2 className="luxury-title">
            Experience the Ultimate in Luxury Travel with Our Premium Vehicles
          </h2>

          <p className="luxury-para">
            Our premium vehicles, including the spacious Toyota Innova Hycross,
            Toyota Innova Crysta, and Toyota Fortuner, are tailor-made for small
            groups seeking comfort and togetherness during their journeys.
            Loaded with essential features for safety and comfort, our vehicles
            promise a secure and plush travel experience. With opulent interiors
            and plush seating, our vehicles ensure a stylish and luxurious
            journey for those who prioritize both comfort and elegance. Each of
            our luxury vehicles undergoes regular servicing and maintenance,
            adhering to the highest standards to guarantee a safe and
            comfortable journey every time you opt for our services. Our team of
            seasoned and courteous chauffeurs is dedicated to providing an
            exceptional and unforgettable ride, ensuring that your journey
            remains etched in your memory.
          </p>

          <p className="luxury-para">
            At ECO Mobility, we are dedicated to delivering top-notch car rental
            services that not only meet but surpass your expectations. Our fleet
            of luxury vehicles is meticulously designed to offer a seamless
            blend of comfort and opulence, regardless of your destination. With
            our hassle-free booking process and competitive rates, renting a
            premium vehicle from us has never been more convenient.
          </p>
        </div>

        <div className="luxury-image">
          <Image
            src="/innova-6.png" // replace with your image path
            alt="Toyota Innova Crysta"
            width={600}
            height={450}
            className="luxury-car-img"
            unoptimized
          />
        </div>
      </section>

      <section className="benefits-section">
        <span className="benefits-badge">Premium Amenities</span>
        <h2 className="benefits-title">Additional Benefits</h2>
        <p className="benefits-subtitle">
          Enjoy these exclusive amenities designed to enhance your travel
          experience
        </p>

        <div className="benefits-grid">
          {benefits.map((item, i) => (
            <div key={i} className="benefit-card">
              <div className="benefit-icon">{item.icon}</div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vehicles-section">
        <p className="vehicles-subtitle">Luxury • Comfort • Convenience</p>
        <h2 className="vehicles-title">Premium Vehicles</h2>

        <div className="vehicles-grid">
          {vehicles.map((vehicle, i) => (
            <div key={i} className="vehicle-card">
              <div className="vehicle-img">
                <Image
                  src={vehicle.img}
                  alt={vehicle.name}
                  width={400}
                  height={260}
                  unoptimized
                />
              </div>
              <div className="vehicle-content">
                <h3 className="vehicle-name">{vehicle.name}</h3>
                <a href={vehicle.link} className="vehicle-link">
                  Click here →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-section-df">
          <div className="booking-header">
            <span className="booking-badge">Get Started</span>
            <h2 className="booking-title">Book Your Premium Ride</h2>
            <p className="booking-subtitle">
              Fill in your details and we'll get back to you with the best quote
            </p>
          </div>

          <form className="booking-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="+91 98765-43210" required />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label>Select Vehicle *</label>
                <select required>
                  <option value="">Choose vehicle type</option>
                  <option value="innova">Toyota Innova</option>
                  <option value="crysta">Toyota Innova Crysta</option>
                  <option value="fortuner">Toyota Fortuner</option>
                </select>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Pickup Location *</label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  required
                />
              </div>
              <div className="form-group">
                <label>Drop-off Location *</label>
                <input
                  type="text"
                  placeholder="Enter drop-off location"
                  required
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Pickup Date *</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>Pickup Time *</label>
                <input type="time" required />
              </div>
            </div>

            <div className="form-group">
              <label>Trip Type *</label>
              <select required>
                <option value="">Select trip type</option>
                <option value="oneway">One Way</option>
                <option value="roundtrip">Round Trip</option>
                <option value="hourly">Hourly Rental</option>
              </select>
            </div>

            <div className="form-group">
              <label>Special Requirements</label>
              <textarea placeholder="Any special requirements or requests..." />
            </div>

            <div className="sub-btn">
              <button type="submit" className="btn-submit">
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="why">
        <div className="why-wrap">
          <header className="why-head">
            <h2>What Makes Us the Best Choice</h2>
            <p>
              Our commitment to excellence and customer satisfaction sets us
              apart. Here’s why thousands of customers trust us with their
              transportation needs.
            </p>
          </header>

          {/* Top row */}
          <div className="why-grid">
            <Feature
              image="/known.png"
              title="Well Known for Quality Services"
              text="Recognized across India for our commitment to excellence and premium service standards."
            />
            <Feature
              image="/postive.png"
              title="Earned Positive Reviews from All Clients"
              text="Consistent 5-star ratings and testimonials from thousands of satisfied customers."
            />
            <Feature
              image="/ntework.png"
              title="The Largest Network of Drivers"
              text="Extensive network of professional, verified drivers covering every major city in India."
            />
          </div>

          {/* Optional second row — uncomment if you want 3 more cards */}
          <div className="why-grid">
            <Feature
              image="/safe.png"
              title="Safe & Secure"
              text="Background-verified partners and insured moves for complete peace of mind."
            />
            <Feature
              image="/nationwide.png"
              title="Nationwide Coverage"
              text="Strong presence with on-ground support in metros and tier-2/3 cities."
            />
            <Feature
              image="/transparent.png"
              title="Transparent Pricing"
              text="Clear quotes, no hidden charges—ever."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="innova-faq-section">
        <div className="innova-faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the most common questions...</p>
        </div>
        <div>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className={`innova-faq-item ${open ? "open" : ""}`}>
                <button
                  onClick={() => toggle(i)}
                  className="innova-faq-question"
                >
                  <span>{item.q}</span>
                  <svg
                    className={`innova-faq-icon ${open ? "rotated" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div className={`innova-faq-answer ${open ? "show" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default Fleet;
