import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Let Netlify handle the form submission
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset the form
      e.target.reset();
    }, 5000);
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
              <p>Thank you for your message. I'll get back to you within 24 hours.</p>
              <p><strong>Check your spam folder if you don't see my reply!</strong></p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                required 
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
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