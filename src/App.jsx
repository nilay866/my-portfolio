function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hi, I'm <span style={styles.name}>Nilay Chavhan</span> 👋</h1>

      <h2 style={styles.subtitle}>DevOps Engineer | AWS | Docker | Linux | CI/CD</h2>

      <p style={styles.about}>
        I am a DevOps engineer passionate about automation, cloud infrastructure,
        CI/CD pipelines, containerization, and infrastructure as code.
      </p>

      <h2 style={styles.sectionTitle}>Skills</h2>
      <ul style={styles.list}>
        <li>AWS EC2, S3, IAM</li>
        <li>Docker & Docker Compose</li>
        <li>Linux & Shell Scripting</li>
        <li>Nginx Reverse Proxy</li>
        <li>GitHub Actions (CI/CD)</li>
        <li>Python Basics</li>
      </ul>

      <h2 style={styles.sectionTitle}>Projects</h2>
      <p><strong>DevOps Portfolio Website</strong></p>
      <p>
        Built with React + Vite and deployed using Docker on AWS EC2 with CI/CD automation.
      </p>

      <h2 style={styles.sectionTitle}>Connect With Me</h2>
      <p>
        <a style={styles.link} href="https://www.linkedin.com/in/nilay-chavhan-272271188" target="_blank">
          🔗 LinkedIn Profile
        </a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    backgroundColor: '#0a0a0a',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
  },
  name: {
    color: '#4fa3ff',
  },
  subtitle: {
    fontSize: '20px',
    marginTop: '10px',
    opacity: 0.8,
  },
  about: {
    marginTop: '20px',
    lineHeight: '1.6',
    opacity: 0.9,
  },
  sectionTitle: {
    marginTop: '30px',
    fontSize: '26px',
    color: '#4fa3ff',
  },
  list: {
    marginTop: '10px',
    lineHeight: '1.6',
  },
  link: {
    color: '#4fa3ff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;
