import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import profilePic from './assets/profile.jpg'

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
}

export default function App() {
  const [formStatus, setFormStatus] = useState(null)
  const [navScrolled, setNavScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const personalInfo = {
    name: "Nuwansara Gunaratne",
    role: "Software Development & QA Intern",
    location: "Gampola, Sri Lanka",
    education: "SLIATE — ATI Nawalapitiya (HNDIT, 2nd Year)",
    phone: "+94 78 461 4830",
    whatsapp: "94784614830",
    email: "nuwiix21@gmail.com",
    github: "https://github.com/nuwiix21",
    linkedin: "https://www.linkedin.com/in/nuwansara-gunaratne/"
  }

  const projects = [
    {
      id: "01",
      title: "Student Management System",
      category: "Desktop Enterprise Application",
      stack: ["C#", ".NET", "MySQL", "OOP", "QA Testing"],
      description: "An enterprise desktop solution engineered to manage student academic records, course enrollments, attendance tracking, and grading metrics. Designed using strict Object-Oriented Programming (OOP) principles, relational integrity, and automated software test cases.",
      highlights: [
        "Architected with relational MySQL database handling normalized student and course records.",
        "Engineered robust role-based access for academic administrators and instructors.",
        "Implemented thorough unit and system testing ensuring zero data corruption during bulk imports."
      ],
      link: "https://github.com/nuwiix21"
    },
    {
      id: "02",
      title: "Restaurant Management & POS Suite",
      category: "Multi-Tier Management Platform",
      stack: ["Java", "PHP", "C#", "MySQL", "CRUD Architecture"],
      description: "A multi-technology software system addressing end-to-end restaurant operational flows, including live table ordering, inventory replenishment, cashier billing, and historical sales auditing.",
      highlights: [
        "Built multi-tier CRUD architecture interfacing backend services with a MySQL relational database.",
        "Integrated dynamic bill computation with automatic tax, discount, and receipt generation logic.",
        "Designed modular architecture allowing plug-and-play expansion of reporting modules."
      ],
      link: "https://github.com/nuwiix21"
    },
    {
      id: "03",
      title: "Street 160 Commercial Web Platform",
      category: "Responsive Web Application",
      stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "Responsive UX"],
      description: "A production-grade commercial web platform engineered for a food and beverage business. Features high-performance responsive UI layouts, digital menu navigation, and direct customer inquiry channels.",
      highlights: [
        "Implemented clean, mobile-first responsive frontend architecture compatible across all modern viewports.",
        "Optimized asset loading and core web vitals for sub-second initial load speeds.",
        "Integrated direct inquiry workflows routing orders and table bookings directly to management."
      ],
      link: "https://github.com/nuwiix21"
    }
  ]

  const competencies = [
    {
      group: "Programming Languages",
      skills: ["PHP", "JavaScript (ES6+)", "C#", "Java", "SQL", "HTML5 & CSS3"]
    },
    {
      group: "Frameworks & Backend",
      skills: ["Laravel", "Bootstrap 5", "RESTful APIs", "React (Basics)", "Node.js (Basics)"]
    },
    {
      group: "Databases & DevOps",
      skills: ["MySQL", "Relational Database Design", "Git", "GitHub", "Postman", "Cisco Packet Tracer"]
    },
    {
      group: "Testing & Engineering Methodologies",
      skills: ["Manual Testing", "Test Case Design", "Bug Tracking & Reporting", "Object-Oriented Programming (OOP)", "Agile / Scrum"]
    }
  ]

  const milestones = [
    {
      period: "2026 — Present",
      role: "Seeking Software Development & QA Internship",
      company: "Open to Opportunities",
      description: "Actively seeking internship opportunities in Software Development and Quality Assurance (QA) to apply clean architecture, modern frameworks, and test-driven methodologies to mission-critical software systems."
    },
    {
      period: "2025",
      role: "Street 160 Commercial Web Project",
      company: "Client Project",
      description: "Architected, designed, and deployed a responsive commercial web platform. Focused on mobile accessibility, sub-second load times, and structured SEO practices."
    },
    {
      period: "2024",
      role: "Enterprise Desktop & Web Projects",
      company: "Software Development",
      description: "Developed and delivered database-driven management solutions using Java, C#, PHP, and MySQL with robust CRUD architecture and comprehensive QA validation."
    },
    {
      period: "2023 — Present",
      role: "Higher National Diploma in IT (HNDIT)",
      company: "SLIATE — ATI Nawalapitiya",
      description: "Second-year undergraduate specializing in Software Engineering, Relational Database Systems, Data Structures, Algorithms, and Computer Networking."
    }
  ]

  const certifications = [
    {
      title: "Exploring Networking with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      year: "2026",
      id: "CERT-NET-01"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2026",
      id: "CERT-SEC-02"
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      year: "2026",
      id: "CERT-AI-03"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      year: "2026",
      id: "CERT-NET-04"
    }
  ]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('sending')
    const form = e.target
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: "ade6176e-b9bc-47d8-aeb5-101744cb42d2",
        subject: `Portfolio Inquiry from ${form.name.value}`,
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      })
    })
      .then(res => res.json())
      .then(data => {
        setFormStatus(data.success ? 'success' : 'error')
        if (data.success) form.reset()
        setTimeout(() => setFormStatus(null), 5000)
      })
      .catch(() => {
        setFormStatus('error')
        setTimeout(() => setFormStatus(null), 5000)
      })
  }

  return (
    <div className="pro-layout">
      {/* ─── TOP FLOATING NAVIGATION BAR ───────────────────────────────── */}
      <motion.header 
        className={`nav-bar-wrapper ${navScrolled ? 'scrolled' : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="pro-nav">
          <a href="#" className="nav-logo">
            <span className="logo-symbol" />
            <span className="logo-text">Nuwansara Gunaratne</span>
          </a>

          <div className="nav-links-desktop">
            <a href="#about" className="nav-anchor">About</a>
            <a href="#experience" className="nav-anchor">Experience</a>
            <a href="#projects" className="nav-anchor">Projects</a>
            <a href="#skills" className="nav-anchor">Competencies</a>
            <a href="#certifications" className="nav-anchor">Certifications</a>
            <a href="#contact" className="nav-anchor">Contact</a>
          </div>

          <div className="nav-actions">
            <motion.a
              href="/nuwansara-cv.pdf"
              download="Nuwansara_Gunaratne_CV.pdf"
              className="btn-nav-resume"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Resume</span>
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>

            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-dropdown-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Competencies</a>
              <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a
                href="/nuwansara-cv.pdf"
                download="Nuwansara_Gunaratne_CV.pdf"
                className="mobile-resume-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Resume (PDF)
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="hero-pro">
        <div className="pro-container">
          <div className="hero-grid">
            <motion.div 
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="status-badge-inline" variants={fadeInUp}>
                <span className="badge-dot-live" />
                <span>Available for Software Development &amp; QA Internship</span>
              </motion.div>

              <motion.h1 className="hero-title-main" variants={fadeInUp}>
                Nuwansara Gunaratne
              </motion.h1>
              <motion.h2 className="hero-role-main" variants={fadeInUp}>
                Software Development &amp; QA Intern
              </motion.h2>

              <motion.p className="hero-lead-text" variants={fadeInUp}>
                Undergraduate Software Engineer based in Sri Lanka, focused on architecting robust backend systems, clean database models, and modern web applications with <strong className="text-bold">Laravel, PHP, C#, MySQL, and modern JavaScript</strong>.
              </motion.p>

              <motion.div className="hero-meta-row" variants={fadeInUp}>
                <span className="meta-item">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  {personalInfo.location}
                </span>
                <span className="meta-item">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                  {personalInfo.education}
                </span>
              </motion.div>

              <motion.div className="hero-cta-buttons" variants={fadeInUp}>
                <motion.a 
                  href="#projects" 
                  className="btn-solid-pro"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Projects</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="/nuwansara-cv.pdf"
                  download="Nuwansara_Gunaratne_CV.pdf"
                  className="btn-outline-pro"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Download CV (PDF)</span>
                </motion.a>
                <motion.a
                  href={`https://wa.me/${personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-pro"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>WhatsApp</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </motion.div>

              <motion.div className="hero-social-strip" variants={fadeInUp}>
                <span className="strip-label">Profiles:</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="strip-link">GitHub ↗</a>
                <span className="strip-dot">·</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="strip-link">LinkedIn ↗</a>
                <span className="strip-dot">·</span>
                <a href={`mailto:${personalInfo.email}`} className="strip-link">{personalInfo.email}</a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-portrait-col"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="portrait-card-wrapper">
                <img src={profilePic} alt={personalInfo.name} className="portrait-image-pro" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ─────────────────────────────────────────────── */}
      <section id="about" className="section-pro">
        <div className="pro-container">
          <motion.div 
            className="section-head-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="head-label">OVERVIEW</span>
            <h2 className="head-title">About &amp; Academic Focus</h2>
          </motion.div>

          <div className="about-split-layout">
            <motion.div 
              className="about-narrative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInLeft}
            >
              <p className="narrative-lead">
                I am a dedicated Information Technology undergraduate at SLIATE ATI Nawalapitiya, pursuing a Higher National Diploma in IT (HNDIT). My technical journey is anchored on engineering reliable, production-ready software solutions.
              </p>
              <p>
                Throughout my academic and independent work, I have focused on full-stack architecture — building scalable backend services using <strong className="text-bold">PHP and Laravel</strong>, desktop management suites with <strong className="text-bold">C# and Java</strong>, and responsive user interfaces with modern web standards.
              </p>
              <p>
                I place a strong emphasis on Software Quality Assurance (QA). By coupling disciplined software engineering with systematic manual testing, test case authoring, and bug tracking, I ensure that applications are secure, resilient, and performant.
              </p>
            </motion.div>

            <motion.div 
              className="about-stats-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.div className="stat-card-pro" variants={fadeInUp} whileHover={{ y: -4 }}>
                <span className="stat-value">2+</span>
                <span className="stat-title">Years Active Development</span>
                <p className="stat-caption">Hands-on full-stack web and desktop software</p>
              </motion.div>
              <motion.div className="stat-card-pro" variants={fadeInUp} whileHover={{ y: -4 }}>
                <span className="stat-value">10+</span>
                <span className="stat-title">Completed Projects</span>
                <p className="stat-caption">Enterprise management tools, systems, and websites</p>
              </motion.div>
              <motion.div className="stat-card-pro" variants={fadeInUp} whileHover={{ y: -4 }}>
                <span className="stat-value">04</span>
                <span className="stat-title">Cisco Certifications</span>
                <p className="stat-caption">Cybersecurity, AI, Packet Tracer, and Networking</p>
              </motion.div>
              <motion.div className="stat-card-pro" variants={fadeInUp} whileHover={{ y: -4 }}>
                <span className="stat-value">100%</span>
                <span className="stat-title">Engineering Discipline</span>
                <p className="stat-caption">Committed to testability, documentation, and clean code</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE & MILESTONES ────────────────────────────────────── */}
      <section id="experience" className="section-pro">
        <div className="pro-container">
          <motion.div 
            className="section-head-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="head-label">CAREER &amp; EDUCATION</span>
            <h2 className="head-title">Experience &amp; Milestones</h2>
          </motion.div>

          <motion.div 
            className="milestones-timeline-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="timeline-entry-pro"
                variants={fadeInUp}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
              >
                <div className="timeline-aside">
                  <span className="timeline-period-badge">{item.period}</span>
                </div>
                <div className="timeline-main">
                  <h3 className="timeline-role-title">{item.role}</h3>
                  <span className="timeline-company-name">{item.company}</span>
                  <p className="timeline-description-text">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ENGINEERING PROJECTS ──────────────────────────────────────── */}
      <section id="projects" className="section-pro">
        <div className="pro-container">
          <motion.div 
            className="section-head-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="head-label">ENGINEERING PORTFOLIO</span>
            <h2 className="head-title">Featured Projects</h2>
            <p className="head-description">
              Production-tested systems and platforms built with modern technology stacks, clean architecture, and complete version control.
            </p>
          </motion.div>

          <motion.div 
            className="projects-grid-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className="project-card-enterprise"
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="project-header-row">
                  <span className="project-category-tag">{project.category}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <span>Source Code</span>
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

                <h3 className="project-heading-title">{project.title}</h3>
                <p className="project-summary-text">{project.description}</p>

                <div className="project-highlights-box">
                  <span className="highlights-header">Technical Highlights:</span>
                  <ul className="highlights-list">
                    {project.highlights.map((point, hIdx) => (
                      <li key={hIdx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-stack-tags">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="stack-pill">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TECHNICAL COMPETENCIES ────────────────────────────────────── */}
      <section id="skills" className="section-pro">
        <div className="pro-container">
          <motion.div 
            className="section-head-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="head-label">TECHNICAL COMPETENCIES</span>
            <h2 className="head-title">Skills &amp; Technologies</h2>
          </motion.div>

          <motion.div 
            className="competencies-grid-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {competencies.map((comp, idx) => (
              <motion.div 
                key={idx} 
                className="competency-card-pro"
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <h3 className="competency-group-name">{comp.group}</h3>
                <div className="competency-items-wrap">
                  {comp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="competency-badge">
                      <span className="competency-dot" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ────────────────────────────────────────────── */}
      <section id="certifications" className="section-pro">
        <div className="pro-container">
          <motion.div 
            className="section-head-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="head-label">ACCREDITATIONS</span>
            <h2 className="head-title">Professional Certifications</h2>
          </motion.div>

          <motion.div 
            className="certifications-grid-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx} 
                className="cert-card-pro"
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="cert-id-tag">{cert.id}</span>
                <h3 className="cert-name-pro">{cert.title}</h3>
                <div className="cert-meta-row">
                  <span>{cert.issuer}</span>
                  <span>· {cert.year}</span>
                </div>
                <span className="cert-status-verified">Verified Credential</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ───────────────────────────────────────────── */}
      <section id="contact" className="section-pro contact-section-pro">
        <div className="pro-container">
          <motion.div 
            className="contact-card-pro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <div className="contact-info-col">
              <span className="head-label">GET IN TOUCH</span>
              <h2 className="contact-title-main">Let's Discuss an Opportunity</h2>
              <p className="contact-sub-text">
                I am actively seeking Software Development &amp; QA internship opportunities. If you have an open role or would like to review my technical background, please reach out directly.
              </p>

              <div className="contact-direct-channels">
                <a href={`mailto:${personalInfo.email}`} className="channel-item">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="channel-item">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  <span>WhatsApp: {personalInfo.phone}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="channel-item">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" /></svg>
                  <span>LinkedIn: in/nuwansara-gunaratne</span>
                </a>
              </div>
            </div>

            <div className="contact-form-col">
              <form onSubmit={handleFormSubmit} className="pro-message-form">
                <div className="form-row-pro">
                  <div className="field-pro">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="First and Last Name" required />
                  </div>
                  <div className="field-pro">
                    <label htmlFor="email">Work Email</label>
                    <input type="email" id="email" name="email" placeholder="name@company.com" required />
                  </div>
                </div>

                <div className="field-pro">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Brief details about the internship role, team, or inquiry..." required />
                </div>

                <motion.button 
                  type="submit" 
                  className="btn-pro-submit" 
                  disabled={formStatus === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus === 'sending' ? 'Sending...'
                   : formStatus === 'success' ? 'Message Sent Successfully'
                   : formStatus === 'error' ? 'Transmission Failed. Please Email Directly.'
                   : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────────── */}
      <footer className="footer-pro">
        <div className="pro-container footer-flex">
          <div className="footer-left">
            <span className="footer-brand">Nuwansara Gunaratne</span>
            <span className="footer-copy">© {new Date().getFullYear()} Nuwansara Gunaratne. All rights reserved.</span>
          </div>

          <div className="footer-right">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}