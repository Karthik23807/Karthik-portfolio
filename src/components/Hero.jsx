import "./Hero.css";


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text reveal">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-title">
            Karthik <span>S.</span>
          </h1>
          <h2 className="hero-subtitle">
            Civil Engineering Student & Web Developer
          </h2>
          <p className="hero-description">
            I build modern, responsive and user-friendly digital experiences
            while exploring the intersection of engineering and technology.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a
              href="/Karthik_S_Resume.pdf"
              download
              className="btn btn-outline"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-image-wrapper">
            <img
              src="public\images\Karthik.jpg"
              alt="Karthik S."
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;