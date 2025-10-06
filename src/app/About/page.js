import React from "react";
import "./about.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const About = () => {
  return (
    <>
      <Header />
      <section className="info-page">
        <h1>About Us</h1>
        <p>
          <b>Cozy Cabz</b> is India’s trusted cab rental platform offering
          reliable, comfortable, and affordable rides across 250+ cities. We
          specialize in premium MPV and SUV rentals for families, corporates,
          and travellers.
        </p>
        <p>
          From airport transfers to long-distance journeys, our mission is to
          make every trip safe, smooth, and hassle-free. With 10+ years of
          experience, 1000+ daily cabs, and 5000+ happy customers, Cozy Cabz
          continues to lead in quality service and transparent pricing.
        </p>
        <h2>Our Vision</h2>
        <p>
          To redefine intercity and intracity travel through technology,
          comfort, and trustworthy chauffeur-driven experiences.
        </p>
        <h2>Why Choose Us</h2>
        <ul>
          <li>✔ Professional, verified chauffeurs</li>
          <li>✔ Wide fleet of vehicles: Sedans, SUVs, Innovas</li>
          <li>✔ Transparent billing with no hidden charges</li>
          <li>✔ 24/7 customer support</li>
        </ul>
        <p className="info-footer">
          We drive people, not just cars — <b>Cozy Cabz</b> makes every ride
          memorable.
        </p>
      </section>
      <SiteFooter />
    </>
  );
};

export default About;
