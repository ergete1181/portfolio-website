import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create a hidden iframe to handle the form submission
    const iframe = document.createElement('iframe');
    iframe.name = 'formspree-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Create a form element and submit it to the iframe
    const form = document.createElement('form');
    form.action = 'https://formspree.io/f/mvgvqrlj';
    form.method = 'POST';
    form.target = 'formspree-iframe';

    // Add form fields
    const fields = [
      { name: 'name', value: formData.name },
      { name: 'email', value: formData.email },
      { name: 'message', value: formData.message }
    ];

    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Clean up
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
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
        </div>
        
        <div className="contact-form">
          <h3>Send Message</h3>
          {isSubmitted ? (
            <div className="success-message">
              <h4>✅ Message Sent Successfully!</h4>
              <p>Thank you for your message. I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
                disabled={isLoading}
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
                disabled={isLoading}
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              ></textarea>
              <button type="submit" disabled={isLoading}>
                {isLoading ? '📤 Sending...' : '📨 Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;