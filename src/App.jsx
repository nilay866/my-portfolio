import "./App.css";

function App() {
  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <h1>Hi, I'm <span className="highlight">Nilay Chavhan</span> 👋</h1>
        <h2 className="subtext">DevOps Engineer | AWS | Docker | Linux | CI/CD</h2>
      </header>

      {/* ABOUT SECTION */}
      <section className="section">
        <h3>About Me</h3>
        <p>
          I am a DevOps Engineer passionate about automation, cloud infrastructure,
          containerization, CI/CD pipelines, monitoring, and server deployments.
          I enjoy building scalable systems using Docker, AWS, Nginx, and GitHub Actions.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h3>Skills</h3>
        <ul className="skills">
          <li>🚀 AWS (EC2, S3, IAM)</li>
          <li>🐳 Docker & Docker Compose</li>
          <li>⚙️ Linux & Shell Scripting</li>
          <li>🔁 GitHub Actions (CI/CD)</li>
          <li>🌀 Nginx Reverse Proxy</li>
          <li>🐍 Python Basics</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h3>Projects</h3>
        <div className="project-card">
          <h4>🌐 DevOps Portfolio Website</h4>
          <p>
            Built with React + Vite and deployed using Docker on AWS EC2.
            Implemented CI/CD pipeline using GitHub Actions for automated deployment.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h3>Contact</h3>
        <p>📧 Email: <a href="mailto:nilaychavhan@gmail.com">nilaychavhan@gmail.com</a></p>
        <p>🔗 LinkedIn:  
          <a 
            href="https://www.linkedin.com/in/nilay-chavhan-272271188" 
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/nilay-chavhan
          </a>
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Nilay Chavhan — DevOps Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
