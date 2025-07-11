// src/pages/About.js
import React, { useEffect, useState } from "react";
import { BrandName } from "../Data/BrandData";
import { Link } from "react-router-dom";
import { AboutPageSEO } from "./../Data/AllPagesSEO";
import { stats } from "../Data/AboutPageData";
import Testimonials from "../Components/Testimonials";

const AchievementCard = ({ label, value, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="col-md-3 col-6">
      <div
        className="achievement-card p-4 text-center rounded"
        style={{ backgroundColor: color }}
      >
        <h3 className="fw-bold display-6">{count}+</h3>
        <p className="text-muted mb-0 fw-medium">{label}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="">
      {AboutPageSEO}
      <section className="about-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="row mb-5 text-center">
            <div className="col-lg-8 mx-auto">
              <h3 className="fw-bold section-heading">About {BrandName}</h3>
              <p className="text-muted">
                Our journey in delivering professional salon services to your
                doorstep — redefining comfort and care across Hyderabad.
              </p>
            </div>
          </div>

          {/* Intro Section */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://img.freepik.com/free-photo/young-woman-lying-cosmetologist-s-table-rejuvenation-procedure_343596-63.jpg"
                alt="About Us"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-md-6 ps-md-5">
              <h4 className="fw-semibold text-dark mb-3">Who We Are</h4>
              <p className="text-muted">
                {BrandName} was born with a mission to bring luxury salon care
                to homes in Hyderabad. We believe beauty treatments should be
                personalized, hygienic, and convenient — all without
                compromising on quality.
              </p>
              <p className="text-muted">
                Backed by a certified team of beauticians and makeup artists, we
                use premium tools and safe products to ensure that every session
                is comfortable, effective, and relaxing.
              </p>
            </div>
          </div>

          {/* Our Mission & Vision */}
          <div className="row align-items-center flex-md-row-reverse mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://img.freepik.com/free-photo/woman-applying-lipstick-looking-mirror_23-2148165569.jpg"
                alt="Mission & Vision"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-md-6 pe-md-5">
              <h4 className="fw-semibold text-dark mb-3">
                Our Mission & Vision
              </h4>
              <p className="text-muted">
                Our mission is to empower individuals with salon-grade beauty
                services that are accessible, affordable, and delivered in the
                comfort of home. We aim to become Hyderabad’s most trusted name
                in home salon solutions.
              </p>
              <p className="text-muted">
                With a customer-first approach, our vision is to set new
                benchmarks for quality, hygiene, and satisfaction in every
                beauty session.
              </p>
            </div>
          </div>

          {/* How We Work */}
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://img.freepik.com/free-photo/female-hairdresser-making-hairstyle-client_1303-20930.jpg"
                alt="How We Work"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-md-6 ps-md-5">
              <h4 className="fw-semibold text-dark mb-3">How We Work</h4>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  <strong>1. Easy Booking:</strong> Choose your service and time
                  online or via WhatsApp.
                </li>
                <li className="mb-2">
                  <strong>2. Beautician Assigned:</strong> We assign a verified,
                  trained professional near you.
                </li>
                <li className="mb-2">
                  <strong>3. Doorstep Service:</strong> Beautician arrives on
                  time with hygienic tools & essentials.
                </li>
                <li className="mb-2">
                  <strong>4. Post-care Tips:</strong> Get guidance on skincare,
                  haircare, and post-service care.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h3 className="text-center fw-bold section-heading mb-5">
            Our Achievements
          </h3>
          <div className="row g-4 justify-content-center">
            {stats.map((item, index) => (
              <AchievementCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="about-cta-section py-5">
        <div className="container">
          <div className="cta-box bg-white shadow rounded-4 p-5 text-center">
            <h3 className="fw-bold section-heading mb-3">
              Bring the Salon Experience Home
            </h3>
            <p className="text-muted mb-4">
              Discover why thousands trust us for hygienic, professional beauty
              services at home in Hyderabad. Let us pamper you with care and
              confidence.
            </p>
            <Link
              to="/book-an-appointment"
              className="btn btn-warning px-4 py-2 fw-semibold"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
