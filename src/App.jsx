import { useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f13] text-white font-sans px-6 py-10">

      {/* HERO SECTION */}
      <section className="text-center py-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
          Nilay Chavhan
        </h1>

        <p className="text-2xl text-gray-300 mt-4">
          DevOps Engineer • Cloud • Automation • CI/CD • SRE
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          I automate deployments, scale cloud infrastructure, and build reliable CI/CD pipelines.
          Passionate about cloud-native solutions and DevOps excellence.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            📄 Download Resume
          </a>
          <a
            href="mailto:nilaychavhan@gmail.com"
            className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            📬 Contact Me
          </a>
        </div>
      </section>

      {/* DEVOPS PIPELINE */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          🚀 DevOps Pipeline I Built
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "GitHub → Code Commit",
            "GitHub Actions → CI Build",
            "SCP to EC2 via SSH",
            "Docker + Nginx → LIVE Deploy",
          ].map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#141a21] border border-gray-700 rounded-xl hover:border-blue-500 shadow-md hover:scale-105 transition"
            >
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 mb-6 text-center">
          🛠 Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Docker",
            "Kubernetes",
            "AWS EC2",
            "Linux",
            "Jenkins",
            "GitHub Actions",
            "Nginx",
            "Terraform",
            "Prometheus",
            "Grafana",
            "Ansible",
            "CI/CD",
          ].map((tool) => (
            <div
              key={tool}
              className="p-4 bg-[#141a21] border border-gray-700 rounded-lg text-center hover:border-green-400 hover:scale-105 transition"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
          ⭐ Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#161b22] p-6 border border-gray-700 rounded-xl hover:scale-105 transition shadow-xl">
            <h3 className="text-xl font-bold mb-2">Production CI/CD Pipeline</h3>
            <p className="text-gray-400">
              Automated deployment pipeline using GitHub Actions, Docker, and AWS EC2.
              Every push → auto build → auto deploy → zero downtime.
            </p>
          </div>

          <div className="bg-[#161b22] p-6 border border-gray-700 rounded-xl hover:scale-105 transition shadow-xl">
            <h3 className="text-xl font-bold mb-2">Monitoring Stack</h3>
            <p className="text-gray-400">
              Setup Prometheus + Grafana monitoring stack for real-time system metrics.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-400 text-center mb-6">
          🎓 Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {["AWS Cloud Practitioner", "Docker & Kubernetes Mastery"].map((cert) => (
            <div
              key={cert}
              className="p-5 bg-[#141a21] border border-gray-700 rounded-xl hover:border-purple-400 transition"
            >
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 mt-16 py-6">
        © {new Date().getFullYear()} Nilay Chavhan • DevOps Engineer  
      </footer>
    </div>
  );
}
