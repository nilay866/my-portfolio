export default function Projects() {
  const projects = [
    {
      title: "DevOps Portfolio Deployment",
      desc: "React + Vite Portfolio deployed on AWS EC2 using Docker & CI/CD."
    },
    {
      title: "Jenkins CI/CD Pipeline",
      desc: "Automated build → test → deploy pipeline using DockerHub."
    },
    {
      title: "AWS Automation Scripts",
      desc: "Shell-based provisioning of EC2, IAM, S3."
    }
  ];

  return (
    <div className="section">
      <h3 className="section-title">Projects</h3>
      {projects.map((p, idx) => (
        <div key={idx} className="project-card">
          <h4>{p.title}</h4>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
