import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 Karthik S. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/Karthik23807"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/karthiks8072859076/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:karthiks55771@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;