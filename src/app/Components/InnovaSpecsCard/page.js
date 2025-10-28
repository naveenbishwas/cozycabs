import React from "react";
import "./specs.css";
import Image from "next/image";

const InnovaSpecsCard = () => {
  const specs = [
    {
      image: "/seating-capacity.png",
      title: "Seating Capacity",
      detail: "7 + 1 Passengers",
    },
    {
      image: "/Fuel-types.png",
      title: "Fuel Type",
      detail: "Diesel & Petrol",
    },
    {
      image: "/transmission-icon.png",
      title: "Transmission",
      detail: "Manual & Automatic",
    },
    { image: "/Fully-insured.png", title: "Engine", detail: "2.4L & 2.7L" },
  ];

  return (
    <div>
      <h1 className="spec-heading">
        Why <span className="red-black">Innova</span>
      </h1>
      <section className="innova-specs-grid">
        {specs.map((item, index) => (
          <div key={index} className="innova-spec-card">
            <div className="innova-spec-icon">
              <Image
                src={item.image}
                width={50}
                height={50}
                unoptimized
                alt="trust-icons"
              />
            </div>
            <h3 className="innova-spec-title">{item.title}</h3>
            <p className="innova-spec-detail">{item.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default InnovaSpecsCard;
