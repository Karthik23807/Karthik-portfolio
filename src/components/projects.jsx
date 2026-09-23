import { projects } from "../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects reveal">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;