import "./App.css";
import profile from "./assets/profile.jpg";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-left">
          <h1>Hello, I'm <span className="highlight">Nilay Chavhan</span> 👋</h1>
          <h2 className="subtitle">DevOps Engineer | AWS | Docker | CI/CD | Linux</h2>

          <p className="summary">
            I specialize in automating cloud infrastructure, building CI/CD pipelines, 
            and deploying production-ready applications using AWS, Docker, GitHub Actions, 
            and Nginx. Passionate about scaling and performance.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-right">
          <img src={profile} alt="Nilay" className="profile-img" />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Nilay Chavhan — DevOps Engineer Portfolio
      </footer>
    </>
  );
}

export default App;
