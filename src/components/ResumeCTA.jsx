import "./ResumeCTA.css";

const ResumeCTA = () => {
  return (
    <section className="resume-cta reveal">
      <div className="resume-box">
        <h2>Want to know more about my skills and experience?</h2>
        <p>Download my resume to explore my background in detail.</p>
        <a
          href="/Karthik_S_Resume.pdf"
          download
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeCTA;