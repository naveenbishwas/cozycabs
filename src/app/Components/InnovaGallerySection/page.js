import React from "react";
import "./gallerysection.css";
import Image from "next/image";

const InnovaGallerySection = () => {
  const carImages = [
    "/innova-3.png",
    "/innova-6.png",
    "/innova-1.png",
    "/innova-10.png",
  ];

  return (
    <div>
      <section className="innova-gallery-section">
        <h1 className="innova-section-title">
          Toyota Innova Crysta <span>Rental Service</span> in Delhi
        </h1>
        <div className="innova-gallery-content">
          <div className="innova-gallery-main">
            <Image
              src="./innova-5.jpg"
              width={0}
              height={0}
              unoptimized
              alt="car-images"
            />
          </div>
          <div className="innova-gallery-grid">
            {carImages.map((icon, i) => (
              <div key={i} className="innova-gallery-thumb">
                <Image
                  src={icon}
                  alt={`car-${i}`}
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovaGallerySection;
