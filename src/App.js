// src/App.js
import React from "react";
import './App.css';

function App() {
  return (
    <div className="portfolio">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Designs That Dazzle. Words That Wow.</h1>
        <p>
          I'm Meghana, I help brands come alive online with pixel-perfect websites and content that gets remembered.<br/>
          Ready to make your vision a reality? Let's create something dazzling!
        </p>
        <a href="#contact" className="hero-btn">Let's Connect</a>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Third-year BTech student by day, digital creator by night.<br/>
          I build frontend wonders (and soon, backend brains!) while crafting words that captivate and inform.<br/>
          Want your brand to shine with premium web design and compelling content? Let’s create something extraordinary!
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>My Services</h2>
        <ul>
          <li><i className="fas fa-paint-brush"></i> Frontend Web Development (UI/UX)</li>
          <li><i className="fas fa-database"></i> Backend/API Integration <em>(coming soon!)</em></li>
          <li><i className="fas fa-pen-nib"></i> Content Creation & Copywriting</li>
          <li><i className="fas fa-search"></i> SEO Optimization</li>
        </ul>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects">
        <h2>My Portfolio Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <img src={process.env.PUBLIC_URL + "/images/bb.png"} alt="Blubean Cafe" className="project-thumb" />

            <h3>Blubean Cafe</h3>
            <p>Modern café website with menu, order, and cozy vibes.</p>
            <a href="https://meghanaravuri06.github.io/website1/" target="_blank" rel="noopener noreferrer">View Live Site</a>
            <a href="https://github.com/MeghanaRavuri06/website1" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
          <div className="project-item">
            <img src={process.env.PUBLIC_URL + "/images/nn.png"} alt="Narico Naturals" className="project-thumb"/>
            <h3>Narico Naturals</h3>
            <p>Eco-friendly soaps & oils empowering local makers.</p>
            <a href="https://meghanaravuri06.github.io/website2/" target="_blank" rel="noopener noreferrer">View Live Site</a>
            <a href="https://github.com/MeghanaRavuri06/website2" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
          <div className="project-item">
            <img src={process.env.PUBLIC_URL + "/images/b.png"} alt="Bloom & Co" className="project-thumb"/>
            <h3>Flowers Ordering App</h3>
            <p>Beautiful bouquets and plant deliveries, made simple.</p>
            <a href="https://meghanaravuri06.github.io/website3/" target="_blank" rel="noopener noreferrer">View Live Site</a>
            <a href="https://github.com/MeghanaRavuri06/website3" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      </section>

      {/* CONTENT WRITING SECTION */}
      <section className="content-writing">
        <h2>Content That Connects</h2>
        <p>
          Need words that actually work? I craft engaging and SEO-friendly blogs, product descriptions, and website copy—customized for your brand.<br/>
          <strong>Ask me for a free sample paragraph!</strong>
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <h2>Let's Work Together!</h2>
        <p>Email: <a href="mailto:ugc.meghana@email.com">ugc.meghana@email.com</a></p>
        <p>
          <a href="https://www.linkedin.com/in/meghana-ravuri334297" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://github.com/MeghanaRavuri06" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>
    </div>
  );
}

export default App;
