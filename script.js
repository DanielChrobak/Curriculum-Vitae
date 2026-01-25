// Data
const DATA = {
  phrases: ["Full Stack Developer", "Aspiring Network Engineer", "Systems Enthusiast", "Problem Solver"],
  tech: [
    ["fab fa-python", "Python"], ["fas fa-flask", "Flask"], ["fab fa-js", "JavaScript"],
    ["fas fa-database", "SQL"], ["fas fa-server", "Server Management"], ["fab fa-git-alt", "Git"],
    ["fas fa-microchip", "ESP32/Arduino"], ["fas fa-network-wired", "Networking"],
    ["fas fa-code", "C++"], ["fas fa-terminal", "PowerShell"], ["fas fa-desktop", "Virtualization"]
  ],
  experience: [
    {
      title: "Wireless Revenue", role: "Founder & Developer", date: "2025 - Present",
      desc: "Founded a wireless infrastructure deployment venture, developing the technical systems and web platform to support commercial WiFi deployments.",
      items: [
        "Developed Flask-based management dashboard for network monitoring and partner coordination",
        "Learning enterprise wireless network design including site surveys and RF planning",
        "Building partnerships with local businesses for infrastructure deployment opportunities",
        "Gaining hands-on experience with router, switch, and access point configuration"
      ]
    },
    {
      title: "Discord Technical Communities", role: "Community Contributor & Mentor", date: "2019 - Present",
      desc: "Active member and contributor in multiple online technical communities focused on networking, server management, and web development.",
      items: [
        "Help community members troubleshoot network connectivity and configuration issues",
        "Share knowledge on Flask web development, database design, and deployment",
        "Create technical documentation and guides for common problems",
        "Assist with server hardware selection and self-hosted infrastructure questions"
      ]
    },
    {
      title: "Self-Hosted Infrastructure", role: "Personal Projects & Learning", date: "2020 - Present",
      desc: "Building and managing personal server infrastructure for development, learning, and running various services.",
      items: [
        "Configure and maintain Dell PowerEdge server hardware",
        "Deploy game servers, web applications, and development environments",
        "Experiment with network segmentation, VLANs, and firewall rules",
        "Implement monitoring and backup solutions for self-hosted services"
      ]
    }
  ],
  projects: [
    {
      id: "slipstream", icon: "fas fa-desktop", title: "SlipStream",
      tech: ["C++", "WebRTC", "AV1", "FFmpeg", "JavaScript", "WebGL2"],
      desc: "A high-performance, low-latency remote desktop solution using WebRTC for real-time streaming with AV1 hardware encoding. Enables secure screen sharing over local networks with sub-50ms latency using GPU acceleration (NVIDIA NVENC, Intel QSV, AMD AMF).",
      items: [
        "Windows Graphics Capture API for efficient screen capture",
        "Hardware-accelerated AV1 encoding with automatic fallback to software",
        "WebRTC transport with DTLS encryption for secure peer-to-peer streaming",
        "Full input control including mouse, keyboard, and touch gestures",
        "Multi-monitor support with dynamic switching during sessions",
        "WebGL2 renderer for smooth video playback in the browser client"
      ],
      github: "https://github.com/DanielChrobak/SlipStream"
    },
    {
      id: "gpu", icon: "fas fa-microchip", title: "GPU Virtualization Manager",
      tech: ["PowerShell", "Hyper-V", "GPU-PV", "Windows ADK", "TPM 2.0", "UEFI"],
      desc: "A comprehensive PowerShell tool for GPU partitioning (GPU-PV) in Hyper-V virtual machines. Simplifies the process of sharing your GPU with VMs for gaming, development, machine learning, and other GPU-accelerated workloads. Supports NVIDIA, AMD, and Intel GPUs.",
      items: [
        "Automated VM creation with presets for Gaming, Development, and ML Training workloads",
        "GPU partitioning with configurable resource allocation (1-100%) for VRAM, encode/decode, and compute",
        "Automatic driver injection into VM disks with host driver synchronization",
        "Automated Windows installation with unattended ISO creation via Windows ADK",
        "Complete VM lifecycle management with TPM 2.0 and Secure Boot support"
      ],
      github: "https://github.com/DanielChrobak/Hyper-V-GPU-Manager"
    }
  ],
  skills: [
    { icon: "fas fa-code", title: "Programming & Development", tags: ["Python", "Flask", "JavaScript", "C++", "HTML/CSS", "SQL", "PowerShell", "REST APIs"] },
    { icon: "fas fa-server", title: "Server & Infrastructure", tags: ["Linux Administration", "Windows Server", "Hyper-V", "Virtualization", "Server Hardware", "CloudFlare"] },
    { icon: "fas fa-network-wired", title: "Networking Fundamentals", tags: ["TCP/IP", "VLANs", "DNS", "DHCP", "Firewall Configuration", "Network Security"] },
    { icon: "fas fa-database", title: "Database & Web Frameworks", tags: ["SQLite", "MySQL", "SQLAlchemy", "Bootstrap", "WebRTC", "Socket.IO"] },
    { icon: "fas fa-microchip", title: "Embedded & IoT", tags: ["ESP32", "Arduino", "LoRa", "Sensor Integration", "Hardware Prototyping"] },
    { icon: "fas fa-tools", title: "Tools & Technologies", tags: ["Git", "FFmpeg", "CMake", "vcpkg", "Visual Studio", "VS Code"] }
  ],
  certs: {
    "Cybersecurity": { icon: "fas fa-shield-alt", items: [
      { name: "Cisco Certified Support Technician Cybersecurity", date: "April 2024", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=515&cvid=KKPh3zgIUhL30nBtJ3xnSA==" },
      { name: "Information Technology Specialist in Cybersecurity", date: "April 2024", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=494&cvid=s9tL9eqrS6YCY2B2XJ4ydg==" },
      { name: "Information Technology Specialist in Network Security", date: "April 2024", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=465&cvid=L/gEYw/ZEyVKrd1zzrIPLg==" }
    ]},
    "Networking": { icon: "fas fa-network-wired", items: [
      { name: "Information Technology Specialist in Networking", date: "February 2024", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=464&cvid=y6dFmKCxy7xBRH7eQuc0dw==" }
    ]},
    "Web Development": { icon: "fas fa-code", items: [
      { name: "Information Technology Specialist in HTML5 Application Development", date: "April 2024", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=474&cvid=jzcDHTlwrMkLjbnFc+fR2A==" },
      { name: "Information Technology Specialist in JavaScript", date: "April 2024", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=469&cvid=nM5ctPEtgRU21fFYH0PUhg==" },
      { name: "Information Technology Specialist in HTML and CSS", date: "April 2023", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=468&cvid=xlOC5T0XIRBMLJ1AZmBClw==" }
    ]},
    "Programming Languages": { icon: "fas fa-laptop-code", items: [
      { name: "Information Technology Specialist in Java", date: "April 2024", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=472&cvid=lZX9HAYn2P3LM07Rhor1tQ==" },
      { name: "Information Technology Specialist in Python", date: "May 2023", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=471&cvid=Hrcz+nby2V6GGqDAbL8R0w==" }
    ]},
    "CAD & Design": { icon: "fas fa-drafting-compass", items: [
      { name: "Autodesk Certified User: Inventor - Imperial", date: "March 2023", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=151&cvid=oouVIRv1Yjh4q4zkboRPPg==" },
      { name: "Autodesk Certified User: Revit for Architecture - Imperial", date: "April 2022", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=199&cvid=px+7oJRYbO2svjN9kfWU5A==" },
      { name: "Autodesk Certified User: AutoCAD", date: "October 2021", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=150" }
    ]},
    "Microsoft Office": { icon: "fas fa-file-powerpoint", items: [
      { name: "Microsoft PowerPoint (Office 2019)", date: "March 2022", url: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=421&cvid=cFwbxuvqCwaGNAzZAuw39w==" }
    ]}
  },
  expertise: [
    { icon: "fas fa-video", title: "Real-Time Streaming & WebRTC", desc: "Deep interest in low-latency video streaming, WebRTC protocols, and hardware video encoding. Built SlipStream to explore the full stack from screen capture to browser rendering with a focus on minimizing latency." },
    { icon: "fas fa-desktop", title: "GPU Virtualization & System Architecture", desc: "Experience with GPU partitioning, hypervisor configuration, and virtual machine optimization. Developed tools that enable advanced GPU virtualization capabilities on consumer hardware." },
    { icon: "fas fa-users", title: "Technical Community Involvement", desc: "Active contributor in Discord technical communities, helping others with networking, web development, and infrastructure questions. Enjoy sharing knowledge and learning from community discussions." },
    { icon: "fas fa-server", title: "Self-Hosted Infrastructure", desc: "Hands-on experience with enterprise server hardware, virtualization platforms, and self-hosted services. Enjoy building and maintaining personal infrastructure for development and learning." },
    { icon: "fas fa-car", title: "Automotive Technology", desc: "Hands-on experience with automotive maintenance, repair, and modification. Skilled in diagnostics, engine maintenance, and basic performance upgrades." }
  ],
  modal: {
    slipstream: {
      title: "SlipStream - WebRTC Remote Desktop",
      sections: [
        { h: "Overview", p: "SlipStream is a high-performance, low-latency remote desktop solution using WebRTC for real-time streaming with AV1 hardware encoding. It enables secure, low-latency screen sharing over local networks using modern web technologies." },
        { h: "Key Features", ul: ["AV1 Hardware Encoding - Leverages GPU encoders (NVIDIA NVENC, Intel QSV, AMD AMF)", "Ultra-Low Latency - Optimized for sub-50ms end-to-end latency", "WebRTC Transport - Encrypted peer-to-peer streaming", "System Audio - Captures and streams via Opus codec", "Full Input Control - Mouse, keyboard, and touch support", "Multi-Monitor - Dynamic monitor switching", "Touch Gestures - Trackpad and direct touch modes", "PIN Authentication - Rate-limited for security"] },
        { h: "Architecture", diagram: `+-------------------------------------------------------------------+
|                         HOST (Server)                             |
+-------------------------------------------------------------------+
|  +-------------+    +-------------+    +-----------------------+  |
|  |   Screen    |--->|     AV1     |--->|       WebRTC          |  |
|  |   Capture   |    |   Encoder   |    |    Data Channel       |  |
|  +-------------+    +-------------+    +-----------+-----------+  |
|  +-------------+    +-------------+                |              |
|  |    Audio    |--->|    Opus     |----------------+              |
|  |   Capture   |    |   Encoder   |                |              |
|  +-------------+    +-------------+                |              |
|  +-------------+                                   |              |
|  |    Input    |<----------------------------------+              |
|  |   Handler   |                                                  |
|  +-------------+                                                  |
+-------------------------------------------------------------------+
                                |  DTLS/SRTP Encrypted
                                v
+-------------------------------------------------------------------+
|                        CLIENT (Browser)                           |
+-------------------------------------------------------------------+
|  +-------------+    +-------------+    +-----------------------+  |
|  |   WebRTC    |--->|    AV1      |--->|       WebGL2          |  |
|  |   Receive   |    |   Decoder   |    |      Renderer         |  |
|  +-------------+    +-------------+    +-----------------------+  |
|  +-------------+    +-------------+                               |
|  |    Audio    |<---|    Opus     |                               |
|  |   Playback  |    |   Decoder   |                               |
|  +-------------+    +-------------+                               |
|  +-------------+                                                  |
|  |    Input    |---> (sent to server via WebRTC)                  |
|  |   Capture   |                                                  |
|  +-------------+                                                  |
+-------------------------------------------------------------------+` },
        { h: "Technical Stack", ul: ["C++ with Visual Studio 2022", "Windows Graphics Capture API", "FFmpeg for AV1 encoding", "libdatachannel for WebRTC", "Opus codec for audio", "WebGL2 for rendering", "vcpkg for dependencies"] }
      ]
    },
    gpu: {
      title: "GPU Virtualization Manager",
      sections: [
        { h: "Overview", p: "A comprehensive PowerShell tool for GPU partitioning (GPU-PV) in Hyper-V virtual machines. Supports NVIDIA, AMD, and Intel GPUs on Windows 10/11 Pro, Enterprise, or Education editions." },
        { h: "Key Features", ul: ["Automated VM Creation - Presets for Gaming, Development, ML Training", "GPU Partitioning - Allocate GPU resources (1-100%)", "Driver Injection - Auto-inject host GPU drivers", "Automated Windows Installation - Unattended ISO creation", "VM Management - Interactive terminal UI", "Security - TPM 2.0, Secure Boot support"] },
        { h: "GPU Partitioning Details", p: "Allocates GPU resources using Memory-Mapped I/O (MMIO) space. Low MMIO: 1GB, High MMIO: 32GB. Supports sharing a single GPU between multiple VMs." },
        { h: "Use Cases", p: "Enable GPU-accelerated VMs for gaming, machine learning, CAD workstations. Create remote gaming rigs, multi-user systems, and development environments with GPU acceleration." }
      ]
    }
  }
};

// Utility
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => p.querySelectorAll(s);
const html = (el, content) => el.innerHTML = content;

// Typing Animation
let phraseIdx = 0, charIdx = 0, deleting = false;
const typingEl = $('.typing-text');

function type() {
  const phrase = DATA.phrases[phraseIdx];
  typingEl.textContent = phrase.substring(0, deleting ? charIdx-- : ++charIdx);

  let speed = deleting ? 50 : 100;
  if (!deleting && charIdx === phrase.length) { speed = 2000; deleting = true; }
  else if (deleting && charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % DATA.phrases.length; speed = 500; }

  setTimeout(type, speed);
}

// Render Functions
function renderTech() {
  const track = $('#techTrack');
  const items = DATA.tech.map(([icon, name]) => `<div class="tech-item"><i class="${icon}"></i><span>${name}</span></div>`).join('');
  html(track, items + items);

  let pos = 0;
  (function scroll() {
    pos = (pos + 0.5) % (track.offsetWidth / 2);
    track.style.transform = `translateX(-${pos}px)`;
    requestAnimationFrame(scroll);
  })();
}

function renderTimeline() {
  html($('#timeline'), DATA.experience.map(e => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="card">
        <div class="card-header">
          <div><h3 class="card-title">${e.title}</h3><p class="card-subtitle">${e.role}</p></div>
          <span class="card-date">${e.date}</span>
        </div>
        <p class="card-description">${e.desc}</p>
        <ul class="list-styled">${e.items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
    </div>
  `).join(''));
}

function renderProjects() {
  html($('#projects-container'), DATA.projects.map(p => `
    <div class="project-card card">
      <div class="project-image"><i class="${p.icon}"></i></div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <div class="tech-badges">${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
        <p class="card-description">${p.desc}</p>
        <ul class="list-styled">${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
        <div class="project-links">
          <button class="btn btn-primary" onclick="openModal('${p.id}')"><i class="fas fa-expand-alt"></i> View Details</button>
          <a href="${p.github}" target="_blank" class="btn btn-secondary"><i class="fab fa-github"></i> GitHub</a>
        </div>
      </div>
    </div>
  `).join(''));
}

function renderSkills() {
  html($('#skills-grid'), DATA.skills.map(s => `
    <div class="card">
      <h3 class="card-title"><i class="${s.icon}"></i> ${s.title}</h3>
      <div class="skill-tags">${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
    </div>
  `).join(''));
}

function renderCerts() {
  html($('#certs-container'), Object.entries(DATA.certs).map(([cat, data]) => `
    <div class="cert-category">
      <h3 class="cert-title"><i class="${data.icon}"></i>${cat}</h3>
      <div class="cert-list">
        ${data.items.map(c => `
          <div class="cert-item">
            <div class="cert-info"><p class="cert-name">${c.name}</p><span class="card-date">${c.date}</span></div>
            <a href="${c.url}" target="_blank" class="cert-verify"><i class="fas fa-certificate"></i> Verify</a>
          </div>
        `).join('')}
      </div>
    </div>
  `).join(''));
}

function renderExpertise() {
  html($('#expertise-container'), DATA.expertise.map(e => `
    <div class="expertise-card card">
      <div class="expertise-icon"><i class="${e.icon}"></i></div>
      <div><h3 class="expertise-title">${e.title}</h3><p class="card-description">${e.desc}</p></div>
    </div>
  `).join(''));
}

// Modal
function openModal(type) {
  const data = DATA.modal[type];
  $('#modalTitle').textContent = data.title;
  html($('#modalBody'), data.sections.map(s => `
    <div class="modal-section">
      <h3>${s.h}</h3>
      ${s.p ? `<p>${s.p}</p>` : ''}
      ${s.ul ? `<ul class="list-styled">${s.ul.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
      ${s.diagram ? `<div class="architecture-diagram"><pre>${s.diagram}</pre></div>` : ''}
    </div>
  `).join(''));
  $('#modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modal').classList.remove('active');
  document.body.style.overflow = '';
}

// Navigation
function initNav() {
  const links = $$('.nav-link');
  const sections = $$('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (pageYOffset >= s.offsetTop - 200) current = s.id; });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href').substring(1) === current);
    });
  });
}

// Mobile Menu
function initMobile() {
  const toggle = $('.mobile-menu-toggle');
  const sidebar = $('.sidebar');

  toggle.addEventListener('click', () => sidebar.classList.toggle('active'));
  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) sidebar.classList.remove('active');
  });
}

// Particles
function initParticles() {
  const canvas = $('#particles-canvas');
  const ctx = canvas.getContext('2d');

  const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
  resize();
  addEventListener('resize', resize);

  const particles = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    r: Math.random() * 2
  }));

  (function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = '#4d9d9d';
      ctx.fill();
    });
    requestAnimationFrame(animate);
  })();
}

// Events
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Init
document.addEventListener('DOMContentLoaded', () => {
  type();
  renderTech();
  renderTimeline();
  renderProjects();
  renderSkills();
  renderCerts();
  renderExpertise();
  initNav();
  initMobile();
  initParticles();
});
