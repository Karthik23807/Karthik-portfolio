import "./whyme.css";

const reasons = [
  { title: "Responsive Design", desc: "Websites that look great on every device." },
  { title: "Clean UI", desc: "Modern, minimal and user-friendly interfaces." },
  { title: "Mobile-Friendly", desc: "Optimized for mobile-first experiences." },
  { title: "Continuous Learning", desc: "Always exploring new technologies." },
  { title: "Attention to Detail", desc: "Pixel-perfect implementation." },
  { title: "Client-Focused", desc: "Your goals drive every decision." },
];

const WhyMe = () => {
  return (
    <section className="whyme reveal">
      <h2 className="section-title">
        Why <span>Work With Me</span>
      </h2>

      <div className="whyme-grid">
        {reasons.map((item) => (
          <div key={item.title} className="whyme-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMe;