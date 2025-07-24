import React, { useState } from "react";
import { BrandName } from "../Data/BrandData";
import { Link } from "react-router-dom";
import { BookPageSEO } from "./../Data/AllPagesSEO";
import { serviceOptions } from "../Data/BookNowPageData";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});
  const phonePattern = /^[6-9]\d{9}$/;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phonePattern.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.service) newErrors.service = "Select a service.";
    if (!formData.date) newErrors.date = "Select a date.";
    if (!formData.time) newErrors.time = "Select a time.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const message = `Hi, I’m *${formData.name}* (+91-${
        formData.phone
      }). I’m interested in booking *${formData.service}* on *${formData.date
        .split("-")
        .reverse()
        .join("-")}* at *${
        formData.time
      }*. Kindly confirm my appointment. - ${BrandName}`;
      window.open(
        `https://wa.me/918331889448?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  return (
    <>
      {BookPageSEO}
      {/* Hero Section */}
      <section className="booking-hero-section">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Left Side - Content */}
            <div className="col-md-6">
              <h2 className="fw-bold text-dark hero-title">
                Book Salon Services at Home in Hyderabad
              </h2>
              <span className="text-danger home-tagline">
                Don’t Wait, Just Book Today!
              </span>
              <p className="text-muted mb-4">
                Enjoy salon-quality treatments in the comfort of your home.
                Quick, easy, and professional — just choose your service and
                time!
              </p>
              <Link to="" className="btn btn-warning fw-semibold px-4 py-2">
                <i className="fa-solid fa-phone"></i> Call Us For Booking
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="col-md-6 text-center">
              <div className="text-center">
                <img
                  src={require("./../Assets/img6.jpeg")}
                  alt="Book Now"
                  className="img-fluid rounded-4 shadow booking-hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Appointment Form */}
      <div className="d-flex flex-wrap justify-content-around py-4">
        <div className="col-md-6">
          <img
            className="w-100"
            src="https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148554946.jpg?t=st=1752000660~exp=1752004260~hmac=0946e7bff2fc0be497aab5aaa6728613958e8e54e917bbf7805cbb0d377813ee&w=1480"
            alt="appointment booking"
          />
        </div>
        <section className="appointment-form col-md-5">
          <div>
            <h3 className="fw-bold text-center section-heading mb-4">
              Booking Your Slot Here
            </h3>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-4 rounded shadow"
            >
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Name<span className="text-danger ms-2">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Phone Number <span className="text-danger ms-2">*</span>
                </label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  placeholder="Enter 10-digit phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Service <span className="text-danger ms-2">*</span>
                </label>
                <select
                  className={`form-select ${
                    errors.service ? "is-invalid" : ""
                  }`}
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option value="">Select a service</option>
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Facial & Cleanup">Facial & Cleanup</option>
                  <option value="Haircut & Styling">Haircut & Styling</option>
                  <option value="Waxing & Threading">Waxing & Threading</option>
                  <option value="Pedicure & Manicure">
                    Pedicure & Manicure
                  </option>
                  {serviceOptions.map((service, index) => {
                    return <option key={index}>{service.label}</option>;
                  })}
                </select>
                {errors.service && (
                  <div className="invalid-feedback">{errors.service}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Date <span className="text-danger ms-2">*</span>
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.date ? "is-invalid" : ""}`}
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
                {errors.date && (
                  <div className="invalid-feedback">{errors.date}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Time ( 24 hrs format ){" "}
                  <span className="text-danger ms-2">*</span>
                </label>
                <input
                  type="time"
                  className={`form-control ${errors.time ? "is-invalid" : ""}`}
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
                {errors.time && (
                  <div className="invalid-feedback">{errors.time}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-warning w-100 fw-semibold"
              >
                <i className="fab fa-whatsapp fa-lg"></i> Book via WhatsApp
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="pricing-cta-section py-5">
        <div className="container">
          <div className="cta-box text-center p-5 rounded-4 shadow">
            <h3 className="fw-bold section-heading mb-3">Still Thinking?</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Book now and let our professionals pamper you at your home with
              hygiene, comfort, and care.
            </p>
            <Link
              to="/services"
              className="btn btn-outline-warning px-4 py-2 fw-semibold mt-4"
            >
              Explore All Services <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;
