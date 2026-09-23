import "./About.css";

const About = () => {
  return (
    <section id="about" className="about reveal">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>
      <div className="about-content">
        <p>
          I'm a Civil Engineering undergraduate at{" "}
          <strong>SRM TRP Engineering College, Trichy</strong> (2024–2028) with
          a strong passion for Web and App Development.
        </p>
        <p>
          While my academic background is in engineering, I've discovered a
          deep interest in building practical digital solutions. I focus on
          creating responsive, user-friendly websites and applications using
          modern technologies like React.js and Material UI.
        </p>
        <p>
          I'm constantly learning, working on real-world projects, and looking
          forward to collaborating on innovative IT projects and freelance
          opportunities.
        </p>
      </div>
    </section>
  );
};

export default About;