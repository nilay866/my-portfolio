import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f14] to-[#0d1117] text-white px-6 py-10 font-sans">

      {/* Animated Header */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-pulse">
          Hi, I'm <span className="text-blue-500 drop-shadow-lg">Nilay Chavhan</span> 👋
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
          DevOps Engineer • Cloud Automation • CI/CD Specialist
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Automating deployments, scaling cloud infra & delivering reliable software pipelines.
        </p>
      </header>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-3xl font-semibold mb-6 text-blue-400">Tech Stack</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Docker",
            "Kubernetes",
            "AWS EC2",
            "GitHub Actions",
            "Jenkins",
            "Linux",
            "Nginx",
            "Terraform",
            "Prometheus",
            "Grafana",
            "Ansible",
            "CI/CD Pipelines"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-[#161b22] border border-gray-700 py-4 rounded-lg text-center 
              hover:border-blue-500 hover:scale-105 transition transform duration-300 shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Project Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-3xl font-semibold mb-6 text-green-400">
          🚀 Featured DevOps Project
        </h3>

        <div className="bg-[#161b22] border border-gray-700 p-8 rounded-xl shadow-xl hover:shadow-blue-500/20 transition">
          <h4 className="text-2xl font-bold mb-4">Automated CI/CD Deployment Pipeline</h4>

          <p className="text-gray-400 text-lg mb-6">
            Built a production-grade CI/CD pipeline using Docker, GitHub Actions and AWS EC2.
            Whenever I push code → GitHub Actions → builds → SCP → EC2 → Dockerized deployment.
          </p>

          <ul className="list-disc text-gray-300 pl-6 space-y-2">
            <li>Zero-downtime automated deployment</li>
            <li>Docker + Nginx container serving React app</li>
            <li>Auto-build on every Git push</li>
            <li>Secure SSH deployment using GitHub Secrets</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6 text-purple-400">Connect with Me</h3>

        <div className="flex justify-center gap-8 mt-4 text-xl">
          <a href="https://www.linkedin.com/in/nilay-chavhan-272271188"
             target="_blank"
             className="hover:text-blue-400 transition">LinkedIn</a>

          <a href="https://github.com/nilay866"
             target="_blank"
             className="hover:text-gray-300 transition">GitHub</a>

          <a href="mailto:nilaychavhan@gmail.com"
             className="hover:text-green-400 transition">Email</a>
        </div>
      </section>

      <footer className="text-center text-gray-600 mt-16">
        © {new Date().getFullYear()} Nilay Chavhan • DevOps Portfolio  
      </footer>
    </div>
  );
}
