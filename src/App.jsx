import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const Prompt = () => (
  <span className="cli-prompt">
    <span className="cli-user">nilay@soc</span>:<span className="cli-path">~</span>$
  </span>
);

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      id: 1,
      type: 'output',
      content: (
        <div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '1rem' }}>
            <img src="/profile.png" alt="Nilay Chavhan" className="profile-pic" />
            <div>
              <h1 style={{ marginBottom: '0.5rem', color: '#fff', fontSize: '2.5rem' }}>Nilay Chavhan</h1>
              <div style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                [+] Security Operations & Network Engineer
              </div>
              <p style={{ maxWidth: '600px', color: 'var(--text-muted)' }}>
                Type <span style={{ color: 'var(--accent)' }}>help</span> to see available commands, or explore <span style={{ color: 'var(--accent)' }}>architecture</span> for the SOC/NOC pipeline.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]);

  const endOfTerminalRef = useRef(null);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input on load and when clicking terminal
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Background particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height, particles;
    let animationFrameId;

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = [];
      
      const particleCount = Math.min(Math.floor(width * height / 15000), 80);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
      
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', init);
    init();
    draw();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      
      // Add user command to history
      const newHistory = [...history, { id: Date.now(), type: 'command', content: input }];
      
      let outputContent = null;

      switch (cmd) {
        case 'help':
          outputContent = (
            <div>
              <p>Available commands:</p>
              <ul className="regular-list" style={{ marginTop: '0.5rem' }}>
                <li><strong style={{ color: 'var(--accent)' }}>about</strong> - Display professional summary</li>
                <li><strong style={{ color: 'var(--accent)' }}>experience</strong> - List work experience</li>
                <li><strong style={{ color: 'var(--accent)' }}>projects</strong> - View major engineering projects</li>
                <li><strong style={{ color: 'var(--accent)' }}>architecture</strong> - View SOC/NOC Alert Automation & Resilient Relay Pipeline</li>
                <li><strong style={{ color: 'var(--accent)' }}>skills</strong> - Show technical skills</li>
                <li><strong style={{ color: 'var(--accent)' }}>education</strong> - Show certs and education</li>
                <li><strong style={{ color: 'var(--accent)' }}>contact</strong> - Get contact information</li>
                <li><strong style={{ color: 'var(--accent)' }}>clear</strong> - Clear the terminal screen</li>
              </ul>
            </div>
          );
          break;
        case 'about':
          outputContent = (
            <div className="glass-card">
              <p style={{ marginBottom: '1rem' }}>I'm a Security Operations & Network Engineer working at the intersection of firewall operations, security monitoring, threat detection, and resilient infrastructure automation. At Integrated Infosec India, my daily work spans Wazuh SIEM 4.x, LibreNMS, Sophos Central EDR, and hardened Postfix/OpenDKIM alert relay infrastructure.</p>
              <p>On the network side, I administer FortiGate, Sophos Firewall, SonicWall, and FortiManager across multiple client sites. I also run a self-built EVE-NG lab on GCP for BGP, OSPF, FortiGate, and zero-trust simulations — and I architect automated incident response pipelines with Microsoft 365 and helpdesk ticketing integrations.</p>
            </div>
          );
          break;
        case 'experience':
          outputContent = (
            <div className="experience-grid">
              <div className="glass-card">
                <div className="experience-header">
                  <div>
                    <h3>Network Security Engineer</h3>
                    <span style={{ color: 'var(--accent)' }}>@ Integrated Infosec India</span>
                  </div>
                  <div style={{ color: 'var(--text-muted)' }}>[ May 2026 - Present ]</div>
                </div>
                <ul className="regular-list">
                  <li>Operate Wazuh SIEM in production — built custom detection rules for FortiGate syslog and Sophos Central data sources; triage severity-flagged alerts.</li>
                  <li>Manage Sophos Central EDR across client endpoints — coordinate incident response, and track remediation.</li>
                  <li>Deploy and operate Squid SSL-Bump proxy on Ubuntu for HTTPS inspection, HSTS/QUIC browser exceptions.</li>
                  <li>Administer FortiGate, Sophos Firewall, SonicWall, and Palo Alto daily; manage VPN & policy via FortiManager.</li>
                  <li>Configure IPsec site-to-site VPNs, SD-WAN, BGP, and ADVPN for multi-site connectivity.</li>
                </ul>
              </div>
              <div className="glass-card">
                <div className="experience-header">
                  <div>
                    <h3>Associate</h3>
                    <span style={{ color: 'var(--accent)' }}>@ Cinépolis India</span>
                  </div>
                  <div style={{ color: 'var(--text-muted)' }}>[ April 2025 - August 2025 ]</div>
                </div>
                <ul className="regular-list">
                  <li>Resolved daily incidents: POS connectivity failures, CCTV outages, IP/ACL conflicts, and network infrastructure faults.</li>
                  <li>Installed and configured routers, switches, and firewalls; managed web/content filtering.</li>
                </ul>
              </div>
            </div>
          );
          break;
        case 'projects':
          outputContent = (
            <div className="projects-grid">
              <div className="glass-card" style={{ border: '1px solid var(--accent)', boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 style={{ color: 'var(--accent)', margin: 0 }}>[01] SOC/NOC Alert Automation & Resilient Relay Pipeline</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', background: 'rgba(56, 189, 248, 0.15)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid var(--accent)' }}>★ Featured Architecture</span>
                </div>
                <p style={{ color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  End-to-end incident dispatch pipeline unifying threat alerts (Wazuh SIEM 4.x & FortiGate) and network monitoring (LibreNMS) into automated helpdesk ticketing via Microsoft 365.
                </p>
                <ul className="regular-list">
                  <li><strong>Hardened Postfix Relay & OpenDKIM:</strong> Containerized Postfix hub with cryptographic OpenDKIM signing and persistent volume mounts (`/var/ii/keys`) ensuring zero-downtime key rotation and spam-free delivery.</li>
                  <li><strong>Microsoft 365 EOP Integration:</strong> Configured inbound authenticated connectors, TLS enforcement, and automatic incident routing into Frappe/osTicket.</li>
                  <li><strong>Synthetic Canary Heartbeat Monitoring:</strong> Automated end-to-end test probe executing every 15 minutes to guarantee silent relay or DNS failures are detected before real security incidents are lost.</li>
                  <li><strong>LibreNMS Anti-Flapping Hysteresis:</strong> Enforced 300s alert delay windows and ticketing entity deduplication to eliminate notification storms and engineer alert fatigue.</li>
                </ul>
                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="skill-tag" style={{ borderColor: 'var(--accent)' }}>Postfix & OpenDKIM</span>
                  <span className="skill-tag">Docker Compose</span>
                  <span className="skill-tag">Wazuh SIEM 4.x</span>
                  <span className="skill-tag">LibreNMS NOC</span>
                  <span className="skill-tag">Microsoft 365 EOP</span>
                  <span className="skill-tag">Canary Probes</span>
                </div>
              </div>
              <div className="glass-card">
                <h3>[02] Wazuh SIEM Deployment & SOC Ops</h3>
                <ul className="regular-list">
                  <li>Deployed Wazuh 4.14 on GCP (Ubuntu 24.04) using Docker.</li>
                  <li>Performed threat hunting, log analysis, rule tuning, and incident analysis.</li>
                  <li>Investigated M365 Add-MailboxPermission and malware.</li>
                </ul>
              </div>
              <div className="glass-card">
                <h3>[03] M365 Integration & Monitoring</h3>
                <ul className="regular-list">
                  <li>Worked with Microsoft 365 audit logs.</li>
                  <li>Investigated Exchange mailbox permission changes.</li>
                </ul>
              </div>
              <div className="glass-card">
                <h3>[04] Sophos Central SIEM Integration</h3>
                <ul className="regular-list">
                  <li>Configured Sophos Central API integration with Wazuh.</li>
                  <li>Worked with OAuth and Python scripts for API access.</li>
                </ul>
              </div>
              <div className="glass-card">
                <h3>[05] FortiGate VPN Troubleshooting</h3>
                <ul className="regular-list">
                  <li>Diagnosed IKEv2 Dial-up VPN issues.</li>
                  <li>Resolved LDAP authentication problems by changing EAP methods.</li>
                </ul>
              </div>
              <div className="glass-card">
                <h3>[06] FortiAnalyzer Deployment</h3>
                <ul className="regular-list">
                  <li>Installed/configured FortiAnalyzer VM on Ubuntu using KVM.</li>
                  <li>Managed QCOW2 images, bridge networking, and libvirt.</li>
                </ul>
              </div>
            </div>
          );
          break;
        case 'architecture':
        case 'soc':
          outputContent = (
            <div className="glass-card">
              <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>SOC/NOC Alert Automation - High Level Architecture</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                End-to-End Threat Detection, Cryptographic Mail Relay, and Helpdesk Incident Pipeline
              </p>
              <pre style={{ 
                background: 'rgba(2, 6, 23, 0.8)', 
                padding: '1rem', 
                borderRadius: '6px', 
                border: '1px solid var(--border)', 
                color: 'var(--accent)', 
                fontSize: '0.82rem',
                overflowX: 'auto',
                lineHeight: '1.4',
                marginBottom: '1rem'
              }}>
{`+--------------------------------------------------------------------------+
|  1. CLIENT ENVIRONMENTS & TELEMETRY GENERATION                           |
|     FortiGate (Syslog:514) | Wazuh Agents | LibreNMS (SNMP) | Endpoints  |
+------------------------------------+-------------------------------------+
                                     | (Alert Submissions / TLS)
                                     v
+------------------------------------+-------------------------------------+
|  2. CENTRAL SECURITY INFRASTRUCTURE                                      |
|     [Dockerized Postfix Relay Hub (Port 1587)]                            |
|       - OpenDKIM Asymmetric Signing (RSA-256)                            |
|       - Persistent Host Volume Bind Mounts (/var/ii/keys)                |
|       - Subnet-Enforced Relay ACLs & Reboot-Proof Compose Spec           |
+------------------------------------+-------------------------------------+
                                     | (Authenticated, Signed SMTP Transit)
                                     v
+------------------------------------+-------------------------------------+
|  3. CLOUDMESSAGING & TICKETING PIPELINE                                  |
|     Microsoft 365 Exchange Online (Inbound Connector / SPF+DKIM Valid)   |
|       --> Helpdesk Webhook / Ingestion (osTicket / Frappe Helpdesk)      |
+------------------------------------+-------------------------------------+
                                     |
               +---------------------+---------------------+
               | RESILIENCE & FAILURE DEFENSE CONTROLS     |
               +-------------------------------------------+
               | [A] Synthetic Canary Heartbeat (15m Probe)|
               |     Prevents silent relay failure         |
               | [B] LibreNMS Anti-Flap Hysteresis (300s)  |
               |     Prevents alert storms & ticket floods |
               +-------------------------------------------+`}
              </pre>
              <ul className="regular-list">
                <li><strong>Cryptographic Authentication:</strong> Fully authenticated via SPF, OpenDKIM, and TLS submission to prevent spam/junk quarantine in M365.</li>
                <li><strong>Reboot & Power-Cut Immunity:</strong> Declarative Docker Compose V2 stack with persistent spool and key storage.</li>
                <li><strong>Active Health Probing:</strong> Automated synthetic canary probes pinging the full lifecycle every 15 minutes.</li>
              </ul>
            </div>
          );
          break;
        case 'skills':
          outputContent = (
            <div className="skills-container">
              <span className="skill-tag" style={{ borderColor: 'var(--accent)' }}>SOC/NOC Alert Automation</span>
              <span className="skill-tag" style={{ borderColor: 'var(--accent)' }}>Postfix & OpenDKIM Relay</span>
              <span className="skill-tag">Wazuh SIEM 4.x</span>
              <span className="skill-tag">LibreNMS NOC</span>
              <span className="skill-tag">Microsoft 365 Security</span>
              <span className="skill-tag">FortiGate & FortiAnalyzer</span>
              <span className="skill-tag">Sophos Central EDR</span>
              <span className="skill-tag">Docker Compose</span>
              <span className="skill-tag">Canary Probes & Resiliency</span>
              <span className="skill-tag">Linux (Ubuntu)</span>
              <span className="skill-tag">Python & Bash</span>
              <span className="skill-tag">VPN (IKEv2/IPSec)</span>
              <span className="skill-tag">Networking (BGP, OSPF)</span>
              <span className="skill-tag">Threat Hunting & Triage</span>
            </div>
          );
          break;
        case 'education':
          outputContent = (
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div className="glass-card" style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>[ Certifications ]</h3>
                <ul className="regular-list">
                  <li>Introduction to the Threat Landscape 3.0</li>
                  <li>AWS Certifications</li>
                  <li>Fortinet FortiGate 7.6 Operator</li>
                  <li>Getting Started in Cybersecurity 3.0</li>
                  <li>Fortinet Certified Fundamentals Cybersecurity</li>
                </ul>
              </div>
              <div className="glass-card" style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>[ Education ]</h3>
                <ul className="regular-list">
                  <li><strong>M.Tech Computer Engineering</strong><br/>Chhatrapati Shivaji Maharaj University (July 2026)</li>
                  <li><strong>B.E. Computer Engineering</strong><br/>University of Mumbai (Nov 2022 - July 2025)</li>
                  <li><strong>Diploma of Education, Computer Engineering</strong><br/>MSBTE</li>
                </ul>
              </div>
            </div>
          );
          break;
        case 'contact':
          outputContent = (
            <div className="glass-card">
              <p style={{ marginBottom: '1rem' }}>
                <span style={{ color: 'var(--accent)' }}>Status:</span> LISTENING on port 443...<br/>
                Awaiting inbound connections.
              </p>
              <ul className="regular-list">
                <li>Email: <a href="mailto:nilaychavhan@gmail.com" style={{ color: '#fff' }}>nilaychavhan@gmail.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/nilay-chavhan-272271188" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>linkedin.com/in/nilay-chavhan-272271188</a></li>
                <li>Phone: <a href="tel:8669226005" style={{ color: '#fff' }}>8669226005</a></li>
              </ul>
            </div>
          );
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          break; // Do nothing for empty enter
        default:
          outputContent = (
            <span className="error-text">bash: command not found: {cmd}. Type 'help' for available commands.</span>
          );
      }

      if (outputContent || cmd === '') {
        setHistory(prev => [
          ...prev, 
          { id: Date.now() + 1, type: 'output', content: outputContent }
        ]);
      }
      
      setInput('');
    }
  };

  return (
    <>
      <canvas id="bg-canvas" ref={canvasRef}></canvas>
      <div className="app-container" onClick={() => inputRef.current?.focus()}>
        
        <div className="terminal-window">
          {/* Mac-style Window Header */}
          <div className="terminal-header">
            <div className="terminal-button btn-red"></div>
            <div className="terminal-button btn-yellow"></div>
            <div className="terminal-button btn-green"></div>
            <div className="terminal-title">nilay@soc: ~/portfolio</div>
          </div>

          {/* Terminal Output Area */}
          <div className="terminal-content">
            
            {history.map((item) => (
              <div key={item.id}>
                {item.type === 'command' ? (
                  <div className="command-line">
                    <Prompt />
                    <span className="command-text">{item.content}</span>
                  </div>
                ) : (
                  item.content && <div className="command-output">{item.content}</div>
                )}
              </div>
            ))}

            {/* Current Input Line */}
            <div className="input-area">
              <Prompt />
              <input 
              ref={inputRef}
              type="text" 
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
          
          <div ref={endOfTerminalRef} />
        </div>
      </div>

    </div>
  </>
);
}

export default App;
