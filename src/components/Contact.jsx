import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:karthiks55771@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="contact reveal">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <a href="mailto:karthiks55771@gmail.com" className="contact-link">
            📧 karthiks55771@gmail.com
          </a>
          <a href="tel:8072859076" className="contact-link">
            📞 +91 80728 59076
          </a>
          <a
            href="https://github.com/Karthik23807"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            💻 github.com/Karthik23807
          </a>
          <a
            href="https://www.linkedin.com/in/karthiks8072859076/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            🔗 linkedin.com/in/karthiks8072859076
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;