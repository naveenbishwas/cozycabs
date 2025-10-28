// "use client";
// import React from "react";
// import "./banner.css";
// import Image from "next/image";

// export default function InnovaHeroSection() {
//   return (
//     <section className="hero-section">
//       <div className="overlay">
//         <div className="content">
//           <h1>Innova Car Rental in Chennai</h1>
//           <p>
//             Experience premium comfort and reliability with India's most trusted
//             MPV. Perfect for family trips, corporate travel, and special
//             occasions.
//           </p>

//           <div className="features">
//             <div className="feature-box">
//               <Image
//                 src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
//                 alt="Seater"
//                 width={0}
//                 height={0}
//                 unoptimized
//               />
//               <span>7+1 Seater</span>
//             </div>
//             <div className="feature-box">
//               <Image
//                 src="https://cdn-icons-png.flaticon.com/512/1040/1040231.png"
//                 alt="Insured"
//                 width={0}
//                 height={0}
//                 unoptimized
//               />
//               <span>Fully Insured</span>
//             </div>
//             <div className="feature-box">
//               <Image
//                 src="https://cdn-icons-png.flaticon.com/512/64/64463.png"
//                 alt="24/7"
//                 width={0}
//                 height={0}
//                 unoptimized
//               />
//               <span>24/7 Available</span>
//             </div>
//           </div>

//           <div className="cta-buttons">
//             <a href="tel:7387382383" className="call-btn">
//               📞 Call: 7387382383
//             </a>
//             <a href="#" className="book-btn">
//               Book Online →
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "./banner.css";
import Image from "next/image";

export default function InnovaHeroSection() {
  const pathname = usePathname();

  // Extract last part of URL (e.g. /InnovaMumbai → Mumbai)
  const city =
    pathname
      ?.split("Innova")[1]
      ?.replace(/[-_]/g, " ") // handle cases like Innova-NewYork
      ?.trim() || "City";

  // Capitalize first letter
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="content">
          <h1>Innova Car Rental in {formattedCity}</h1>
          <p>
            Experience premium comfort and reliability with India's most trusted
            MPV. Perfect for family trips, corporate travel, and special
            occasions.
          </p>

          <div className="features">
            <div className="feature-box">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
                alt="Seater"
                width={20}
                height={20}
                unoptimized
              />
              <span>7+1 Seater</span>
            </div>
            <div className="feature-box">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1040/1040231.png"
                alt="Insured"
                width={20}
                height={20}
                unoptimized
              />
              <span>Fully Insured</span>
            </div>
            <div className="feature-box">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/64/64463.png"
                alt="24/7"
                width={20}
                height={20}
                unoptimized
              />
              <span>24/7 Available</span>
            </div>
          </div>

          <div className="cta-buttons">
            <a href="tel:7387382383" className="call-btn">
              📞 Call: 7387382383
            </a>
            <a href="#" className="book-btn">
              Book Online →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
