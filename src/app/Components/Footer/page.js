"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function SiteFooter() {
  const [showInnova, setShowInnova] = useState(false);
  const [showMoreCities, setShowMoreCities] = useState(false);

  return (
    <footer className="site-footer">
      <div className="footer__accent"></div>
      <div className="footer__container">
        <div className="footer__grid">
          {/* ---- Brand ---- */}
          <div className="footer__brand">
            <Image
              src="/white.png"
              alt="CozyCabz Logo"
              width={150}
              height={50}
            />
            <p className="brand__about">
              India&apos;s leading car rental service with 10+ years of
              experience. We provide safe, reliable, and comfortable
              transportation across 250+ cities.
            </p>
            <ul className="footer__contacts">
              <li>
                <Link href="tel:+919220994735">+91 92209 94735</Link>
              </li>
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
              <Link target="_blank" href="#">
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
              <Link target="_blank" href="#">
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
              <Link target="_blank" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/Book+Taxi+Online+Anytime+In+Delhi+-+COZY+CABZ/@28.6039104,77.026682,15z/data=!4m5!3m4!1s0x0:0x64829159cb682a12!8m2!3d28.6039104!4d77.026682"
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
                <Link href="/ConferenceDelegationTravel">
                  Conference & Delegation
                </Link>
              </li>
              <li>
                <Link href="/EventTransportation">Event Transportation</Link>
              </li>
              <li>
                <Link href="/WeddingCarRental">Wedding Car Rental</Link>
              </li>
              <li>
                <Link href="/TravelPartnersProgram">
                  Travel Partners Program
                </Link>
              </li>
              <li>
                <Link href="/ChauffeurCarRental">Chauffeured Car Rental</Link>
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

            {/* --- 2 Columns --- */}
            {!showInnova ? (
              <>
                <div className="city-lists">
                  <div className="city-column">
                    <li>
                      <Link href="/InMumbai">Car Rental in Mumbai</Link>
                    </li>
                    <li>
                      <Link href="/InDelhi">Car Rental in Delhi</Link>
                    </li>
                    <li>
                      <Link href="/InBangalore">Car Rental in Bangalore</Link>
                    </li>
                    <li>
                      <Link href="/in-chennai">Car Rental in Chennai</Link>
                    </li>
                    <li>
                      <Link href="/in-hyderabad">Car Rental in Hyderabad</Link>
                    </li>
                    <li>
                      <Link href="/InPune">Car Rental in Pune</Link>
                    </li>
                  </div>
                  <div className="city-column">
                    <li>
                      <Link href="/InKolkata">Car Rental in Kolkata</Link>
                    </li>
                    <li>
                      <Link href="/InAhmedabad">Car Rental in Ahmedabad</Link>
                    </li>
                    <li>
                      <Link href="/InJaipur">Car Rental in Jaipur</Link>
                    </li>
                    <li>
                      <Link href="/InChandigarh">Car Rental in Chandigarh</Link>
                    </li>
                    <li>
                      <Link href="/InLucknow">Car Rental in Lucknow</Link>
                    </li>
                    <li>
                      <Link href="/InIndore">Car Rental in Indore</Link>
                    </li>
                  </div>
                </div>

                {showMoreCities && (
                  <div className="city-lists">
                    <div className="city-column">
                      <li>
                        <Link href="/InSurat">Car Rental in Surat</Link>
                      </li>
                      <li>
                        <Link href="/InCoimbatore">
                          Car Rental in Coimbatore
                        </Link>
                      </li>
                      <li>
                        <Link href="/InVadodara">Car Rental in Vadodara</Link>
                      </li>
                      <li>
                        <Link href="/InRajkot">Car Rental in Rajkot</Link>
                      </li>
                      <li>
                        <Link href="/InKanpur">Car Rental in Kanpur</Link>
                      </li>
                      <li>
                        <Link href="/InMysore">Car Rental in Mysore</Link>
                      </li>
                    </div>
                    <div className="city-column">
                      <li>
                        <Link href="/InNagpur">Car Rental in Nagpur</Link>
                      </li>
                      <li>
                        <Link href="/InVijayawada">
                          Car Rental in Vijayawada
                        </Link>
                      </li>
                      <li>
                        <Link href="/InBhopal">Car Rental in Bhopal</Link>
                      </li>
                      <li>
                        <Link href="/InPatna">Car Rental in Patna</Link>
                      </li>
                      <li>
                        <Link href="/InGuwahati">Car Rental in Guwahati</Link>
                      </li>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="city-lists">
                  <div className="city-column">
                    <li>
                      <Link href="/InnovaMumbai">
                        Innova Car Rental in Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaDelhi">
                        Innova Car Rental in Delhi
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaBangalore">
                        Innova Car Rental in Bangalore
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaChennai">
                        Innova Car Rental in Chennai
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaHyderabad">
                        Innova Car Rental in Hyderabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaPune">Innova Car Rental in Pune</Link>
                    </li>
                  </div>
                  <div className="city-column">
                    <li>
                      <Link href="/InnovaKolkata">
                        Innova Car Rental in Kolkata
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaAhmedabad">
                        Innova Car Rental in Ahmedabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaJaipur">
                        Innova Car Rental in Jaipur
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaChandigarh">
                        Innova Car Rental in Chandigarh
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaLucknow">
                        Innova Car Rental in Lucknow
                      </Link>
                    </li>
                    <li>
                      <Link href="/InnovaIndore">
                        Innova Car Rental in Indore
                      </Link>
                    </li>
                  </div>
                </div>

                {showMoreCities && (
                  <div className="city-lists">
                    <div className="city-column">
                      <li>
                        <Link href="/InnovaSurat">
                          Innova Car Rental in Surat
                        </Link>
                      </li>
                      <li>
                        <Link href="/InnovaCoimbatore">
                          Innova Car Rental in Coimbatore
                        </Link>
                      </li>
                      <li>
                        <Link href="/InnovaVadodara">
                          Innova Car Rental in Vadodara
                        </Link>
                      </li>
                      <li>
                        <Link href="/InnovaRajkot">
                          Innova Car Rental in Rajkot
                        </Link>
                      </li>
                      <li>
                        <Link href="/InnovaKanpur">
                          Innova Car Rental in Kanpur
                        </Link>
                      </li>
                      <li>
                        <Link href="/InnovaMysore">
                          Innova Car Rental in Mysore
                        </Link>
                      </li>
                    </div>
                    <div className="city-column">
                      <li>
                        <Link href="/InnovaNagpur">
                          Innova Car Rental in Nagpur
                        </Link>
                      </li>
                      <li>
                        <Link href="/InnovaVijayawada">
                          Innova Car Rental in Vijayawada
                        </Link>
                      </li>
                      <li>
                        <Link href="/InnovaBhopal">
                          Innova Car Rental in Bhopal
                        </Link>
                      </li>
                      <li>
                        <Link href="/InnovaPatna">
                          Innova Car Rental in Patna
                        </Link>
                      </li>
                      <li>
                        <Link href="/InnovaGuwahati">
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

        <hr className="footer__rule" />

        <div className="footer__bottom">
          <p className="copyright">© 2024 CozyCabz. All rights reserved.</p>
          <ul className="footer__legal">
            <li>
              <Link href="/Privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/About">About us</Link>
            </li>
            <li>
              <Link href="/Contact">Contact us</Link>
            </li>
            <li>
              <Link href="/Terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/Refund">Refund Policy</Link>
            </li>
            <li>
              <Link href="/Support">Support</Link>
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
