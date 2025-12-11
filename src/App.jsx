import "./App.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaDocker, FaAws, FaServer } from "react-icons/fa";

function App() {
  return (
    <div className="main">
      
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Hi, I'm <span className="highlight">Nilay Chavhan</span> 👋</h1>
        <h2 className="subtitle">DevOps Engineer | Cloud | Docker | CI/CD | Linux</h2>
        <p className="summary">
          I build scalable infrastructure, automate deployments, and create production-grade pipelines 
          using AWS, Docker, GitHub Actions, Nginx & Linux.
        </p>

        <div className="socials">
          <a href="https://www.linkedin.com/in/nilay-chavhan-272271188" target="_blank"><FaLinkedin size={28} /></a>
          <a href="https://github.com/nilay866" target="_blank"><FaGithub size={28} /></a>
          <a href="mailto:nilaychavhan@gmail.com"><FaEnvelope size={28} /></a>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="section">
        <h3 className="section-title">Skills</h3>
        
        <div className="skills-grid">
          <div className="skill-card"><FaDocker size={40} /><p>Docker / Containers</p></div>
          <div className="skill-card"><FaAws size={40} /><p>AWS (EC2, S3, IAM)</p></div>
          <div className="skill-card"><FaServer size={40} /><p>Linux & Shell Scripting</p></div>
          <div className="skill-card"><p className="icon">⚙️</p><p>CI/CD (GitHub Actions)</p></div>
          <div className="skill-card"><p className="icon">🔁</p><p>Nginx Reverse Proxy</p></div>
          <div className="skill-card"><p className="icon">🌐</p><p>Networking Basics</p></div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section">
        <h3 className="section-title">Projects</h3>

        <div className="project-card">
          <h4>🌐 DevOps Portfolio Deployment</h4>
          <p>
            Built using React + Vite, Dockerized, deployed on AWS EC2 using Nginx, 
            and fully automated CI/CD pipeline using GitHub Actions.
          </p>
        </div>

        <div className="project-card">
          <h4>🚀 Jenkins CI/CD Pipeline</h4>
          <p>
            Automated Docker build → push → EC2 deployment using Jenkins, 
            SSH Agents & DockerHub integration.
          </p>
        </div>

        <div className="project-card">
          <h4>☁ AWS Infrastructure Automation</h4>
          <p>
            Automated EC2, IAM, and S3 provisioning using Bash scripts 
            and GitHub workflows.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <h3 className="section-title">Contact</h3>
        <p className="contact-item">📧 Email: <a href="mailto:nilaychavhan@gmail.com">nilaychavhan@gmail.com</a></p>
        <p className="contact-item">🔗 LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/nilay-chavhan-272271188">linkedin.com/in/nilay-chavhan</a></p>
        <p className="contact-item">💻 GitHub: <a target="_blank" href="https://github.com/nilay866">github.com/nilay866</a></p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Nilay Chavhan — DevOps Engineer Portfolio
      </footer>
    </div>
  );
}

export default App;
