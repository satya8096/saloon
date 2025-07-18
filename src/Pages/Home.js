import React from "react";
import { Link } from "react-router-dom";
import { BrandName } from "../Data/BrandData";
import { HomePageSEO } from "../Data/AllPagesSEO";
import {
  locations,
  servicesTemplate,
  mainServices,
  whyChooseUs,
} from "../Data/HomePageData";
import Testimonials from "../Components/Testimonials";
import FAQSection from "../Components/FrequentlyAskedQuestions";

const Home = () => {
  return (
    <>
      {HomePageSEO}
      <section className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center flex-lg-row flex-column-reverse">
            {/* Text Section */}
            <div className="col-lg-6 text-section text-lg-start text-center">
              <h1 className="hero-title ">
                Beauty Parlour & Salon Services{" "}
                <br className="d-md-inline" />
                <span className="text-success home-tagline">
                  Glow Up Without Stepping Out
                </span>
              </h1>
              <p className="hero-subtext mt-3">
                Enjoy premium salon services from the comfort of your home —
                hygienic, professional, and at your schedule.
              </p>
              <Link
                to="/book-an-appointment"
                className="btn btn-warning mt-4 shadow"
              >
                <i className="fas fa-calendar-check me-2"></i>Book Your
                Appointment
              </Link>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="hero-img-wrap text-center">
                <img
                  src={require("./../Assets/footer_bacground.jpg")}
                  alt={`${BrandName} Salon at Home`}
                  className="rounded home-main-here-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="welcome-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h3 className="fw-bold section-heading">Welcome to {BrandName}</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Discover premium salon and beauty services, delivered
              professionally at your doorstep in Hyderabad — with comfort, care,
              and convenience.
            </p>
          </div>

          {/* Service Values Section */}
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-semibold text-dark mb-2">
                  Professional Experts
                </h5>
                <p className="text-muted small mb-0">
                  Our certified and trained professionals ensure the highest
                  service quality using top-rated products.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-semibold text-dark mb-2">At-Home Comfort</h5>
                <p className="text-muted small mb-0">
                  Enjoy salon-grade experiences in the comfort of your home,
                  saving you travel time and hassle.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-semibold text-dark mb-2">Hygiene & Safety</h5>
                <p className="text-muted small mb-0">
                  We follow strict hygiene protocols with sanitized tools,
                  disposable kits, and masks for every visit.
                </p>
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="text-center mt-5">
            <Link to="/book-an-appointment" className="btn btn-warning px-4">
              <i className="fas fa-calendar-check me-2"></i>Book Your First
              Service Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-5 services-section">
        <div className="container text-center">
          <h3 className="fw-bold section-heading mb-5">Our Top Services</h3>
          <div className="row g-4">
            {mainServices.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div
                  className="card h-100 shadow-sm border-0 service-card"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top rounded-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body text-start">
                    <h6 className="fw-bold text-dark mb-2">{service.title}</h6>
                    <p className="small text-muted mb-0">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h3 className="fw-bold section-heading mb-4">Explore Our Services</h3>
          <div className="row g-4 justify-content-center">
            {servicesTemplate.map((service, index) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                <div className="service-tab-card">
                  <div className="circle-img">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <p className="service-title mt-2">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-5 why-section">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold section-heading">Why Choose {BrandName}?</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
              Bringing the salon experience to your home isn’t just about
              convenience — it’s about **quality, hygiene, and care** that
              matches (or exceeds) any professional setup. Here's why{" "}
              {BrandName} is Hyderabad's trusted beauty partner:
            </p>
          </div>

          <div className="row g-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="flex-grow-1">
                    <h6 className="fw-semibold text-dark mb-1">{item.title}</h6>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="location-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold section-heading">
              We Serve Across Hyderabad
            </h3>
            <p
              className="text-muted"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Our beauty professionals reach you at your doorstep, covering
              major neighborhoods across Hyderabad with timely and high-quality
              salon services.
            </p>
          </div>

          <div className="row g-3 justify-content-center mt-4">
            {locations.map((area, idx) => (
              <div className="col-6 col-sm-4 col-md-3 text-center" key={idx}>
                <div className="location-pill px-3 py-2 rounded-pill bg-white shadow-sm">
                  <span className="small fw-semibold text-dark">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box text-center text-white p-5 rounded-4 shadow-lg">
            <h3 className="fw-bold mb-3 section-heading">
              Pamper Yourself at Home
            </h3>
            <p className="mb-4 text-dark">
              Book salon-quality beauty services at your doorstep in Hyderabad —
              safe, hygienic, and professionally done by our trained
              beauticians.
            </p>
            <Link
              to="/book-an-appointment"
              className="btn btn-warning px-4 fw-semibold shadow-sm"
            >
              <i className="fa-solid fa-calendar-check"></i> Book Now
            </Link>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
};

export default Home;
