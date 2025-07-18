import React from "react";

const faqs = [
  {
    question: "What types of salon services do you offer at home?",
    answer:
      "We provide a wide range of at-home services including haircuts, facials, threading, waxing, manicure/pedicure, massages, and bridal packages.",
  },
  {
    question: "Is it safe to take salon services at home?",
    answer:
      "Yes, absolutely. Our professionals follow strict hygiene and sanitization protocols using disposable and sterilized tools.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book via our website, WhatsApp, or by calling us directly. Just select your service, date, and time.",
  },
  {
    question: "Do you offer services for both ladies and gents?",
    answer:
      "Yes, we have specialized professionals for ladies and gents with tailored services for each.",
  },
  {
    question: "Are your professionals certified and experienced?",
    answer:
      "Yes, all our beauty experts are certified, trained, and experienced in their respective fields.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are available 7 days a week from 9:00 AM to 9:00 PM, including weekends and holidays.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, PhonePe, Google Pay, Paytm, and cash after service completion.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can easily reschedule or cancel your appointment up to 2 hours before the scheduled time.",
  },
  {
    question: "Do I need to prepare anything at home for the service?",
    answer:
      "Just ensure a clean and well-lit space. Our staff brings everything else required for your service.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, our pricing is transparent. All charges are clearly mentioned while booking.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-5 bg-light" id="faq">
      <div className="container">
        <h3 className="text-center section-heading mb-5 fw-bold">Frequently Asked Questions</h3>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div
              className="accordion-item mb-3 border-0 shadow-sm rounded-3"
              key={index}
            >
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
