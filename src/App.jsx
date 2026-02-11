import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <main>
      <nav className="topnav">
        <div className="nav-container">
          <div className="brand">
            <span className="brand-text">Sai</span>
            <span className="brand-accent">Portfolio</span>
          </div>
          <button className="hamburger" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            <span />
            <span />
            <span />
          </button>
          <div className={`links ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)} className="nav-link">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="nav-link">About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="nav-link">Skills</a>
            <a href="#work" onClick={() => setMenuOpen(false)} className="nav-link">Work</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="nav-link">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="nav-link">Contact</a>
            <a href="/leelasaisabbarapuresume.pdf" target="_blank" rel="noreferrer" className="nav-cta">Resume</a>
            <div className="nav-divider" />
            <div className="nav-icons">
              <a href="https://github.com/saisabbarapu" target="_blank" rel="noreferrer" aria-label="GitHub" className="nav-icon">📁</a>
              <a href="https://www.linkedin.com/in/sabbarapu-leela-sai-6096b7259/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="nav-icon">💼</a>
              <a href="mailto:leelasaisabbarapu22@gmail.com" aria-label="Email" className="nav-icon">✉️</a>
              <a href="tel:+918897074233" aria-label="Phone" className="nav-icon">📞</a>
            </div>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'dark' ? '🌙' : '☀️'}</button>
          </div>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="glow-bg left" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-media">
            <div className="avatar large">
              <img src="/profile.png" alt="Profile" />
            </div>
          </div>
          <div className="hero-text">
                    <p className="tag pill">Hello, I'm <span className="accent">Leela Sai Sabbarapu</span></p>
        <h1 className="title">Enthusiastic & Dedicated<br/>Software Engineer</h1>
        <p className="subtitle">Full-Stack Web Developer crafting dynamic, user-friendly applications</p>
        <p className="muted">
          Skilled in HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Python, and SQL. 
          I enjoy building dynamic, user-friendly applications and solving real-world problems through technology.
        </p>
        <div className="hero-actions">
          <a href="/leelasaisabbarapuresume.pdf" target="_blank" rel="noreferrer" className="cta-button">Download Resume</a>
          <a href="#contact" className="cta-button secondary">Get In Touch</a>
        </div>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <h2 className="section-title">About</h2>
        <p className="muted">
          I am currently pursuing my Master of Computer Applications (MCA) at Aditya University, with a strong interest in building a career in the IT industry. 
          I have hands-on skills in MERN stack technologies (MongoDB, Express.js, React.js, Node.js) along with HTML, CSS, JavaScript, Python, and SQL.
        </p>
        <p className="muted">
          I love building useful, beautiful interfaces with React and modern CSS. Focused on accessibility, performance, and polish.
        </p>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-banner">
          <p className="banner-text">
            I'm currently looking to join a <span className="accent">cross-functional</span> team
            that values improving people's lives through accessible design. 
            Passionate about creating innovative solutions and collaborating with talented developers 
            to build impactful applications that make a difference.
          </p>
        </div>
        <div className="skills-categories">
          <div className="skill-category">
            <h3 className="category-title">Frontend</h3>
            <div className="category-icons">
              <div className="tech-icon" title="HTML5">
                <span className="icon-text">HTML5</span>
              </div>
              <div className="tech-icon" title="CSS3">
                <span className="icon-text">CSS3</span>
              </div>
              <div className="tech-icon" title="JavaScript">
                <span className="icon-text">JS</span>
              </div>
              <div className="tech-icon" title="React.js">
                <span className="icon-text">React</span>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">Backend</h3>
            <div className="category-icons">
              <div className="tech-icon" title="Node.js">
                <span className="icon-text">Node</span>
              </div>
              <div className="tech-icon" title="Express.js">
                <span className="icon-text">Express</span>
              </div>
              <div className="tech-icon" title="Python">
                <span className="icon-text">Python</span>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">Database</h3>
            <div className="category-icons">
              <div className="tech-icon" title="MongoDB">
                <span className="icon-text">Mongo</span>
              </div>
              <div className="tech-icon" title="SQL">
                <span className="icon-text">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <h2 className="section-title">Work Experience</h2>
        <div className="grid">
          <article className="card glass">
            <div className="card-icon">💼</div>
            <h3>Software Engineering Intern</h3>
            <p className="muted">Technicalhub • May - June 2026</p>
            <p className="muted">Built ProjectHub - MERN stack platform for student project showcase with JWT auth, real-time features, and file uploads.</p>
          </article>
        </div>



        
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Highlighted Projects</h2>
        <article className="feature">
          <div className="feature-text">
            <h3>ProjectHub</h3>
            <p className="muted">
              Department Project Showcase Platform - A full-stack MERN application with glassmorphism UI that enables project submissions with image & PDF uploads, custom file-serving APIs, and creates a centralized digital archive for academic projects.
            </p>
            <div className="actions">
              <a href="https://github.com/saisabbarapu/PROJECTHUB" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </article>

        <article className="feature alt">
          <div className="feature-text">
            <h3>eduTrack</h3>
            <p className="muted">
              ML-based College Project Management Portal - A full-stack MERN + Python ML application that digitizes academic project workflows with guide approval system, admin analytics dashboard, delay prediction using Random Forest, and duplicate topic detection using NLP.
            </p>
            <div className="actions">
              <a href="https://github.com/saisabbarapu/eduTrack" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </article>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro muted center">
          I'm always interested in hearing about new opportunities and exciting projects. 
          Feel free to reach out through any of the channels below!
        </p>
        
        <div className="contact-grid">
          <a href="mailto:leelasaisabbarapu22@gmail.com" className="contact-card" aria-label="Email">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>leelasaisabbarapu22@gmail.com</p>
            <span className="contact-label">Send Message</span>
          </a>

          <a href="tel:+918897074233" className="contact-card" aria-label="Phone">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <p>+91-8897074233</p>
            <span className="contact-label">Call Now</span>
          </a>

          <a href="https://www.linkedin.com/in/sabbarapu-leela-sai-6096b7259/" target="_blank" rel="noreferrer" className="contact-card" aria-label="LinkedIn">
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
            <span className="contact-label">View Profile</span>
          </a>

          <a href="https://github.com/saisabbarapu" target="_blank" rel="noreferrer" className="contact-card" aria-label="GitHub">
            <div className="contact-icon">📁</div>
            <h3>GitHub</h3>
            <p>Check my work</p>
            <span className="contact-label">View Projects</span>
          </a>

          <a href="/leelasaisabbarapuresume.pdf" target="_blank" rel="noreferrer" className="contact-card" aria-label="Resume">
            <div className="contact-icon">📄</div>
            <h3>Resume</h3>
            <p>Download my CV</p>
            <span className="contact-label">View Resume</span>
          </a>
        </div>

        <div className="contact-footer">
          <p className="muted">
            Prefer a formal approach? Download my <a href="/leelasaisabbarapuresume.pdf" target="_blank" rel="noreferrer">resume</a> or use the contact form above.
          </p>
        </div>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Leela Sai Sabbarapu</small>
      </footer>
    </main>
  )
}

export default App
