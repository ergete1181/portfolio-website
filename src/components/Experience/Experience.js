// src/components/Experience/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "System Security Officer",
      company: "Amhara Bank",
      period: "February 2024 – Present",
      responsibilities: [
        "Develop, implement, and maintain cybersecurity policies, procedures, and standards",
        "Conduct regular security audits and risk assessments based on PCI-DSS, ISO 27001, NIST frameworks",
        "Perform vulnerability assessments and coordinate remediation efforts",
        "Perform penetration testing activities and follow up on findings",
        "Configure and Monitor SIEM, Firewall/IDS/IPS, WAF and other security tools",
        "Develop and deliver security awareness programs for employees"
      ]
    },
    {
      title: "Junior System Security Officer",
      company: "Amhara Bank",
      period: "July 2023 – February 2024",
      responsibilities: [
        "Perform security audits and risk assessments aligned with PCI-DSS, ISO 27001, and NIST frameworks",
        "Conduct vulnerability assessments and support remediation planning and implementation",
        "Perform and document penetration testing activities",
        "Configure and monitor SIEM, firewall/IDS/IPS, and WAF tools to detect and respond to threats"
      ]
    },
    {
      title: "Information Technology Officer I",
      company: "Amhara Bank",
      period: "April 2022 – July 2023",
      responsibilities: [
        "Troubleshot IT infrastructure and network devices",
        "Built foundational skills in security, networking, and systems administration",
        "Provide user support and contributed to overall IT service stability"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="period">{exp.period}</span>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;