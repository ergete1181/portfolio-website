// src/components/Skills/Skills.js
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Security Technologies",
      skills: ["SIEM", "Firewalls", "WAF", "IDS/IPS", "VPN", "Vulnerability Assessment", "Penetration Testing"]
    },
    {
      category: "Frameworks & Standards",
      skills: ["NIST", "ISO 27001", "PCI-DSS", "Cybersecurity Policies", "Risk Management"]
    },
    {
      category: "Operating Systems",
      skills: ["Kali Linux", "RHEL", "Linux Administration", "Windows Server"]
    },
    {
      category: "Programming & Web",
      skills: ["JavaScript", "Python", "HTML", "CSS"]
    },
    {
      category: "Networking",
      skills: ["TCP/IP", "Network Security", "Security Protocols"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;