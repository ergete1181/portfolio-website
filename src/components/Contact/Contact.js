import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify Forms will handle the submission automatically
    // We just need to show success and reset form
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <strong>Phone:</strong> +251 983 836 717
          </div>
          <div className="contact-item">
            <strong>Email:</strong> ergetekagn@gmail.com
          </div>
          <div className="contact-item">
            <strong>Location:</strong> Addis Ababa, Ethiopia
          </div>
          <div className="reference">
            <h4>Reference</h4>
            <p><strong>Tewodros Mengistu</strong></p>
            <p>Amhara Bank Director - Information Systems Security</p>
            <p>Phone: +251 91898565</p>
            <p>Email: teddycbe@gmail.com</p>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send Message</h3>
          {isSubmitted ? (
            <div className="success-message">
              <h4>✅ Message Sent Successfully!</h4>
              <p>Thank you for your message. I'll get back to you soon.</p>
            </div>
          ) : (
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit}
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;