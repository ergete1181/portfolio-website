// src/components/About/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>Professional Profile</h2>
        <div className="about-content">
          <p>
            IT Security professional with over three years of experience in cybersecurity and IT, 
            specializing in the development and implementation of cybersecurity policies, procedures, 
            and standards. Experienced in conducting vulnerability assessments, penetration testing, 
            and risk management aligned with international frameworks such as NIST and ISO. 
            Proficient in SIEM solutions, firewall/IDS/IPS, and WAF configuration and monitoring. 
            Skilled in Linux administration, incident response, and familiar with programming 
            languages, particularly JavaScript and Python.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Phone:</strong> +251 983 836 717
            </div>
            <div className="contact-item">
              <strong>Email:</strong> ergetekagn@gmail.com
            </div>
            <div className="contact-item">
              <strong>Location:</strong> Addis Ababa, Ethiopia
            </div>
            <div className="contact-item">
              <strong>Languages:</strong> Amharic (Fluent), English (Fluent)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;