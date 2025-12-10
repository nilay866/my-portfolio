import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Hi, I'm Nilay 👋</h1>
        <p>DevOps Engineer | AWS | Docker | Linux | CI/CD</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a DevOps enthusiast passionate about automation, cloud infrastructure,
          containerization, and CI/CD pipelines. I enjoy deploying applications
          using AWS EC2, Docker, GitHub Actions, and Nginx.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>AWS EC2, S3, IAM</li>
          <li>Docker & Docker Compose</li>
          <li>Linux & Shell Scripting</li>
          <li>Nginx Reverse Proxy</li>
          <li>GitHub Actions (CI/CD)</li>
          <li>Python Basics</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>DevOps Portfolio Website</h3>
          <p>Built with React + Vite and deployed using Docker on AWS EC2.</p>
        </div>

        <div className="card">
          <h3>CI/CD Pipeline</h3>
          <p>Automated build & deploy pipeline using GitHub Actions.</p>
        </div>

        <div className="card">
          <h3>Monitoring Setup</h3>
          <p>Grafana + Node Exporter based monitoring on Linux server.</p>
        </div>
      </section>

      <footer>
        <p>Made with ❤️ by Nilay</p>
      </footer>
    </div>
  );
}