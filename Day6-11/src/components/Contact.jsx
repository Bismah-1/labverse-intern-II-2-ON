import React from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert('Thanks for contacting!');
    e.target.reset();   // Optional: reset form fields
  };

  return (
    <section className='contact' id='contact'> 
      <h1 className='heading glow-text'><span>Contact</span> us</h1>
      <div className='row'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107589.05877532683!2d74.00720283761312!3d32.5753077912039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f05ff40667bfb%3A0xbccb4ddb7af3de9b!2sAjwa%20Bakers%20%26%20Restaurant%20Gujrat!5e0!3m2!1sen!2s!4v1752189800956!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <form onSubmit={handleSubmit}>
          <h3>Get in Touch</h3>

          <div className='inputBox'>
            <FaUser style={{ color: '#ffc107', marginRight: '10px' }} />
            <input type='text' placeholder='Your Name' required />
          </div>

          <div className='inputBox'>
            <FaEnvelope style={{ color: '#ffc107', marginRight: '10px' }} />
            <input type='email' placeholder='Your Email' required />
          </div>

          <div className='inputBox'>
            <FaPhone style={{ color: '#ffc107', marginRight: '10px' }} />
            <input type='tel' placeholder='Your Phone' required />
          </div>

          <input type='submit' value='Contact Now' className='btn' />
        </form>
      </div>
    </section>
  );
};

export default Contact;
