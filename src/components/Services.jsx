import { services } from "../data/services";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services reveal">
      <h2 className="section-title">
        My <span>Services</span>
      </h2>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;