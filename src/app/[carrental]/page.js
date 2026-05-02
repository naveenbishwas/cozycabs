"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";
import CityForm from "../Components/CityForm/page";
import rentalContent from "../data/rentalContent.json";

const carrental = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { carrental } = useParams();
  const city = carrental
    .split("-")
    .pop()
    .replace(/^\w/, (c) => c.toUpperCase());

  const selectedCity = rentalContent.find((item) => item.city == city);
  const spots = selectedCity.spots;

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };
  // const spots = [
  //   {
  //     title: "Sabarmati Ashram",
  //     img: "/inahmedabad/Sabarmati.png",
  //     alt: "Sabarmati Ashram campus",
  //     paragraphs: [
  //       "Once the residence of Mahatma Gandhi, Sabarmati Ashram is a peaceful retreat that showcases India’s freedom struggle. Visitors can see Gandhi’s personal belongings, letters, and photographs while walking through the serene campus along the Sabarmati River. It remains one of the most inspiring landmarks in Ahmedabad",
  //     ],
  //   },
  //   {
  //     title: "Kankaria Lake",
  //     img: "/inahmedabad/Kankaria.png",
  //     alt: "Kankaria Lakefront",
  //     paragraphs: [
  //       "Kankaria Lake is a lively recreational spot perfect for families and tourists. It features boat rides, a zoo, toy train, balloon rides, and landscaped gardens. The lakefront hosts vibrant evening activities, making it a favorite hangout for locals and travelers looking to enjoy a fun-filled day in the city.",
  //     ],
  //   },
  //   {
  //     title: "Sidi Saiyyed Mosque",
  //     img: "/inahmedabad/Sidi.png",
  //     alt: "Sidi Saiyyed Jali",
  //     paragraphs: [
  //       "Built in the 16th century, this mosque is world-famous for its intricate stone latticework windows, especially the iconic “Tree of Life” design. A masterpiece of Indo-Islamic art, it attracts both devotees and history lovers. The mosque remains one of Ahmedabad’s most photographed and celebrated monuments.",
  //     ],
  //   },
  //   {
  //     title: "Adalaj Stepwell",
  //     img: "/inahmedabad/Adalaj.png",
  //     alt: "Adalaj Stepwell carvings",
  //     paragraphs: [
  //       "Adalaj Stepwell is a stunning five-story water reservoir showcasing Indo-Islamic architecture and detailed stone carvings. Built in the 15th century, it was not only a source of water but also a resting place for travelers. Its beautifully sculpted corridors and pillars make it a must-visit for heritage enthusiasts.",
  //     ],
  //   },
  //   {
  //     title: "Sabarmati Riverfront",
  //     img: "/inahmedabad/Sabarmati-Riverfront.png",
  //     alt: "Sabarmati Riverfront walkway",
  //     paragraphs: [
  //       "The Sabarmati Riverfront is a modern landmark offering landscaped gardens, cycling tracks, and boating facilities along the river. Stretching for kilometers, it’s ideal for morning walks, evening leisure, or photography. With its blend of nature and urban development, it has become a favorite spot for locals and tourists alike.",
  //     ],
  //   },
  //   {
  //     title: "Jama Masjid",
  //     img: "/inahmedabad/Jama-Masjid.png",
  //     alt: "Ahmedabad Jama Masjid",
  //     paragraphs: [
  //       "Constructed in the 15th century by Sultan Ahmed Shah, Jama Masjid is one of India’s most elegant mosques. Built with yellow sandstone, it features intricate carvings, grand domes, and a vast courtyard. The mosque reflects the city’s rich architectural heritage and continues to draw devotees and visitors every day.",
  //     ],
  //   },
  // ];

  const faqs = [
    {
      q: `How much does cab service in ${selectedCity.city} cost per km?`,
      a: "Economy cars start at ₹12/km, premium sedans at ₹25/km, and luxury cars at ₹35/km. Transparent rates with CozyCabz.",
    },
    {
      q: `Can I book a cab service in ${selectedCity.city} with driver for outstation trips?`,
      a: "Yes—one-way and round-trip packages to nearby destinations are available.",
    },
    {
      q: `Do you provide airport transfers in ${selectedCity.city}?`,
      a: "Absolutely. On-time transfers to and from the Airport.",
    },
    {
      q: `Are self-drive cars available in ${selectedCity.city}?`,
      a: "Yes—self-drive options are available for independence and flexibility.",
    },
    {
      q: "How do I book quickly?",
      a: "Book online in a few steps—confirmation and driver details are shared instantly.",
    },
  ];

  return (
    <div>
      <head>
        <title>{`Cab Service in ${selectedCity.city} | CozyCabz with Driver`}</title>
        <meta
          name="description"
          content="Book cab service in Ahmedabad with driver for local, airport & outstation trips. Affordable, safe, and 24×7 service with professional chauffeurs."
        />
        <meta
          property="og:title"
          content="Car Rental in Ahmedabad | CozyCabz with Driver"
        />
        <meta
          property="og:description"
          content="Service cars in Ahmedabad for business, family, or leisure travel. Transparent pricing, verified chauffeurs, and comfortable rides by CozyCabz."
        />
        <meta property="og:image" content="/inahmedabad/Sabarmati.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.cozycabz.com/${selectedCity.city.toLowerCase()}`}
        />
      </head>

      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India's Trusted Cab Service</p>
          <h1 className="heroeco__title">{`Chauffeur Service in ${selectedCity.city}`}</h1>
          <span className="small-head">
            <br />
            <h4>Reliable, Safe & Affordable</h4>
          </span>
          <p className="heroeco__sub">{` ${selectedCity.description}`}</p>
        </div>
      </section>

      <CityForm />
      <Trustcc />
      <Howto />
      <Howrent />

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              {` Must-Visit Places in ${selectedCity.city} with CozyCabz`}
            </h2>
            <p>{selectedCity.placeDecrip}</p>
          </header>
          <div className="attractions__grid">
            {spots?.map((s) => (
              <article className="spot" key={s.title}>
                <figure className="spot__figure">
                  <img className="spot__img" src={s.image} alt={s.title} />
                </figure>
                <h3 className="spot__title">{s.title}</h3>

                <p className="spot__text">{s.descrip}</p>
                {/* <h2>{s.decrip}</h2> */}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Answers to the most common questions about our Ahmedabad services.
          </p>
        </div>
        <div className="faq-list" role="list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                className={`faq-item ${open ? "open" : ""}`}
                key={i}
                role="listitem"
              >
                <button
                  className="faq-question"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-control-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-control-${i}`}
                  className="faq-answer"
                  style={{ maxHeight: open ? "300px" : "0px" }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default carrental;
