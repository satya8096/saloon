import React from "react";
import { Link } from "react-router-dom";
import { PricingPageSEO } from "../Data/AllPagesSEO";
import {
  gentsColorServices,
  ladiesColorServices,
  gentsHairServices,
  partyStyles,
  ladiesHairServices,
  bleachServices,
  chemicalData,
  facialsData,
  hairTreatments,
  makeupServices,
  piercingServices,
  treatmentPackages,
  waxingServices,
} from "../Data/PricingPageData";
import {
  relaxationServices,
  threadingServices,
} from "../Data/ServicesPageData";

const Pricing = () => {
  return (
    <section className="">
      {PricingPageSEO}
      <section className="pricing-hero-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Left: Text */}
            <div className="col-md-6">
              <h1 className="fw-bold text-dark pricing-hero-title">
                Affordable Beauty Services at Home
              </h1>
              <span className="text-primary home-tagline">
                Luxury Services, Pocket-Friendly Prices
              </span>
              <p className="text-muted mt-3 pricing-hero-subtitle">
                Discover our flexible pricing plans designed to bring premium
                salon services to your doorstep in Hyderabad — no hidden fees,
                no surprises.
              </p>
              <Link
                to="/book-an-appointment"
                className="btn btn-warning px-4 py-2 fw-semibold mt-4"
              >
                <i className="fa-solid fa-calendar-check"></i> Book Now
              </Link>
            </div>

            {/* Right: Image */}
            <div className="col-md-6 text-center">
              <img
                src="https://img.freepik.com/free-photo/close-up-face-young-woman-relaxing-gentle_158595-4584.jpg?t=st=1751947903~exp=1751951503~hmac=8cd03d2747dedb4038f5803fd9c4ed45790a9232d3ddfcc395a4ebbd465d53cb&w=1480"
                alt="Pricing"
                className="img-fluid rounded-4 shadow pricing-hero-img"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ backgroundColor: "#f8f9fa" }}>
        {/* <div className="text-center mb-5">
          <h3 className="fw-bold section-heading">Pricing Plans</h3>
          <p className="text-muted">
            Affordable beauty services in Hyderabad | Home salon price list by{" "}
            {BrandName}
          </p>
        </div> */}

        {/* Tabel */}
        <section className="py-5 bg-light">
          <div className="container">
            <h3 className="section-heading text-center mb-5">
              Make-Up & Treatment Packages
            </h3>

            {/* Make-up Table */}
            <h4 className="text-primary fw-bold pb-2 mb-3">Make-Up Services</h4>
            <div className="table-responsive mb-5">
              <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                <thead className="bg-info">
                  <tr>
                    <th>Service</th>
                    <th>Regular (₹)</th>
                    <th>HD (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {makeupServices.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.regular ? `₹${item.regular}` : "--"}</td>
                      <td>{item.hd ? `₹${item.hd}` : "--"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Treatment Table */}
            <h4 className="text-primary fw-bold pb-2 mb-3">
              Hair & Skin Treatment Packages
            </h4>
            <div className="table-responsive">
              <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                <thead className="bg-info">
                  <tr>
                    <th>Package</th>
                    <th>Price (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {treatmentPackages.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="py-5 bg-light">
          <div className="container">
            <h3 className="section-heading text-center mb-5">
              Waxing & Bleach Pricing
            </h3>

            {/* Waxing Table */}
            <h4 className="text-primary fw-bold pb-2 mb-3">Waxing Services</h4>
            <div className="table-responsive mb-5">
              <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                <thead className="bg-info">
                  <tr>
                    <th>Service</th>
                    <th>Normal</th>
                    <th>Chocolate</th>
                    <th>Rica</th>
                  </tr>
                </thead>
                <tbody>
                  {waxingServices.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.name}</td>
                      <td>₹{item.normal}</td>
                      <td>₹{item.chocolate}</td>
                      <td>₹{item.rica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bleach Table */}
            <h4 className="text-primary fw-bold pb-2 mb-3">Bleach Services</h4>
            <div className="table-responsive">
              <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                <thead className="bg-info">
                  <tr>
                    <th>Service</th>
                    <th>Price (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {bleachServices.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="py-5 bg-light">
          <div className="container">
            <h3 className="section-heading text-center mb-5">
              💆 Hair Treatments & Piercing
            </h3>

            <div className="mb-5">
              <h4 className="text-primary fw-bold pb-2 mb-3">
                Hair Treatments
              </h4>
              <div className="table-responsive mb-5">
                <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                  <thead className="bg-info">
                    <tr>
                      <th>Service</th>
                      <th>Variant</th>
                      <th>Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hairTreatments.map((item, idx) => {
                      if (item.variants) {
                        return Object.entries(item.variants).map(
                          ([variant, price], i) => (
                            <tr key={`${idx}-${i}`}>
                              <td>{item.name}</td>
                              <td>{variant}</td>
                              <td>₹{price}</td>
                            </tr>
                          )
                        );
                      }
                      return (
                        <tr key={idx}>
                          <td>{item.name}</td>
                          <td>-</td>
                          <td>₹{item.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-primary fw-bold pb-2 mb-3">Piercing</h4>
              <div className="table-responsive">
                <table className="table table-bordered text-center shadow-sm bg-light">
                  <thead className="bg-info">
                    <tr>
                      <th>Service</th>
                      <th>Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {piercingServices.map((item, i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>₹{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="py-5 bg-light" id="chemical-pricing">
          <div className="container">
            <h3 className="section-heading text-center mb-5">
              🧪 Chemical Services Pricing
            </h3>

            {Object.entries(chemicalData).map(([category, services], i) => (
              <div key={i} className="mb-5">
                <h4 className="text-primary fw-bold pb-2 mb-3">{category}</h4>
                <div className="table-responsive mb-5">
                  <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                    <thead className="bg-info">
                      <tr>
                        <th>Service</th>
                        <th>Short</th>
                        <th>Medium</th>
                        <th>Long</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((item, index) => (
                        <tr key={index}>
                          <td className="fw-semibold text-lowercase">
                            {item.name}
                          </td>
                          <td>
                            {item.prices.SHORT ? `₹${item.prices.SHORT}` : "-"}
                          </td>
                          <td>
                            {item.prices.MEDIUM
                              ? `₹${item.prices.MEDIUM}`
                              : "-"}
                          </td>
                          <td>
                            {item.prices.LONG ? `₹${item.prices.LONG}` : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Table */}
        <section className="py-5 bg-light" id="facials-pricing">
          <div className="container">
            <h3 className="section-heading text-center mb-5">
              🌿 Clean-Ups & Facials Pricing
            </h3>

            {Object.entries(facialsData).map(([category, items], index) => (
              <div className="mb-5" key={index}>
                <h4 className="text-primary fw-bold pb-2 mb-3">{category}</h4>
                <div className="table-responsive mb-5">
                  <table className="table table-bordered table-striped text-center  shadow-sm bg-white">
                    <thead className="bg-info">
                      <tr>
                        <th>Service Name</th>
                        <th>Price (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, i) => (
                        <tr key={i}>
                          <td className="fw-semibold text-lowercase">
                            {item.name}
                          </td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* table */}
        <section className="py-5 bg-light" id="threading-relaxation">
          <div className="container">
            <h3 className="section-heading text-center mb-5">
              Threading & Relaxation Pricing
            </h3>
            <div className="mb-5">
              <h4 className="text-primary fw-bold mb-3">
                ✦ Threading Services
              </h4>
              <div className="table-responsive mb-5">
                <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                  <thead className="bg-info">
                    <tr>
                      <th>Service</th>
                      <th>Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {threadingServices.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>₹{item.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-primary fw-bold mb-3">
                🧖 Relaxation Services
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                  <thead className="bg-info">
                    <tr>
                      <th>Service</th>
                      <th>Type / Description</th>
                      <th>Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {relaxationServices.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="py-5 bg-light" id="hair-pricing">
          <div className="container">
            <h3 className="section-heading text-center mb-5">
              Hair Services Pricing
            </h3>

            {/* Ladies Hair Services */}
            <div className="mb-5">
              <h4 className="text-primary fw-bold mb-3">
                💇‍♀️ Hair Services (Ladies)
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                  <thead className="bg-info">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Particulars</th>
                      <th>Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ladiesHairServices.map((item) => (
                      <tr key={item.sl}>
                        <td>{item.sl}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Gents Hair Services */}
            <div className="mb-5">
              <h4 className="text-primary fw-bold mb-3">
                💇‍♂️ Hair Services (Gents)
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-center bg-white  shadow-sm">
                  <thead className="bg-info">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Particulars</th>
                      <th>Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gentsHairServices.map((item) => (
                      <tr key={item.sl}>
                        <td>{item.sl}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Party Styles */}
            <div>
              <h4 className="text-primary fw-bold mb-3">🎉 Party Styles</h4>
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-center bg-white shadow-sm">
                  <thead className="bg-info">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Particulars</th>
                      <th>Type</th>
                      <th>Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partyStyles.map((item) =>
                      item.types.map((style, idx) => (
                        <tr key={item.sl + "-" + idx}>
                          <td>{idx === 0 ? item.sl : ""}</td>
                          <td>{idx === 0 ? item.name : ""}</td>
                          <td>{style.type}</td>
                          <td>{style.price}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <p className="text-muted mt-3 small fst-italic">
                * Price may vary based on hair length & thickness. Hair wash not
                included.
              </p>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="py-5 bg-light" id="color-services">
          <div className="container">
            <h3 className="section-heading mb-4 text-center">
              Colour Services Pricing
            </h3>

            {/* Ladies Section */}
            <div className="mb-5">
              <h4 className="text-primary fw-bold mb-3">Ladies</h4>
              <div className="table-responsive">
                <table className="table table-bordered text-center table-striped shadow-sm bg-white">
                  <thead className="bg-info">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Particulars</th>
                      <th>Hair Length</th>
                      <th>Regular</th>
                      <th>Ammonia Free</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ladiesColorServices.map((item, index) => (
                      <tr key={index}>
                        <td>{item.slNo || ""}</td>
                        <td>{item.particular || ""}</td>
                        <td>{item.length || "-"}</td>
                        <td>{item.regular || "-"}</td>
                        <td>{item.ammoniaFree || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Gents Section */}
            <div>
              <h4 className="text-primary fw-bold mb-3">Gents</h4>
              <div className="table-responsive">
                <table className="table table-bordered text-center table-striped shadow-sm bg-white">
                  <thead className="bg-info">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Particulars</th>
                      <th>Regular</th>
                      <th>Ammonia Free</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gentsColorServices.map((item, index) => (
                      <tr key={index}>
                        <td>{item.slNo}</td>
                        <td>{item.particular}</td>
                        <td>{item.regular || "-"}</td>
                        <td>{item.ammoniaFree || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="pricing-cta-section py-5">
        <div className="container">
          <div className="cta-box text-center p-5 rounded-4 shadow">
            <h3 className="fw-bold section-heading mb-3">
              Choose the Right Package for You
            </h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              From quick touch-ups to full bridal treatments, we have a plan for
              every beauty need. Get salon-quality results in the comfort of
              your home — hygienic, professional, and budget-friendly.
            </p>
            <Link
              to="/services"
              className="btn btn-warning px-4 py-2 fw-semibold mt-4"
            >
              Book Your Package <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
