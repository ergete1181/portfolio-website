import React from 'react';

const Hero = () => {
  // Download CV function - Option 2: PDF Download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ergete_Kagnewu_CV.pdf';
    link.download = 'Ergete_Kagnewu_CV.pdf';
    link.target = '_blank'; // Open in new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle contact scroll
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>ERGETE KAGNEWU</h1>
        <h2>System Security Officer</h2>
        <p>Cybersecurity Professional | Certified Ethical Hacker | Network Security Specialist</p>
        <div className="hero-buttons">
          <button onClick={scrollToContact} className="btn btn-primary">
            Contact Me
          </button>
          <button onClick={handleDownloadCV} className="btn btn-secondary">
            Download CV
          </button>
        </div>
      </div>
      <div className="security-badge">
        <div className="badge">
          <span>CEH</span>
          <small>Certified</small>
        </div>
      </div>
    </section>
  );
};

export default Hero;