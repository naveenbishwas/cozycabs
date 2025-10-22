import React from "react";
import "./gallerysection.css";
import Image from "next/image";

const InnovaGallerySection = ({ city = "Delhi" }) => {
  // 👈 added city prop with default
  const carImages = [
    "/innova-car2.jpeg",
    "/innova-car3.jpeg",
    "/innova-car4.jpeg",
    "/innova-car5.jpeg",
  ];

  return (
    <section className="innova-gallery-section">
      <h1 className="innova-section-title">
        Toyota Innova Crysta <span>Rental Service</span> in {city}
      </h1>

      <div className="innova-gallery-content">
        <div className="innova-gallery-main">
          <Image
            src="/innova-car1.jpeg"
            width={0}
            height={0}
            unoptimized
            alt={`Innova car rental in ${city}`}
          />
        </div>

        <div className="innova-gallery-grid">
          {carImages.map((icon, i) => (
            <div key={i} className="innova-gallery-thumb">
              <Image
                src={icon}
                alt={`car-${i}-${city}`}
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovaGallerySection;
