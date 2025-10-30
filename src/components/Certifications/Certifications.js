// src/components/Certifications/Certifications.js
import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      name: "Certified Ethical Hacker (CEH) v12",
      issuer: "EC-Council",
      date: "November 2024",
      credential: "ECC8416379052",
      validUntil: "December 2025"
    },
    {
      name: "Huawei Network Security",
      issuer: "Huawei",
      date: "2023"
    },
    {
      name: "Cisco Network Security",
      issuer: "Cisco",
      date: "2023"
    },
    {
      name: "Configuring F5 Advanced WAF",
      issuer: "F5 Networks",
      date: "2023"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Professional Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-header">
              <h3>{cert.name}</h3>
              <span className="issuer">{cert.issuer}</span>
            </div>
            <div className="cert-details">
              <p><strong>Date:</strong> {cert.date}</p>
              {cert.credential && <p><strong>Credential ID:</strong> {cert.credential}</p>}
              {cert.validUntil && <p><strong>Valid Until:</strong> {cert.validUntil}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;