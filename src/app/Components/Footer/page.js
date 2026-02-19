"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";
import { usePathname } from "next/navigation";


export default function SiteFooter() {
  const [showInnova, setShowInnova] = useState(false);
  const [showMoreCities, setShowMoreCities] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);
  
const pathname = usePathname();

// Match URL like: /car-rental-in-delhi
const cityMatch = pathname.match(/car-rental-in-([a-z-]+)/);

const currentCity = cityMatch
  ? cityMatch[1].replace(/-/g, " ")
  : null;

  return (
    <footer className="site-footer">
      <div className="footer__accent"></div>
      <div className="footer__container">
        <div className="footer__grid">
          {/* ---- Brand ---- */}
          <div className="footer__brand">
            <Image
              src="/Cozy-cabz-logo.png"
              width={0}
              height={0}
              unoptimized
              alt="logo"
            />
            <p className="brand__about">
              India&apos;s leading car rental service with 10+ years of
              experience. We provide safe, reliable, and comfortable
              transportation across 250+ cities.
            </p>

            <ul className="footer__contacts">
              <span className="phone-number">
                <li>
                  <Link href="tel:+919220994735">+91 92209 94735</Link>
                </li>
                |
                <li>
                  <Link href="tel:+919899132460">+91 9899132460</Link>
                </li>
              </span>
              <li>
                <Link href="mailto:support@cozycabz.com">
                  support@cozycabz.com
                </Link>
              </li>
              <li>
                Address: 2nd Floor, Plot No-37, behind HDFC Bank, Block A,
                Sector 12 Dwarka, New Delhi, Delhi, 110078
              </li>
            </ul>

            <div className="footer__social">
              <Link
                target="_blank"
                href="https://www.facebook.com/people/Cozy-Cabz/pfbid0PokzmupuYqiFWTAb2qCavXDsi5wJeuGLyLFnkf6h8o39cmy8gNk4LZvJk34iUWHol/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </Link>

              <Link target="_blank" href="https://x.com/CabzCar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </Link>

              <Link target="_blank" href="https://www.instagram.com/cozycabz_/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </Link>

              <Link
                target="_blank"
                href="https://www.google.com/maps/place/Book+Taxi+Online+Anytime+In+Delhi+-+COZY+CABZ/@28.6039104,77.026682,15z/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ---- Services ---- */}
          <nav className="footer__col">
            <h4>Services</h4>
            <ul className="linklist">
              <li>
                <Link href="/our-services/corporate-car-rental">
                  Corporate Car Rental
                </Link>
              </li>

              <li>
                <Link href="/our-services/transport-solution">
                  Employee Transport Solutions
                </Link>
              </li>

              <li>
                <Link href="/our-services/hotel-travel-desk">
                  Hotel Travel Desk
                </Link>
              </li>

              <li>
                <Link href="/our-services/conference-delegation-travel">
                  Conference & Delegation
                </Link>
              </li>

              <li>
                <Link href="/our-services/event-transportation">
                  Event Transportation
                </Link>
              </li>

              <li>
                <Link href="/our-services/wedding-car-rental">
                  Wedding Car Rental
                </Link>
              </li>

              <li>
                <Link href="/our-services/travel-partners-program">
                  Travel Partners Program
                </Link>
              </li>

              <li>
                <Link href="/our-services/chauffeur-car-rental">
                  Chauffeured Car Rental
                </Link>
              </li>
            </ul>
          </nav>

          {/* ---- City Guides ---- */}
          <div className="footer__col city-col">
            <h4>City Guides</h4>

            <div className="footer__toggle">
              <button
                onClick={() => setShowInnova(false)}
                className={!showInnova ? "active" : ""}
              >
                City Guides
              </button>
              <button
                onClick={() => setShowInnova(true)}
                className={showInnova ? "active" : ""}
              >
                Innova Car
              </button>
            </div>

            {/* --- Normal City Guides --- */}
            {!showInnova ? (
              <>
                <div className="city-lists">
                  <div className="city-column">
                    <li>
                      <Link href="/car-rental-in-mumbai">
                        Car Rental in Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-delhi">
                        Car Rental in Delhi
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-bangalore">
                        Car Rental in Bangalore
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-chennai">
                        Car Rental in Chennai
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-hyderabad">
                        Car Rental in Hyderabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-pune">Car Rental in Pune</Link>
                    </li>
                  </div>

                  <div className="city-column">
                    <li>
                      <Link href="/car-rental-in-kolkata">
                        Car Rental in Kolkata
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-ahmedabad">
                        Car Rental in Ahmedabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-jaipur">
                        Car Rental in Jaipur
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-chandigarh">
                        Car Rental in Chandigarh
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-lucknow">
                        Car Rental in Lucknow
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental-in-indore">
                        Car Rental in Indore
                      </Link>
                    </li>
                  </div>
                </div>

                {showMoreCities && (
                  <div className="city-lists">
                    <div className="city-column">
                      <li>
                        <Link href="/car-rental-in-surat">
                          Car Rental in Surat
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-in-coimbatore">
                          Car Rental in Coimbatore
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-in-vadodara">
                          Car Rental in Vadodara
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-in-rajkot">
                          Car Rental in Rajkot
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-in-kanpur">
                          Car Rental in Kanpur
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-in-mysore">
                          Car Rental in Mysore
                        </Link>
                      </li>
                    </div>

                    <div className="city-column">
                      <li>
                        <Link href="/car-rental-in-nagpur">
                          Car Rental in Nagpur
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-in-vijayawada">
                          Car Rental in Vijayawada
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-in-bhopal">
                          Car Rental in Bhopal
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-in-patna">
                          Car Rental in Patna
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-in-guwahati">
                          Car Rental in Guwahati
                        </Link>
                      </li>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* --- Innova City Guides --- */}
                <div className="city-lists">
                  <div className="city-column">
                    <li>
                      <Link href="/innova-car-rental-in-mumbai">
                        Innova Car Rental in Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-delhi">
                        Innova Car Rental in Delhi
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-bangalore">
                        Innova Car Rental in Bangalore
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-chennai">
                        Innova Car Rental in Chennai
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-hyderabad">
                        Innova Car Rental in Hyderabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-pune">
                        Innova Car Rental in Pune
                      </Link>
                    </li>
                  </div>

                  <div className="city-column">
                    <li>
                      <Link href="/innova-car-rental-in-kolkata">
                        Innova Car Rental in Kolkata
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-ahmedabad">
                        Innova Car Rental in Ahmedabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-jaipur">
                        Innova Car Rental in Jaipur
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-chandigarh">
                        Innova Car Rental in Chandigarh
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-lucknow">
                        Innova Car Rental in Lucknow
                      </Link>
                    </li>
                    <li>
                      <Link href="/innova-car-rental-in-indore">
                        Innova Car Rental in Indore
                      </Link>
                    </li>
                  </div>
                </div>

                {showMoreCities && (
                  <div className="city-lists">
                    <div className="city-column">
                      <li>
                        <Link href="/innova-car-rental-in-surat">
                          Innova Car Rental in Surat
                        </Link>
                      </li>
                      <li>
                        <Link href="/innova-car-rental-in-coimbatore">
                          Innova Car Rental in Coimbatore
                        </Link>
                      </li>
                      <li>
                        <Link href="/innova-car-rental-in-vadodara">
                          Innova Car Rental in Vadodara
                        </Link>
                      </li>
                      <li>
                        <Link href="/innova-car-rental-in-rajkot">
                          Innova Car Rental in Rajkot
                        </Link>
                      </li>
                      <li>
                        <Link href="/innova-car-rental-in-kanpur">
                          Innova Car Rental in Kanpur
                        </Link>
                      </li>
                      <li>
                        <Link href="/innova-car-rental-in-mysore">
                          Innova Car Rental in Mysore
                        </Link>
                      </li>
                    </div>

                    <div className="city-column">
                      <li>
                        <Link href="/innova-car-rental-in-nagpur">
                          Innova Car Rental in Nagpur
                        </Link>
                      </li>
                      <li>
                        <Link href="/innova-car-rental-in-vijayawada">
                          Innova Car Rental in Vijayawada
                        </Link>
                      </li>
                      <li>
                        <Link href="/innova-car-rental-in-bhopal">
                          Innova Car Rental in Bhopal
                        </Link>
                      </li>
                      <li>
                        <Link href="/innova-car-rental-in-patna">
                          Innova Car Rental in Patna
                        </Link>
                      </li>
                      <li>
                        <Link href="/innova-car-rental-in-guwahati">
                          Innova Car Rental in Guwahati
                        </Link>
                      </li>
                    </div>
                  </div>
                )}
              </>
            )}

            <button
              className="show-more-btn"
              onClick={() => setShowMoreCities(!showMoreCities)}
            >
              {showMoreCities ? "Show Less Cities ↑" : "Show More Cities ↓"}
            </button>
          </div>
        </div>


{/* ---- SEO Keywords Section (Only on City Pages) ---- */}
{currentCity && (
  <div className="footer__seo">
    <button
      className="seo-toggle-btn"
      onClick={() => setShowKeywords(!showKeywords)}
    >
      {showKeywords
        ? `Hide ${currentCity} Searches ↑`
        : `Popular Searches in ${currentCity} ↓`}
    </button>

    {showKeywords && (
      <div className="seo-content">
        {[
          `Car Rental ${currentCity}`,
          `Car Hire ${currentCity}`,
          `Cab Service in ${currentCity}`,
          `${currentCity} Taxi Service`,
          `Best Cab Service in ${currentCity}`,
          `Outstation Cabs from ${currentCity}`,
          `One Way Taxi ${currentCity}`,
          `Luxury Car Rental ${currentCity}`,
          `Car Rental ${currentCity} Airport`,
          `Monthly Car Rental ${currentCity}`,
          `Car Rental ${currentCity} With Driver`,
          `SUV Rental ${currentCity}`,
          `Wedding Car Rental ${currentCity}`,
          `Intercity Cab Service ${currentCity}`,
          `Private Taxi Service ${currentCity}`,
          `Taxi Booking ${currentCity}`,
          `Online Cab Booking ${currentCity}`,
          `Car Rental in ${currentCity} NCR`,
          `Premium Car Rental ${currentCity}`,
          `Chauffeur Driven Car Rental ${currentCity}`,
          `Outstation Taxi Service ${currentCity}`,
          `Car on Rent in ${currentCity}`,
          `Car Rental Services in ${currentCity}`,
          `Car Hire in ${currentCity} with Driver`,
          `Full Day Car Rental ${currentCity}`,
          `Long Term Car Rental ${currentCity}`,
          `Car Rental Rates in ${currentCity}`,
          `Best Taxi in ${currentCity}`,
          `Local Cab Service in ${currentCity}`,
          `Car Booking ${currentCity}`,
        ].map((keyword, index) => (
          <h5 key={index}>{keyword}</h5>
        ))}
      </div>
    )}
  </div>
)}



        <hr className="footer__rule" />
        {/* footer */}
        <div className="footer__bottom">
          <p className="copyright">© 2024 CozyCabz. All rights reserved.</p>
          <ul className="footer__legal">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
            </li>
            <li>
              <Link href="/terms-&-condition">Terms of Service</Link>
            </li>
            <li>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>

        <p id="in-mob" className="copyright">
          © 2024 CozyCabz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
