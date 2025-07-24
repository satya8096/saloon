import React from "react";
import { Link } from "react-router-dom";
import { ServicePageSEO } from "../Data/AllPagesSEO";
import {
  bleachServices,
  CleanUpsServices,
  FacialsServices,
  gentsChemicalServices,
  gentsColorServices,
  gentsHairServices,
  hairTreatments,
  ladiesChemicalServices,
  ladiesColorServices,
  ladiesHairServices,
  makeupServices,
  partyStyles,
  piercingServices,
  treatmentPackages,
  waxingServices,
  relaxationServices,
  threadingServices,
} from "../Data/ServicesPageData";

const ServiceCard = ({ servicesData, title }) => {
  return (
    <div>
      <h5 className="section-heading text-center mt-4">{title}</h5>
      <div className="row g-4 py-4">
        {servicesData.map((service, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="service-card shadow-sm h-100 rounded-4 border-0 p-4 bg-white">
              <div className="mb-3 d-flex align-items-start gap-3">
                <i className={`${service.icon} fa-2x text-warning`}></i>
                <span className="badge bg-danger text-light small service-badge">
                  {service.serviceType}
                </span>
                <div>
                  <h5 className="fw-semibold text-dark mb-1">{service.name}</h5>
                </div>
              </div>
              <p>{service.description}</p>
              <p className="text-muted mb-4 small">{service.price}</p>
              {service.types && (
                <div>
                  {service.types.map((types, index) => {
                    return (
                      <div key={index}>
                        <span>{types.type} : </span>
                        <span>{types.price}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              <a
                href="/book-an-appointment"
                className="btn btn-outline-warning w-100 fw-semibold"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-light">
      {ServicePageSEO}
      <section className="services-hero-section -5">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Text Section */}
            <div className="col-md-6">
              <h1 className="fw-bold text-dark hero-title">
                Salon Services at Your Doorstep in Hyderabad
              </h1>
              <span className="text-warning home-tagline">
                Where Comfort Meets Ultimate Glam
              </span>
              <p className="text-muted mt-3 services-hero-desc">
                Discover a wide range of beauty treatments and salon services
                delivered by professionals at your home. Choose your service,
                relax, and let us pamper you in comfort.
              </p>
              <Link
                to="/contact"
                className="btn btn-warning px-4 py-2 mt-4 fw-semibold"
              >
                Book a Service <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            {/* Image Section */}
            <div className="col-md-6 mb-lg-0 mb-4">
              <div className="text-center">
                <img
                  src={require("./../Assets/img4.jpeg")}
                  alt="Salon Services"
                  className="service-hero-img rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section pb-5">
        <div className="container">
          <div className="container py-5">
            <ServiceCard
              servicesData={threadingServices}
              title={"Threading Services"}
            />
            <ServiceCard
              servicesData={relaxationServices}
              title={"Relaxation Services"}
            />
            <ServiceCard
              servicesData={ladiesColorServices}
              title={"Ladies Colour Services"}
            />
            <ServiceCard
              servicesData={gentsColorServices}
              title={"Gents Colour Servies"}
            />
            <ServiceCard
              servicesData={ladiesHairServices}
              title={"Ladies Hair Servies"}
            />
            <ServiceCard
              servicesData={gentsHairServices}
              title={"Gents Hair Servies"}
            />
            <ServiceCard servicesData={partyStyles} title={"Party Styles"} />
            <ServiceCard
              servicesData={treatmentPackages}
              title={"Treatment Packages"}
            />
            <ServiceCard
              servicesData={makeupServices}
              title={"Makeup Services"}
            />
            <ServiceCard
              servicesData={waxingServices}
              title={"Waxing Services"}
            />
            <ServiceCard
              servicesData={bleachServices}
              title={"Bleach Services"}
            />
            <ServiceCard
              servicesData={hairTreatments}
              title={"Hair Treatments"}
            />
            <ServiceCard
              servicesData={piercingServices}
              title={"Piercing Services"}
            />
            <ServiceCard
              servicesData={CleanUpsServices}
              title={"Clean Ups Services"}
            />
            <ServiceCard
              servicesData={FacialsServices}
              title={"Facial Services"}
            />
            <ServiceCard
              servicesData={gentsChemicalServices}
              title={"Gents Chemical Services"}
            />
            <ServiceCard
              servicesData={ladiesChemicalServices}
              title={"Ladies Chemical Services"}
            />
          </div>
        </div>
      </section>
      <section className="services-cta-section py-5">
        <div className="container">
          <div className="cta-box rounded-4 p-5 text-center shadow">
            <h3 className="fw-bold section-heading mb-3">
              Ready to Pamper Yourself?
            </h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Book professional salon services right at your doorstep. Choose
              from a wide range of grooming and beauty treatments — all from the
              comfort of your home in Hyderabad.
            </p>
            <Link
              to="/book-an-appointment"
              style={{ whiteSpace: "nowrap" }}
              className="btn btn-warning px-4 py-2 fw-semibold mt-4"
            >
              <i className="fa-solid fa-calendar-check"></i> Book an Appointment
              Now
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
