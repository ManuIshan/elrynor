import React, { useState } from "react";
import "./Faq.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqData = [
    {
      question: "Bridal Booking – Important Notes",
      answer: `
• All bridal prices are per side (per hand) unless mentioned otherwise.
• Travel & accommodation charges apply for outstation bookings.
• Bridal consultation & theme-based customization available.
• Advance booking is required to secure wedding dates.
• Final pricing depends on detailing, coverage & customization.
      `
    },
    {
      question: "Why Choose Elynor? (Soft Luxury USP)",
      answer: `
• Custom bespoke designs crafted uniquely for you.
• 100% natural premium henna used.
• Soft luxury finishing with elegant detailing.
• Clean, hygienic & skin–safe application.
• Deep, long-lasting stain.
• Professional & on-time service.
• Available across multiple cities.
• Destination wedding specialist.
      `
    }
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-heading">
        Frequently Asked <span>Questions</span>
      </h2>

      <div className="faq-inner">
        {faqData.map((item, i) => (
          <div className="faq-card" key={i}>
            <button className="faq-question" onClick={() => toggleFAQ(i)}>
              {item.question}
              <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
            </button>

            <div className={`faq-answer ${openIndex === i ? "show" : ""}`}>
              {item.answer.split("•").map(
                (line, idx) =>
                  line.trim() && (
                    <p key={idx} className="faq-line">• {line.trim()}</p>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
