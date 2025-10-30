// src/components/Education/Education.js
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "MSc in Computer Science (Network & Security)",
      institution: "Addis Ababa University",
      period: "2023 – Present",
      location: "Addis Ababa, Ethiopia"
    },
    {
      degree: "BSc in Computer Science",
      institution: "Debre Berhan University",
      period: "2017 – 2021",
      location: "Debre Berhan, Ethiopia",
      gpa: "GPA: 3.86"
    }
  ];

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p className="period">{edu.period}</p>
            <p className="location">{edu.location}</p>
            {edu.gpa && <p className="gpa">{edu.gpa}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;