"use client";

import Header from "@/app/Components/Header/page";
import SiteFooter from "@/app/Components/Footer/page";
import "./servicePage.css";
import Image from "next/image";
import { FaBuilding, FaUsers, FaBus, FaMapMarkerAlt } from "react-icons/fa";
import CityForm from "@/app/Components/CityForm/page";
import CityBestChoice from "@/app/Components/CityBestChoice/page";
import NumberCounter from "@/app/Components/NumberCounter/page";
import { useParams } from "next/navigation";
import serviceRouteData from "../../data/ourServiceRoutes.json";

export default function ServiceClient() {
  const { services } = useParams();

  const serviceData =
    serviceRouteData.find((item) => item.route === services) || {};

  const formattedTitle = serviceData?.title
    ?.split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const heroTitle = serviceData?.route
    ?.split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div>
      <Header />

      <section className="hero-section">
        <div className="hero-img">
          <Image
            src={serviceData?.background || "/fallback.jpg"}
            alt="Background"
            fill
            priority
            className="hero-image"
          />
          <div className="hero-content">
            <h1>{heroTitle}</h1>
            <p>
              Reliable and comfortable transport solutions for your workforce.
            </p>
          </div>
        </div>
      </section>

      <NumberCounter />

      {/* CONTENT SECTION */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/service-car-img.png"
              alt="Happy employees commuting"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>

        <div className="ride-content">
          <h2>{formattedTitle}</h2>

          {serviceData?.description?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </section>

      <CityBestChoice />
      <CityForm />
      <SiteFooter />
    </div>
  );
}
