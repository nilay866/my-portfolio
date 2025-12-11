export default function Skills() {
  const skills = [
    "Docker", "AWS (EC2/S3/IAM)", "Linux", "GitHub Actions",
    "Nginx Reverse Proxy", "Networking", "Jenkins", "CI/CD Pipelines"
  ];

  return (
    <div className="section">
      <h3 className="section-title">Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">{skill}</div>
        ))}
      </div>
    </div>
  );
}
