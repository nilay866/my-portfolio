function App() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0d1117",
      color: "white",
      minHeight: "100vh",
      padding: "50px 20px",
    }}>
      
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        
        {/* Header */}
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "10px" }}>
          Hi, I'm <span style={{ color: "#58a6ff" }}>Nilay Chavhan 👋</span>
        </h1>

        <h2 style={{ fontSize: "28px", fontWeight: "normal", color: "#c9d1d9" }}>
          DevOps Engineer | AWS | Docker | CI/CD | Linux
        </h2>

        <p style={{ fontSize: "18px", marginTop: "20px", lineHeight: "1.6", color: "#8b949e" }}>
          I build scalable modern infrastructure using DevOps tools like Docker, GitHub Actions, 
          AWS EC2, Nginx, Linux & CI/CD pipelines.  
          This portfolio is fully automated and deployed through Docker & GitHub Actions.
        </p>

        {/* Skills Section */}
        <div style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#161b22",
          borderRadius: "10px",
        }}>
          <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>🚀 Skills</h3>
          <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
            <li>🐳 Docker & Containerization</li>
            <li>⚙️ CI/CD using GitHub Actions</li>
            <li>☁️ AWS (EC2, S3, Networking)</li>
            <li>🖥 Linux, Shell Scripting, Server Setup</li>
            <li>🌐 Nginx, Reverse Proxy, Hosting</li>
            <li>🛠 Git, SSH, Automation</li>
          </ul>
        </div>

        {/* Projects */}
        <div style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#161b22",
          borderRadius: "10px",
        }}>
          <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>📂 Featured Projects</h3>
          
          <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
            <li><b>🌐 DevOps Portfolio</b> — Docker + Nginx + EC2 + CI/CD Automated Deployments</li>
            <li><b>🔄 GitHub Actions Pipeline</b> — Full automation with SSH deploy</li>
            <li><b>☁️ AWS Hosting Setup</b> — Secure production server deployed on EC2</li>
          </ul>
        </div>

        {/* Contact */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h3 style={{ fontSize: "24px" }}>📬 Contact</h3>
          <p style={{ fontSize: "18px", color: "#8b949e" }}>
            Email: <b>nilaychavhan@gmail.com</b>
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
