"use client";
import { useEffect, useState } from "react";
import "./header.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? "header scrolled" : "header"}>
        <Link href="/">
          <div className="logo">
            <Image
              src="/white.png"
              width={100}
              height={50}
              unoptimized
              alt="logo"
            />
            {/* CozyCabz */}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav>
          <ul className="nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="dropdown">
              <span className="dropbtn">Our Services ▾</span>
              {/* <ul className="dropdown-content">
                <li>
                  <Link href="/CorporateCarRental">Corporate Car Rental</Link>
                </li>
                <li>
                  <Link href="/TransportSolution">
                    Employee Transport Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/GcarRental">Global Car Rental</Link>
                </li>
                <li>
                  <Link href="/HotelTravelDesk">Hotel Travel Desk</Link>
                </li>
                <li>
                  <Link href="/ConferenceDelegationTravel">Conference & Delegation</Link>
                </li>
                <li>
                  <Link href="/EventTransportation">Event Transportation</Link>
                </li>
                <li>
                  <Link href="./WeddingCarRental">Wedding Car Rental</Link>
                </li>
                <li>
                  <Link href="./TravelPartnersProgram">Travel Partners Program</Link>
                </li>
                <li>
                  <Link href="./ChauffeurCarRental">Chauffeured Car Rental</Link>
                </li>
              </ul> */}
              <ul className="dropdown-content">
                <li>
                  <Link href="/CorporateCarRental">Corporate Car Rental</Link>
                </li>
                <li>
                  <Link href="/TransportSolution">
                    Employee Transport Solutions
                  </Link>
                </li>
                {/* <li>
                  <Link href="/GcarRental">Global Car Rental</Link>
                </li>
                <li>
                  <Link href="HotelTravelDesk">Hotel Travel Desk</Link>
                </li>
                <li>
                  <Link href="/ConferenceDelegationTravel">
                    Conference & Delegation
                  </Link>
                </li>
                <li>
                  <Link href="/EventTransportation">Event Transportation</Link>
                </li> */}
                <li>
                  <Link href="/GcarRental">Global Car Rental</Link>
                </li>
                <li>
                  <Link href="/HotelTravelDesk">Hotel Travel Desk</Link>
                </li>
                <li>
                  <Link href="/ConferenceDelegationTravel">
                    Conference & Delegation
                  </Link>
                </li>
                <li>
                  <Link href="/EventTransportation">Event Transportation</Link>
                </li>

                {/* <li>
                  <Link href="/SelfDrive">Self Drive</Link>
                </li>
                <li>
                  <Link href="/WeddingCarRental">Wedding Car Rental</Link>
                </li>
                <li>
                  <Link href="/self-drive-solutions">Self Drive Solutions</Link>
                </li>
                <li>
                  <Link href="/TravelPartnersProgram">
                    Travel Partners Program
                  </Link>
                </li>
                <li>
                  <Link href="/ChauffeuredCarRentalServices">
                    Chauffeured Car Rental Services
                  </Link>
                </li> */}
                <li>
                  <Link href="./WeddingCarRental">Wedding Car Rental</Link>
                </li>
                <li>
                  <Link href="./TravelPartnersProgram">
                    Travel Partners Program
                  </Link>
                </li>
                <li>
                  <Link href="./ChauffeurCarRental">
                    Chauffeured Car Rental
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#fleet">Our Fleet</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* CTA (desktop only) */}
        <div className="header-cta">
          <button className="contact-btn">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                ></path>
              </svg>
            </span>
            <span>91+ 7387382383</span>
          </button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Drawer (mobile nav) */}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        {/* Close Button */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>

        <ul>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>

          {/* Our Services - Toggle */}
          <li>
            <button
              className="submenu-toggle"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Our Services {servicesOpen ? "▴" : "▾"}
            </button>
            {servicesOpen && (
              <ul className="submenu" id="submenu">
                <li>
                  <Link href="/corporate" onClick={() => setIsOpen(false)}>
                    Corporate Car Rental
                  </Link>
                </li>
                <li>
                  <Link
                    href="/TransportSolution"
                    onClick={() => setIsOpen(false)}
                  >
                    Employee Transport Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/global" onClick={() => setIsOpen(false)}>
                    Global Car Rental
                  </Link>
                </li>
                <li>
                  <Link href="/hotel" onClick={() => setIsOpen(false)}>
                    Hotel Travel Desk
                  </Link>
                </li>
                <li>
                  <Link href="/conference" onClick={() => setIsOpen(false)}>
                    Conference & Delegation
                  </Link>
                </li>
                <li>
                  <Link href="/event" onClick={() => setIsOpen(false)}>
                    Event Transportation
                  </Link>
                </li>
                <li>
                  <Link href="/wedding" onClick={() => setIsOpen(false)}>
                    Wedding Car Rental
                  </Link>
                </li>
                <li>
                  <Link href="/partners" onClick={() => setIsOpen(false)}>
                    Travel Partners Program
                  </Link>
                </li>
                <li>
                  <Link href="/chauffeur" onClick={() => setIsOpen(false)}>
                    Chauffeured Car Rental
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/fleet" onClick={() => setIsOpen(false)}>
              Our Fleet
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

/////It is Comment ///////
