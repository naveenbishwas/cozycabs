"use client";
import React from "react";
import Image from "next/image";

const Trustcc = () => {
  const items = [
    {
      title: "Trusted for Top-Quality Rides",
      desc: "Recognized across India for our commitment to excellence and premium service standards.",
      image: "/known.png",
    },
    {
      title: "Loved by Thousands of Riders",
      desc: "Consistent 5-star ratings and testimonials from thousands of satisfied customers.",
      image: "/postive.png",
    },
    {
      title: "India’s Biggest Driver Network",
      desc: "Extensive network of professional, verified drivers covering every major city in India.",
      image: "/ntework.png",
    },
    {
      title: "Safety You Can Count On",
      desc: "Background-verified partners and insured moves for complete peace of mind.",
      image: "/safe.png",
    },
    {
      title: "Nationwide Coverage",
      desc: "Strong presence with on-ground support in metros and tier-2/3 cities.",
      image: "/nationwide.png",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear quotes, no hidden charges—ever.",
      image: "/transparent.png",
    },
  ];

  return (
    <section className="trustcc">
      <div className="trustcc__container">
        <h2 className="trustcc__title">
          Why Choose <span>Cozy Cabz</span>
        </h2>

        <div className="trustcc__grid">
          {items.map((it, i) => (
            <article className="trustcc__card" key={i}>
              <div className="trustcc__icon">
                <Image
                  src={it.image}
                  width={80}
                  height={80}
                  alt={it.title}
                  unoptimized
                />
              </div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trustcc;
