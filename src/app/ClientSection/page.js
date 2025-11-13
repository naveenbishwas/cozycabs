// components/ClientsSection.jsx
import Image from "next/image";
import "./clientSection.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

export default function ClientsSection() {
  const clients = [
    { name: "BrahMos Aerospace", img: "/BRAH.png" },
    { name: "Raphe MPhibr", img: "/RAPHE.png" },
    { name: "Nasm Petro Innovations", img: "/NASM.png" },
    { name: "Akumentis Healthcare", img: "/AKUMENTIS.png" },
    { name: "Travel Food Services", img: "/TRAVEL.png" },
    { name: "Agrim Wholesale", img: "/AGRIM.jpeg" },
    // { name: "Multistrato Capital Advisors", img: "/MULTISTRATO.png" },
    { name: "Param Capital", img: "/PARAM.jpeg" },
    { name: "Da Open World", img: "/DA.jpeg" },
    // { name: "Pure & Cure Healthcare", img: "/PUREANDCURE.png" },
    { name: "RTM Healthcare", img: "/RTM.jpeg" },
    { name: "GH Energy", img: "/GH.jpg" },
    { name: "VERDEEN CHEMICALS PRIVATE LIMITED", img: "/VERDEEN.jpeg" },
  ];

  return (
    <>
      <Header />

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>CozyCabz Client</h1>
          <p>
            Proudly serving leading corporate clients and organizations, we
            focus on delivering punctuality, professionalism, and a premium
            travel experience for every journey.
          </p>
        </div>
      </section>

      <section className="clients-wrapper">
        <h2 className="clients-heading">Our Clients</h2>

        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.name} className="client-card">
              <Image
                src={client.img}
                width={200}
                height={80}
                alt={client.name}
                className="client-logo"
              />
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
